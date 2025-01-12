// LA TROISIÈME DIMENSION - D3STRUCTURES

// ----------------------------------------------------
let DESSIN=221;
 
// ----------------------------------------------------
let NP=480,PI=Math.PI;
let DC=2,TC=2;
let OX=0,OY=0,OZ=0;
let AZ=PI/4,AY=-PI/8,AX=0;
let QX=-2.5,QY=0,QZ=0;
let N=2000,M=30,K=0;
if (DESSIN==222)
{
  N=200,M=4,K=0;
}
else if (DESSIN==223)
{
  N=400,M=7,K=0;
}
else if (DESSIN==224)
{
  AZ=0,AY=-PI/5,AX=0;
  N=400,M=100,K=0;
}
else if (DESSIN==225)
{
  AZ=0,AY=-2*PI/5,AX=0;
  N=400,M=100,K=8;
}
else if (DESSIN==226)
{
  AZ=0,AY=-PI/5,AX=0;
  N=120,M=30,K=8;
}
else if (DESSIN==227)
{
  AZ=0,AY=-2*PI/5,AX=0;
  N=120,M=30,K=8;
}
else if (DESSIN==228)
{
  N=300,M=100,K=0;
}
else if (DESSIN==229)
{
  AZ=0,AY=-2*PI/5,AX=0;
  N=300,M=100,K=0;
}
else if (DESSIN==230)
{
  N=300,M=60,K=0;
}
else if (DESSIN==231)
{
  AZ=0,AY=-2*PI/5,AX=0;
  N=300,M=60,K=0;
}
else if (DESSIN==232)
{
  AZ=0,AY=-PI/5,AX=0;
  N=600,M=100,K=0;
}
else if (DESSIN==233)
{
  AZ=0,AY=-2*PI/5,AX=0;
  N=600,M=100,K=0;
}
else if (DESSIN==234)
{
  AZ=0,AY=-PI/5,AX=0;
  N=1000,M=20,K=3;
}
else if (DESSIN==235)
{
  AZ=0,AY=-2*PI/5,AX=0;
  N=1000,M=20,K=3;
}


let C1=Math.cos(AZ),S1=-Math.sin(AZ);
let C2=Math.cos(AY),S2=-Math.sin(AY);
let C3=Math.cos(AX),S3=-Math.sin(AX);
let MX,MY,MZ,B1=0,RA;
// ----------------------------------------------------
function setup() 
{
  INIT();

  for (let J=0;J<=K;J++)
  {
    if (DESSIN==226 || DESSIN==227)
      RA=pow(.8,J),B1=0;
    else
      RA=pow(.6,J),B1=0;
    for (let I=0;I<=N;I++)
    {
      let AA=2*PI*I/N;
      let AB=AA*M;
      let CA=Math.cos(AA),SA=Math.sin(AA),CB=Math.cos(AB),SB=Math.sin(AB);
      MX=RA*CA*CB;
      MY=RA*SA*CB;
      MZ=RA*SB;
      GOSUB_PERSPECTIVE();
    }
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
