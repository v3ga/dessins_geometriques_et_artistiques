// COMPOSITION I

// ----------------------------------------------------
let DESSIN = 14; // [14,15,16,17,18]

// ----------------------------------------------------
let NP=480, PI = Math.PI;
let K1=5,DX=NP/2,DY=NP/2,R1=NP*.27,A1=PI/2;
let K=25,H=12,R=NP*.22,AD=PI/2;
let CX,CY;

if (DESSIN==14)
{
    K1=6,R1=NP*.2,A1=0;
    K=24,H=11,R=NP*.3,AD=0;
}
else if (DESSIN==15)
{
    K1=40,R1=NP*.25,A1=PI/2;
    K=80,H=1,R=NP*.25,AD=PI/2;
}
else if (DESSIN==16)
{
    K1=10,R1=NP*.35,A1=0;
    K=10,H=3,R=NP*.15,AD=0;
}
else if (DESSIN==17)
{
    K1=63,R1=NP*.15,A1=0;
    K=4,H=1,R=NP*.35,AD=0;
}
else if (DESSIN==18)
{
    K1=25,R1=NP*.1,A1=PI/2;
    K=5,H=2,R=NP*.4,AD=PI/2;
}

// ----------------------------------------------------
function setup() 
{
  INIT();

  for (let I1 = 0; I1 < K1; I1++) { // ERREUR DANS LE LIVRE ? K1 à la place de K1-1
    CX = DX+R1*cos(2*PI*I1/K1+A1);
    CY = DY+R1*sin(2*PI*I1/K1+A1);
    
    GOSUB_ETOILES_REGULIERES();
  }
  
  TRACE();
}

// ----------------------------------------------------
function GOSUB_ETOILES_REGULIERES()
{
  for (let I = 0; I < K; I++) {
    let X = int(CX+R*cos(2*I*H*PI/K+AD));
    let Y = int(CY+R*sin(2*I*H*PI/K+AD));
    if (I == 0) LPRINT(`M${X},${Y}`);
    if (I > 0) LPRINT(`D${X},${Y}`);
  }
  
}

