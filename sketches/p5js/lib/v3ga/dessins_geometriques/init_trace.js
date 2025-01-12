// ----------------------------------------------------
var OUTPUT = "";
var DG_GREY = "#F5F5F5";
var PALETTES = {
  RED: ["#E4BAA8", "#8F080E"], // background, stroke
  GREEN: ["#99C7BB", "#005B51"],
  YELLOW: ["#E6DB76", "#040A53"],
  NEW_YELLOW: ["#F7EB23", "#013ABB"],
  NEW_BLUE: ["#013ABB", "#F7EB23"],
};

var BG_COLOR = DG_GREY,
  STROKE_COLOR = "#000000";
var PALETTE_SELECT;
var _SVG_ = false;
var svgStrokeColor = STROKE_COLOR;
var svgElmt,
  svgVertices = [],
  svgTranslate;

// ----------------------------------------------------
function ABS(X) {
  return abs(X);
}
function ATN(X) {
  return atan(X);
}
function RND(max) {
  return random(max);
}
function SGN(X) {
  return X < 0 ? -1 : 1;
}
function SQR(X) {
  return sqrt(X);
}
function LPRINT(s) {
  OUTPUT += s;
}
function DESSIN_EST(a) {
  return a.includes(DESSIN);
}
// ----------------------------------------------------
function PALETTE(which) {
  let p = PALETTES[which];
  if (p) {
    BG_COLOR = p[0];
    STROKE_COLOR = p[1];
    PALETTE_SELECT = which;
  } else {
    BG_COLOR = DG_GREY;
    STROKE_COLOR = 0;
  }
}

// ----------------------------------------------------
function INIT(opts = {}) {
  init_(NP, NP, opts);
}

// ----------------------------------------------------
function INIT2(H, opts = {}) {
  init_(NP, H, opts);
}

// ----------------------------------------------------
function INIT_WH(W, H) {
  init_(W, H, opts);
}

// ----------------------------------------------------
function TRACE(opts = {}) {
  let log = opts.log ?? false;
  let endShapeClose = opts.endShapeClose ?? true;
  let c = "";
  let x,
    y,
    n = "";
  let command = "",
    prev_command = "";
  let state = 0;
  let isCommand = (c) => {
    return c == "M" || c == "D";
  };
  let isNum = (c) => {
    return (c >= "0" && c <= "9") || c == "-";
  };
  let isSep = (c) => {
    return c == ",";
  };
  let read = (i) => {
    return OUTPUT.charAt(i);
  };
  let end = (i) => {
    return i >= OUTPUT.length;
  };
  let logState = (_) => {
    /*if(log) console.log(`state=${state}, i=${i}-${OUTPUT.length} / c=${c}`);*/
  };
  // 0 : READ COMMAND
  // 1 : READ X
  // 2 : READ Y
  // 3 : EXECUTE

  if (log) console.log(OUTPUT);

  let i = 0;
  let error = false;
  let done = false;
  let nb = 0;
  while (error == false && done == false) {
    if (state == 0) {
      c = read(i);
      logState();
      if (isCommand(c)) {
        command = c;
        state = 1;
        i++;
      } else {
        error = true;
      }
    } else if (state == 1) {
      c = read(i);
      logState();
      if (isNum(c)) {
        n += c;
        i++;
      } else if (isSep(c)) {
        x = int(n);
        n = "";
        state = 2;
        i++;
      } else error = true;
    } else if (state == 2) {
      c = read(i);
      logState();
      if (isNum(c)) {
        n += c;
        i++;
      } else if (isCommand(c) || end(i)) {
        y = height - int(n);
        n = "";
        state = 3;
      } else error = true;
    } else if (state == 3) {
      logState();
      if (command == "M") {
        if (prev_command == "D") {
          if (log) console.log(`endShape()`);
          endShapeClose ? endShape_(CLOSE) : endShape_();
        }

        beginShape_();
        vertex_(x, y);
        if (log)
          console.log(`command=${command}, beginShape();vertex(${x},${y});`);
      } else if (command == "D") {
        vertex_(x, y);
        if (log) console.log(`command=${command} , vertex(${x},${y});`);
        if (end(i + 1)) {
          if (log) console.log(`endShape()`);
          endShapeClose ? endShape_(CLOSE) : endShape_();
        }
      }

      if (!end(i + 1)) {
        prev_command = command;
        state = 0;
      } else {
        if (log) console.log("DONE");
        done = true;
      }
    }
  }
}

