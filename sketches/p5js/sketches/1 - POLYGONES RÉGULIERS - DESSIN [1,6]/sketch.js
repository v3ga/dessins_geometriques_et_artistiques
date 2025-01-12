// POLYGONES RÉGULIERS

// ----------------------------------------------------
let DESSIN = 1; // [2,3,4,5,6]

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let K=3,CX=NP/2,CY=NP/2,R=NP*0.45,AD=0;

if (DESSIN == 2)
  K=4, AD=0;
else if (DESSIN == 3)
  AD=PI/2;
else if (DESSIN == 4)
  K=5,AD=PI/2;
else if (DESSIN == 5)
  K=8,R=NP*.5,AD=PI/8;
else if (DESSIN == 6)
  K=20,R=NP*.4,AD=0;

// ----------------------------------------------------
function setup() 
{
  INIT();
  
  for (let I = 0; I < K; I++) {
    let X = int(CX + R * cos((2 * I * PI) / K + AD));
    let Y = int(CY + R * sin((2 * I * PI) / K + AD));
    if (I == 0) LPRINT(`M${X},${Y}`);
    if (I > 0) LPRINT(`D${X},${Y}`);
  }
  
  TRACE();
}