// FRACTALES SIMPLES
//
// added : translate(0,-40);


// ----------------------------------------------------
let DESSIN = 115; // [115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135]

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let M=3,N=4,K=1;
if (DESSIN==116)
    K=2;
else if (DESSIN==117)
    K=3;
else if (DESSIN==118)
    K=4;
else if (DESSIN==119)
    K=5;
else if (DESSIN==120)
    K=2;
else if (DESSIN==121)
    K=3;
else if (DESSIN==122)
    K=4;
else if (DESSIN==123)
    K=5;
else if (DESSIN==124)
    M=1,N=3,K=1;
else if (DESSIN==125)
    M=1,N=3,K=2;
else if (DESSIN==126)
    M=1,N=3,K=3;
else if (DESSIN==127)
    M=1,N=3,K=4;
else if (DESSIN==128)
    M=1,N=3,K=5;
else if (DESSIN==129)
    M=1,N=3,K=6;
else if (DESSIN==130)
    M=1,N=3,K=7;
else if (DESSIN==131)
    M=1,N=3,K=8;
else if (DESSIN==132)
    M=4,N=4,K=5;
else if (DESSIN==133)
    M=4,N=4,K=6;
else if (DESSIN==134)
    M=1,N=4,K=6;
else if (DESSIN==135)
    M=2,N=2,K=12;
let X=Array(M),Y=Array(M),L=Array(N-1),A=Array(N-1);

// ----------------------------------------------------
function setup() 
{
  if (DESSIN<=133 || DESSIN==135)
    INIT2(556);
  else 
    INIT2(1200);
  
  X[0]=0;X[1]=NP;X[2]=NP*.5;X[3]=0;
  Y[0]=sqrt(3)/2*NP;Y[1]=Y[0];Y[2]=0;Y[3]=Y[0];
  L[0]=1/3;L[1]=L[0];L[2]=L[0];L[3]=L[0];
  A[0]=0;A[1]=PI/3;A[2]=-A[1];A[3]=0;  

  if (DESSIN>=120 && DESSIN<=123)
    X[0]=NP,X[1]=0,X[2]=NP*.5,X[3]=NP;
  else if (DESSIN>=124 && DESSIN<=131)
  {
    X[0]=NP*.5,X[1]=X[0];
    Y[0]=NP,Y[1]=0;
    L[0]=sqrt(2)/3,L[1]=sqrt(5)/3,L[2]=L[0];
    A[0]=PI/4,A[1]=atan(-2),A[2]=A[0];
    translate(0,-40);
  }
  else if (DESSIN==132)
  {
    X[0]=0,X[1]=NP,X[2]=NP,X[3]=0,X[4]=0;
    Y[0]=0,Y[1]=0,Y[2]=NP,Y[3]=NP,Y[4]=0;
    L[0]=1/(2+2*cos(.45*PI)),L[1]=L[0],L[2]=L[0],L[3]=L[0];
    A[0]=0;A[1]=.45*PI,A[2]=-A[1],A[3]=0;
    translate(0,-40);
  }
  else if (DESSIN==133)
  {
    X[0]=0,X[1]=NP,X[2]=NP,X[3]=0,X[4]=0;
    Y[0]=0,Y[1]=0,Y[2]=NP,Y[3]=NP,Y[4]=0;
    L[0]=1/(2+2*cos(.48*PI)),L[1]=L[0],L[2]=L[0],L[3]=L[0];
    A[0]=0;A[1]=.48*PI,A[2]=-A[1],A[3]=0;
    translate(0,-40);
  }
  else if (DESSIN==134)
  {
    X[0]=0,X[1]=0;
    Y[0]=NP,Y[1]=-NP;
    L[0]=1/3,L[1]=L[0],L[2]=sqrt(10)/9,L[3]=5/9;
    A[0]=0;A[1]=PI/2,A[2]=-atan(3),A[3]=0;
    translate(0,-600);
  }
  else if (DESSIN==135)
  {
    X[0]=NP/2,X[1]=X[0],X[2]=X[0];
    Y[0]=NP*.25,Y[1]=NP*.75,Y[2]=NP*.25;
    L[0]=1/sqrt(2),L[1]=L[0];
    A[0]=PI/4;A[1]=-PI/4;
    translate(0,-40);
  }  

  
  for (let II=0; II<=M-1; II++)
  {
    let XD=X[II],YD=Y[II],XA=X[II+1],YA=Y[II+1];
    let X0=XD,Y0=YD;
    let X1=int(X0),Y1=int(Y0);
    LPRINT(`M${X1},${Y1}`);
    if (XA!=XD) 
      A0 = atan((YA-YD)/(XA-XD));
    else 
      A0 = PI/2*SGN(YA-YD);
    if ((XA-XD)<0) 
     A0=A0+PI;
    L0=sqrt(pow(XA-XD,2)+pow(YA-YD,2));
    for (let I=0;I<=pow(N,K)-1;I++)
    {
      let LL=L0,AA=A0,T1=I;
      if (K==0){
        X0=X0+LL*cos(AA);X1=int(X0);
        Y0=Y0+LL*sin(AA);Y1=int(Y0);
       LPRINT(`D${X1},${Y1}`);
      }
      else
      {
        for (let J=K-1;J>=0;J--)
        {
          let R=pow(N,J);let T2=int(T1/R);
          AA=AA+A[T2];LL=LL*L[T2];
          T1=T1-T2*R;
        }
        X0=X0+LL*cos(AA);X1=int(X0);
        Y0=Y0+LL*sin(AA);Y1=int(Y0);
        LPRINT(`D${X1},${Y1}`);
      }
    }
  }
  TRACE2();
}
