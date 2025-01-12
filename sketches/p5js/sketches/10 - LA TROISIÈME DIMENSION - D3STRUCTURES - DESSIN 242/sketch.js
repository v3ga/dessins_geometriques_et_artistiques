// LA TROISIÈME DIMENSION - D3STRUCTURES

// ----------------------------------------------------
let DESSIN=242;
 
// ----------------------------------------------------
let NP=480,PI=Math.PI;
let DC=2,TC=2;
let OX=0,OY=0,OZ=0;
let AZ=PI/4,AY=0,AX=0;
let QX=-2,QY=0,QZ=3;
let N=100;
let C1=Math.cos(AZ),S1=-Math.sin(AZ);
let C2=Math.cos(AY),S2=-Math.sin(AY);
let C3=Math.cos(AX),S3=-Math.sin(AX);
let MX,MY,MZ,B1=0;

// ----------------------------------------------------
function setup() 
{
  INIT2(1000);

  for (let J=0;J<=2;J++)
  for (let I=0;I<=N;I++)
  {
    if (J==1) MX=I,MY=0,MZ=0;
    if (J==2) MX=0,MY=I,MZ=0;
    B1=0;
    GOSUB_PERSPECTIVE();
    if (J==1) MX=I,MY=N,MZ=0;
    if (J==2) MX=N,MY=I,MZ=0;
    GOSUB_PERSPECTIVE();
  }
  translate_(0,-700)
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
