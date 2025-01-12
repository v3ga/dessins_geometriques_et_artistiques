// LA TROISIÈME DIMENSION - D3DATA
//
// TODO : check 205, does not seem to work...

// ----------------------------------------------------
let DESSIN = 201; // [201,202,203] + 205

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let DC=2,TC=2;
let OX=5,OY=-2,OZ=1.3;
let AZ=3*PI/4,AY=0,AX=0;
let QX=0,QY=0,QZ=0;
let C1=Math.cos(AZ),S1=-Math.sin(AZ);
let C2=Math.cos(AY),S2=-Math.sin(AY);
let C3=Math.cos(AX),S3=-Math.sin(AX);
let B1=0,MX,MY,MZ;
let DATA=[
0,0,0, 0,0,2, 1,0,3, 1,0,4, 2,0,4, 
2,0,3, 3,0,2, 3,0,0, 3,1,0, 3,1,2,
2,1,3, 2,1,4, 2,0,4, 1.5,.5,5.5, 1,0,4, 1000,
0,0,0, 3,0,0, 1000,
1,0,0, 1,0,1, 1.25,0,1.3, 1.75,0,1.3, 2,0,1, 2,0,0, 1000,
3,0,2, 3,1,2, 1000,
2,0,3, 2,1,3, 1000,
2,1,4, 1.5,.5,5.5, 2000,
1,1,4, 1,1,3, 0,1,2, 0,1,0, 3,1,0, 1000,
0,0,0, 0,1,0, 1000,
0,0,2, 0,1,2, 1000,
1,0,3, 1,1,3, 1000,
1,0,4, 1,1,4, 2,1,4, 2000];
// ----------------------------------------------------
if (DESSIN==202)
{
  OX=5,OY=-2,OZ=6;
  AZ=3*PI/4,AY=-PI/4,AX=4;
} 
else if (DESSIN==203)
{
  OX=5,OY=-3,OZ=0;
  AZ=3*PI/4,AY=PI/4,AX=4;
}
else if (DESSIN==205)
{
  OX=0,OY=0,OZ=0;
  AZ=-PI/4,AY=0,AX=0;
  QX=0,QY=1,QZ=0;
}
// ----------------------------------------------------
function setup() 
{
  INIT2(750);
  while(true)
  {
    MX = READ();
    if (MX==2000) break;
    if (MX==1000) { B1=0;MX = READ(); }
    MY = READ();
    MZ = READ();
    GOSUB_PERSPECTIVE();
  }
  if (DESSIN==202)
    translate(0,-NP*1.25)
  else if (DESSIN==203)
    translate(0,100)
  TRACE();
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

// ----------------------------------------------------
var DATA_i=0;
function READ()
{
  let v = DATA[DATA_i];
  DATA_i++;
  return v;
}

function DATA_RESET()
{
  DATA_i=0;
}
