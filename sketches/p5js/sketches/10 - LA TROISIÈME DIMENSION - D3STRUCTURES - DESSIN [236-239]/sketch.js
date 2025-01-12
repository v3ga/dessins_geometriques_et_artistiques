// LA TROISIÈME DIMENSION - D3STRUCTURES

// ----------------------------------------------------
let DESSIN=236;
 
// ----------------------------------------------------
let NP=480,PI=Math.PI;
let DC=2,TC=2;
let OX=0,OY=0,OZ=0;
let AZ=0,AY=0,AX=0;
let QX=-2.5,QY=0,QZ=0;
let N=4000,M=100,K=0,R1=.6,R2=.15;
if (DESSIN==237)
{
  AY=-PI/4;
  QX=-3;
}
else if (DESSIN==238)
{
  R1=.5,R2=.5;
  AY=-PI/4;
}
else if (DESSIN==239)
{
  R1=.6,R2=.25;
  AY=-PI/4;
  QX=-2;
}
let C1=Math.cos(AZ),S1=-Math.sin(AZ);
let C2=Math.cos(AY),S2=-Math.sin(AY);
let C3=Math.cos(AX),S3=-Math.sin(AX);
let MX,MY,MZ,B1=0,RA;
// ----------------------------------------------------
function setup() 
{
  INIT();

  for (let I=0; I<=N; I++)
  {
    let AA=10*PI*I/N;
    let AB=AA*M;
    let CA=Math.cos(AA),SA=Math.sin(AA),CB=Math.cos(AB),SB=Math.sin(AB);
    MX=-R1*CA-R2*CA*CB;
    if (DESSIN==238 || DESSIN==239)
    {
      MY=R1*SA+R2*SA*CB;
      MZ=R2*SB;
    }
    else
    {
      MY=-R1*SA+R2*SA*CB;
      MZ=-R2*SB+2*I/N-1;
    }
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
