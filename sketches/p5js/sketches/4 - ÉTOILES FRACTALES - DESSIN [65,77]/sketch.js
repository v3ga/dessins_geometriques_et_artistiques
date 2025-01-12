// ÉTOILES FRACTALES 
//
// DESSIN 65 | modified : 110 Y0=NP/4 -> Y0=NP/2.25
// DESSIN 66 | added : Y0=NP/2.15
// DESSIN 67 | added : X0=NP/2.75,Y0=NP/1.45
// DESSIN 68 | added : X0=NP/2.35,Y0=NP/1.35
// DESSIN 69 | added : X0=NP/1.85,Y0=NP/1.5
// DESSIN 70 | added : X0=NP/1.85,Y0=NP/1.8
// DESSIN 71 | added : X0=(NP-LL),Y0=NP/3.5
// DESSIN 72 | added : X0=(NP-LL)/2.5,Y0=NP/1.425
// DESSIN 73 | added : X0=(NP-LL),Y0=NP/1.525
// DESSIN 74 | added : X0=(NP-LL)/15,Y0=NP/1.6
// DESSIN 75 | TODO : seems rotated 
// DESSIN 76 | added : X0=NP/16,Y0=NP/3.8
// dessin 77 | added : X0=NP/20,Y0=NP/1.59

// ----------------------------------------------------
let DESSIN = 65; // [65,66,67,68,69,70,71,72,73,74,75,76,77]

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5,K=5,RA=.35,LL=NP,AA=4*PI/5;
let X0=(NP-LL)/2,Y0=NP/2.25,A0=-AA;

// ----------------------------------------------------
if (DESSIN == 66)
  N=7,K=4,RA=.32,LL=NP,AA=6*PI/7,Y0=NP/2.15;
else if (DESSIN == 67)
  N=12,K=3,RA=.5,LL=NP*11/48,AA=2*PI/12,X0=NP/2.75,Y0=NP/1.45;
else if (DESSIN == 68)
  N=5,K=2,RA=.5,LL=NP/2,AA=2*PI/5,X0=NP/2.35,Y0=NP/1.35;
else if (DESSIN == 69)
  N=8,K=2,RA=.5,LL=NP/3,AA=PI/4,X0=NP/1.85,Y0=NP/1.5;
else if (DESSIN == 70)
  N=20,K=2,RA=.5,LL=NP*13/96,AA=PI/10,X0=NP/1.85,Y0=NP/1.8;
else if (DESSIN == 71)
  N=15,K=2,RA=.9,LL=NP*43/48,AA=14*PI/15,X0=(NP-LL),Y0=NP/3.5;
else if (DESSIN == 72)
  N=16,K=3,RA=.27,LL=NP/6,AA=PI/8,X0=(NP-LL)/2.5,Y0=NP/1.425;
else if (DESSIN == 73)
  N=8,K=4,RA=.5,LL=NP*17/48,AA=PI/4,X0=(NP-LL),Y0=NP/1.525;
else if (DESSIN == 74)
  N=7,K=5,RA=.383,LL=NP*7/12,AA=2*PI/5,X0=(NP-LL)/15,Y0=NP/1.6;
else if (DESSIN == 75)
  N=4,K=8,RA=.47,LL=NP,AA=PI/2,X0=NP/6,Y0=NP/0.8;
else if (DESSIN == 76)
  N=15,K=3,RA=.3,LL=NP,AA=14*PI/15,X0=NP/16,Y0=NP/3.8;
else if (DESSIN == 77)
  N=3,K=11,RA=.62,LL=NP,AA=2*PI/3,X0=NP/20,Y0=NP/1.59;

// ----------------------------------------------------
function setup() 
{
  INIT();
  LPRINT(`M${int(X0)},${int(Y0)}`);  
  NN=N*Math.pow(N-1,K-1)-1;
  for (let I=0; I<=NN; I++)
  {
    let I1=I, H=0;  
    while ( I1%(N-1)==0 && H<(K-1) )
    {
      I1 = I1/(N-1); H=H+1;
    }
    L0=LL*Math.pow(RA,K-1-H);
    A0=A0+AA;
    X0=X0+L0*cos(A0);
    Y0=Y0+L0*sin(A0);
    LPRINT(`D${int(X0)},${int(Y0)}`);
  }
  TRACE();
}

