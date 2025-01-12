// LA TROISIÈME DIMENSION - D3STRUCTURES
//
// Perspective bug ? 

// ----------------------------------------------------
let DESSIN=240;
 
// ----------------------------------------------------
let NP=480,PI=Math.PI;
let DC=2,TC=2;
let OX=0,OY=0,OZ=0;
let AZ=2*PI/5,AY=0,AX=0;
let QX=-2.5,QY=0,QZ=0;
let N=7;
let C1=Math.cos(AZ),S1=-Math.sin(AZ);
let C2=Math.cos(AY),S2=-Math.sin(AY);
let C3=Math.cos(AX),S3=-Math.sin(AX);
let MX,MY,MZ,B1=0,RA;
if (DESSIN==241)
{
  AZ=PI/4,AY=Math.atan(Math.sqrt(.5)),AX=0;
  QX=-12,QY=-1.4,QZ=.8;
}

// ----------------------------------------------------
function setup() 
{
  INIT();

  for (let K=1;K<=3;K++)
  for (let I=0;I<=N;I++)
  for (let J=0;J<=N;J++)
  {
    if (K==1) MX=I,MY=0,MZ=J;
    else if (K==2) MX=J,MY=I,MZ=0;
    else if (K==3) MX=0,MY=J,MZ=I;
    B1=0;
    GOSUB_PERSPECTIVE();
    if (K==1) MX=I,MY=N,MZ=J;
    else if (K==2) MX=J,MY=I,MZ=N;
    else if (K==3) MX=N,MY=J,MZ=I;
    GOSUB_PERSPECTIVE();
  }
  TRACE2();
}

// ----------------------------------------------------
function GOSUB_PERSPECTIVE()
{
  MX=MX-OX;MY=MY-OY;MZ=MZ-OZ; 
  UU=MX;MX=C1*UU-S1*MY;MY=S1*UU+C1*MY;
  UU=MX;MX=C2*UU-S2*MZ;MZ=S2*UU+C2*MZ;
  UU=MY;MY=C3*UU-S3*MZ;MZ=S3*UU+C3*MZ;
  MX=MX-QX;MY=MY-QY;MZ=MZ-QZ;
  let KP=DC/MX;
  let XX=-KP*MY,YY=KP*MZ;
  let X_=int(NP*(.5+XX/TC));
  let Y_=int(NP*(.5+YY/TC));
  if (B1==1) LPRINT(`D${X_},${Y_}`);
  if (B1==0) B1=1; 
  LPRINT(`M${X_},${Y_}`);
}
