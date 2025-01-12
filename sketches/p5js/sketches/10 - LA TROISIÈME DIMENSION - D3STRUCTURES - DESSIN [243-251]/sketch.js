// LA TROISIÈME DIMENSION - D3STRUCTURES
//
// TODO : 249 not working (QZ value ?)

// ----------------------------------------------------
let DESSIN=243; // [243,244,245,246,247,248,249,250,251,252]
 
// ----------------------------------------------------
let NP=480,PI=Math.PI;
let DC=2,TC=2;
let OX=0,OY=0,OZ=0;
let AZ=0,AY=-2*PI/5,AX=0;
let QX=-2.7,QY=0,QZ=0;
let N=2000,M=20;
if (DESSIN==244)
  M=50;
else if (DESSIN==245)
  M=20;
else if (DESSIN==246)
  M=50;
else if (DESSIN==247)
  M=200;
else if (DESSIN==248)
  N=150,M=50;
else if (DESSIN==249)
  AZ=-PI/6,AY=0,AX=0,QZ=3,N=200,M=50;
else if (DESSIN==250)
  AZ=-PI/6,AY=-PI/5,AX=0,QZ=0,N=200,M=50;
else if (DESSIN==251)
  AZ=0,AY=-2*PI/5,AX=0,QZ=0,N=200,M=50;
else if (DESSIN==252)
  AZ=0,AY=-PI/9,AX=0,QX=-2.5,N=2000,M=100;

let C1=Math.cos(AZ),S1=-Math.sin(AZ);
let C2=Math.cos(AY),S2=-Math.sin(AY);
let C3=Math.cos(AX),S3=-Math.sin(AX);
let MX,MY,MZ,B1=0,R,AN;
// ----------------------------------------------------
function setup() 
{
  INIT();
  for (let I=0;I<=(DESSIN==247 ? N/2 : N);I++)
  {
    MX=2*I/N-1;
    if (DESSIN==245 || DESSIN==246)
      R=1-Math.abs(MX);
    else if (DESSIN==249)
      R=.5*sqrt(1-MX*MX);
    else if (DESSIN==252)
      R=.3+.3*sin(2*PI*MZ+3*PI/2);
    else
      R=sqrt(1-MX*MX);
    AN=2*PI*M*I/N;
    MY=R*Math.cos(AN);
    MZ=R*Math.sin(AN);
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
