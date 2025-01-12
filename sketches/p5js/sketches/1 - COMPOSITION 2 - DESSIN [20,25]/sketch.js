// COMPOSITION 2

// ----------------------------------------------------
let DESSIN = 20; // [20,21,22,23,24,25]

// ----------------------------------------------------
let NP=480, PI = Math.PI;
let K1=8,N=32,K=16,H=5,R1=NP*.36,R=NP*.14,RR=.9;
let DX=NP/2,DY=NP/2,A1=0,AD=0;
let CX,CY,R2,R3;

// ----------------------------------------------------
if (DESSIN==21)
  K1=10,N=30,K=8,H=3,R1=NP*.35,R=NP*.15,RR=.85;
else if (DESSIN==22)
  K1=10,N=10,K=18,H=7,R1=NP*.0,R=NP*.5,RR=.80;
else if (DESSIN==23)
  K1=10,N=10,K=21,H=10,R1=NP*.0,R=NP*.5,RR=.75;
else if (DESSIN==24)
  K1=28,N=56,K=7,H=3,R1=NP*.15,R=NP*.35,RR=.95;
else if (DESSIN==25)
  K1=20,N=60,K=8,H=1,R1=NP*.05,R=NP*.45,RR=.945;

// ----------------------------------------------------
function setup() 
{
  INIT();

  for (let I1 = 0; I1 < N; I1++) { // ERREUR DANS LE LIVRE ? K1 à la place de K1-1
    R2 = R1*pow(RR,I1);
    R3 = R*pow(RR,I1);
    
    CX = DX+R2*cos(2*PI*I1/K1+A1);
    CY = DY+R2*sin(2*PI*I1/K1+A1);
    
    GOSUB_ETOILES_REGULIERES();
    
  }
  
  TRACE();
}

// ----------------------------------------------------
function GOSUB_ETOILES_REGULIERES()
{
  for (let I = 0; I < K; I++) {
    let X = int(CX+R3*cos(2*I*H*PI/K+AD));
    let Y = int(CY+R3*sin(2*I*H*PI/K+AD));
    if (I == 0) LPRINT(`M${X},${Y}`);
    if (I > 0) LPRINT(`D${X},${Y}`);
  }
  
}
