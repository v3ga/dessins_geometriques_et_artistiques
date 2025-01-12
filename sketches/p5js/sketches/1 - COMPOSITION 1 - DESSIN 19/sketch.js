// COMPOSITION I - DESSIN 19

// ----------------------------------------------------
let DESSIN = 19;

// ----------------------------------------------------
let NP=480, PI = Math.PI;
let K1=99,DX=NP/2,DY=NP/2,R1=NP*.25,A1=0;
let K=7,H=3,R=NP*.25,AD=PI/2;
let CX,CY;

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
    let Y = CY+R*sin(2*I*H*PI/K+AD);
    Y = int(1*Y); // SI ON MET 1.5 LE DESSIN "DÉBORDE"
    if (I == 0) LPRINT(`M${X},${Y}`);
    if (I > 0) LPRINT(`D${X},${Y}`);
  }
  
}