// ----------------------------------------------------
function TRACE2(opts = {}) {
  opts.endShapeClose = false;
  TRACE(opts);
}

// ----------------------------------------------------
function DESSIN_DANS(a) {
  return a.includes(DESSIN);
}

// ----------------------------------------------------
function keyPressed() {
  if (key == " ") {
    let filename = "DESSIN_GEOMETRIQUE";
    if (DESSIN) filename += `_${DESSIN}`;
    if (PALETTE_SELECT) filename += `_${PALETTE_SELECT}`;
    filename += _SVG_ ? ".svg" : ".png";
    save_(filename);
  }
}

// ----------------------------------------------------
function init_(w, h, opts) {
  if (opts.svg === true) {
    _SVG_ = true;
    noCanvas();
    width = w;
    height = h;
    svgTranslate = createVector();
    svgElmt = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElmt.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgElmt.setAttribute("version", `1.1`);
    svgElmt.setAttribute("viewBox", `0 0 ${w} ${h}`);
    document.body.appendChild(svgElmt);
  } else {
    _SVG_ = false;
    createCanvas(w, h);
  }

  background_(BG_COLOR);
  stroke_(STROKE_COLOR);
  noFill_();
}

// ----------------------------------------------------
function background_(color) {
  if (_SVG_) svgElmt.style.backgroundColor = color;
  else background(color);
}

// ----------------------------------------------------
function stroke_(color) {
  if (_SVG_) svgStrokeColor = color;
  else stroke(color);
}

// ----------------------------------------------------
function noFill_() {
  if (!_SVG_) noFill();
}

// ----------------------------------------------------
function beginShape_() {
  if (_SVG_) svgVertices = [];
  else beginShape();
}

// ----------------------------------------------------
function vertex_(x, y) {
  if (_SVG_) svgVertices.push({ x: x, y: y });
  else vertex(x, y);
}

// ----------------------------------------------------
function endShape_(mode) {
  if (_SVG_) {
    let polyline = document.createElementNS(
      "http://www.w3.org/2000/svg",
      mode == CLOSE ? "polygon" : "polyline"
    );
    polyline.setAttribute("stroke", svgStrokeColor);
    polyline.setAttribute("fill", "none");
    let strPoints = "";
    let first = true;
    svgVertices.forEach((v) => {
      strPoints += `${first ? "" : " "}${v.x},${v.y}`;
      first = false;
    });
    polyline.setAttribute("points", strPoints);
    if (svgTranslate.x != 0 || svgTranslate.y != 0)
      polyline.setAttribute(
        "transform",
        `translate(${svgTranslate.x} ${svgTranslate.y})`
      );
    svgElmt.appendChild(polyline);
  } else {
    if (mode) endShape(mode);
    else endShape();
  }
}

// ----------------------------------------------------
function translate_(x, y) {
  if (_SVG_) {
    svgTranslate.add(x, y);
  } else {
    translate(x, y);
  }
}

// ----------------------------------------------------
function save_(filename) {
  if (_SVG_) {
    let svgData = svgElmt.outerHTML;
    let preface = '<?xml version="1.0" standalone="no"?>\r\n';
    let svgBlob = new Blob([preface, svgData], {
      type: "image/svg+xml;charset=utf-8",
    });
    let svgUrl = window.URL.createObjectURL(svgBlob);
    let downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = filename;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  } else {
    save(filename);
  }
}
