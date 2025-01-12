// ----------------------------------------------------
let DESSIN = 182; 

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let M=1,N=18,K=DESSIN==180?1:DESSIN==181?3:6;

// ----------------------------------------------------
function setup() 
{
  INIT();
  translate(0,30);
  scale(1,0.85)
  
  let X=Array(M).fill(0),Y=Array(M).fill(0),L=Array(N).fill(0),A=Array(N).fill(0),B=Array(N).fill(0),C=Array(N).fill(0),D=Array(N).fill(0),E=Array(N).fill(0);
  X[0]=NP/6;X[1]=NP*35/48;
  Y[0]=NP/2;Y[1]=NP/2;
  L[0]=SQR(5)/4;L[1]=3/8;L[2]=SQR(73)/8;L[3]=3/8;L[4]=SQR(41)/8;
  L[5]=SQR(40)/8;L[6]=L[0];L[7]=SQR(68)/8;L[8]=L[5];L[9]=L[8];L[10]=L[7];
  L[11]=L[0];L[12]=L[5];L[13]=1;L[14]=SQR(10)/8;L[15]=L[14];L[16]=L[14];
  L[17]=L[14];
  A[0]=ATN(2);A[1]=0;A[2]=ATN(8/3)+PI;A[4]=ATN(-4/5)+PI;A[5]=ATN(-3)+PI;
  A[6]=ATN(1/2);A[7]=ATN(-1/4);A[8]=ATN(3)+PI;A[9]=ATN(-3);A[10]=ATN(1/4)+PI;
  A[11]=ATN(-1/2)+PI;A[12]=ATN(3);A[13]=0;A[14]=ATN(1/3);A[15]=ATN(1/3)+PI;
  A[16]=ATN(-1/3);A[17]=ATN(-1/3)+PI;
  for (let I4=0;I4<=17;I4++) C[I4]=1;
  C[1]=0;C[3]=0;
  D[0]=1;D[1]=1;D[2]=1;D[3]=1;D[4]=1;D[15]=1;D[17]=1;
  let XD,YD,XA,YA,X0,Y0,X1,Y1,A0,L0,I,LL,AA,BB,CC,T1,T2,T3,R;
  for (let II=0;II<=M-1;II++)
  {
    XD=X[II],YD=Y[II],XA=X[II+1],YA=Y[II+1];
    X0=XD,Y0=YD;
    X1=int(X0),Y1=int(Y0);
    LPRINT(`M${X1},${Y1}`);
    if (XA!=XD) A0=ATN((YA-YD)/(XA-XD)); else A0=PI/2*SGN(YA-YD);
    if ((XA-XD)<0) A0=A0+PI;
    L0=SQR(pow(XA-XD,2)+pow(YA-YD,2));
    I=0;
    while(I<=(pow(N,K)-1)) // TOCHECK
    {
      LL=L0,AA=A0,BB=1,CC=0,EE=1,T1=I;
      for (J=K-1;J>=0;J--)
      {
        R=pow(N,J),T2=int(T1/R);
        if (EE==1) T3=T2; else T3=N-1-T2;
        AA=AA+BB*EE*A[T3],LL=LL*L[T3];
        BB=BB*(1-2*B[T3]),CC=C[T3],DD=D[T3],EE=EE*(1-2*E[T3]),T1=T1-T2*R;
        if (CC==1) break;
      }
      X0=X0+LL*cos(AA),X1=int(X0);
      Y0=Y0+LL*sin(AA),Y1=int(Y0);
      if (DD==1) LPRINT(`M${X1},${Y1}`);
      if (DD==0 || DD==undefined) LPRINT(`D${X1},${Y1}`); // TOCHECK
      if (CC==1) I=I+R; else I=I+1;
    }
  }
  TRACE2();
}


