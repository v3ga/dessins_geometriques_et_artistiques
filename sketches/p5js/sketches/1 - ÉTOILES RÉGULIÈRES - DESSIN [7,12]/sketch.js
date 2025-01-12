// ÉTOILES RÉGULIÈRES

// ----------------------------------------------------
let DESSIN = 7; // [7,8,9,10,11,12]

// ----------------------------------------------------
let NP=480, PI = Math.PI;
let K=5,H=3,CX=NP/2,CY=NP/2,R=NP*.45,AD=PI/2;

if (DESSIN==8)  
  K=7;
else if (DESSIN==9)  
  K=20,H=9;
else if (DESSIN==10)  
  K=20,H=7;
else if (DESSIN==11)  
  K=51,H=20;
else if (DESSIN==12)  
  K=51,H=25;

// ----------------------------------------------------
function setup() 
{
  INIT();
  
  for (let I = 0; I < K; I++) {
    let X = int(CX+R*cos(2*I*H*PI/K+AD));
    let Y = int(CY+R*sin(2*I*H*PI/K+AD));
    if (I == 0) LPRINT(`M${X},${Y}`);
    if (I > 0) LPRINT(`D${X},${Y}`);
  }
  
  TRACE();
}


