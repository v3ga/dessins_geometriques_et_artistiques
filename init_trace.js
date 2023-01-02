// ----------------------------------------------------
var OUTPUT = "";
var DG_GREY = 245;
var PALETTES = {
"RED" :     ["#E4BAA8","#8F080E"], // background, stroke
"GREEN" :   ["#99C7BB","#005B51"],
"YELLOW" :  ["#E6DB76","#040A53"]
};

var BG_COLOR=DG_GREY,STROKE_COLOR=0;
var PALETTE_SELECT;

// ----------------------------------------------------
function SGN(X)
{
  return X<0 ? -1 : 1; 
}

// ----------------------------------------------------
function LPRINT(s)
{
  OUTPUT+=s;
}

// ----------------------------------------------------
function PALETTE(which)
{
  let p = PALETTES[which];
  if (p)
  {
    BG_COLOR=p[0];
    STROKE_COLOR=p[1];
    PALETTE_SELECT=which;
  }
  else
  {
    BG_COLOR=DG_GREY;
    STROKE_COLOR=0;
  }
}

// ----------------------------------------------------
function INIT()
{
  createCanvas(NP,NP);
  background(BG_COLOR);
  stroke(STROKE_COLOR);
  noFill();
}

// ----------------------------------------------------
function INIT2(H)
{
  createCanvas(NP,H);
  background(BG_COLOR);
  stroke(STROKE_COLOR);
  noFill();
}

// ----------------------------------------------------
function INIT_WH(W,H)
{
  createCanvas(W,H);
  background(BG_COLOR);
  stroke(STROKE_COLOR);
  noFill();
}

// ----------------------------------------------------
function TRACE(opts={})
{
  let log = opts.log??false;
  let endShapeClose = opts.endShapeClose??true;
  let c = '';
  let x,y,n="";
  let command = "", prev_command = "";
  let state = 0;
  let isCommand = c => { return (c=='M' || c=='D')};
  let isNum = c => { return (c>='0' && c<='9') || c=='-'};
  let isSep = c => { return c==','};
  let read = i => {return OUTPUT.charAt(i)};
  let end = i => {return i>=OUTPUT.length};
  let logState = _=> {if(log) console.log(`state=${state}, i=${i}-${s.length} / c=${c}`); } 
  // 0 : READ COMMAND
  // 1 : READ X
  // 2 : READ Y
  // 3 : EXECUTE
  
  if (log)
    console.log(S)
  
  let i = 0;
  let error = false;
  let done = false;
  let nb=0;
  while((error==false && done==false))
  {
    
    if (state == 0)
    {
      c = read(i);
      logState();
      if (isCommand(c))
      {
        command = c;
        state = 1;
        i++;
      }
      else
      {
        error = true;
      }
    }
    else if (state == 1)
    {
      c = read(i);
      logState();
      if (isNum(c)){ n+=c; i++}
      else if (isSep(c))
      {
        x = int(n);
        n="";
        state = 2;
        i++;
      }
      else
        error = true;      
    }
    else if (state == 2)
    {
      c = read(i);
      logState();
      if (isNum(c)) { n+=c; i++}
      else if (isCommand(c) || end(i))
      {
        y = height-int(n);
        n="";
        state = 3;
      }
      else
        error = true;      
    }
    else if (state == 3)
    {
      logState();
      if (command=="M")
      {
        if (prev_command=="D") {if (log) console.log(`endShape()`) ; endShapeClose ? endShape(CLOSE) : endShape();} 
        
        beginShape();
        vertex(x,y);
        if (log)
          console.log(`command=${command}, beginShape();vertex(${x},${y});`)
      }
      else if (command=="D")
      {
        vertex(x,y);
        if (log)
          console.log(`command=${command} , vertex(${x},${y});`)
        if (end(i+1)) { if (log) console.log(`endShape()`) ; endShapeClose ? endShape(CLOSE) : endShape(); };
      }
      
      if (!end(i+1))
      {
        prev_command = command
        state = 0;
      }
      else
      {
        if (log) console.log("DONE");        
        done = true;
      }
      
    }
  }
}

// ----------------------------------------------------
function TRACE2(opts={})
{
  opts.endShapeClose = false;
  TRACE(opts)
}

// ----------------------------------------------------
function keyPressed()
{
  if (key == ' ') 
  {
    let filename = "DESSIN_GEOMETRIQUE"
    if (DESSIN) filename += `_${DESSIN}`;
    if (PALETTE_SELECT) filename += `_${PALETTE_SELECT}`;
    filename+=".png";
    save(filename);
  }
}

