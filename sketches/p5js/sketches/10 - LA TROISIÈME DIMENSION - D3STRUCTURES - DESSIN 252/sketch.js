// LA TROISIÈME DIMENSION - D3STRUCTURES
//
// TODO : 249 not working (QZ value ?)

// ----------------------------------------------------
let DESSIN=252;
 
// ----------------------------------------------------
let NP=480,PI=Math.PI;
let DC=2,TC=2;
let OX=0,OY=0,OZ=0;
let AZ=0,AY=-PI/9,AX=0;
let QX=-2.5,QY=0,QZ=0;
let N=2000,M=100;

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
    MZ=2*I/N-1;
    R=.3+.3*sin(2*PI*MZ+3*PI/2);
    AN=2*PI*M*I/N;
    MX=R*Math.cos(AN);
    MY=R*Math.sin(AN);
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
