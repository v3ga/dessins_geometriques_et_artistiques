// LA TROISIÈME DIMENSION - D3CUBE

// ----------------------------------------------------
let DESSIN=212;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let DC=2,TC=2;
let OX=0,OY=0,OZ=0;
let AZ=PI/5,AY=-PI/4,AX=0;
let QX=-5,QY=.2,QZ=.3;
let C1=Math.cos(AZ),S1=-Math.sin(AZ);
let C2=Math.cos(AY),S2=-Math.sin(AY);
let C3=Math.cos(AX),S3=-Math.sin(AX);
let DATA = [
    1,0,0, 0,0,0, 0,0,1, 1,0,1, 1,0,0, 1,1,0, 1,1,1, 0,1,1, 0,0,1, 1000,
    1,0,1, 1,1,1, 1000,
    0,0,0, 0,1,0, 0,1,1, 1000,
    1,1,0, 0,1,0, 2000
];
let MX,MY,MZ,B1=0;
// ----------------------------------------------------
function setup() 
{
  INIT2(NP);

  for (let I=0;I<=20;I++)
  {
    let AT=PI/2/40*I, CC=Math.cos(AT), SS=Math.sin(AT);
    while(true)
    {
      MX=READ();
      if (MX == 2000) break;    
      if (MX == 1000) {B1=0;MX=READ();}   
      MY=READ();
      MZ=READ();
      let GR=2*MX-1;
      MX=CC*GR-SS*(2*MZ-1);
      MY=2*MY-1;
      MZ=GR*SS+(2*MZ-1)*CC;
      GOSUB_PERSPECTIVE();
    }
    RESTORE();B1=0;
  }
  TRACE2();
}



// ----------------------------------------------------
var DATA_i=0;
function RESTORE()
{
  DATA_i=0;
}
// ----------------------------------------------------
function READ()
{
  let v = DATA[DATA_i];
  DATA_i++;
  return v;
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
