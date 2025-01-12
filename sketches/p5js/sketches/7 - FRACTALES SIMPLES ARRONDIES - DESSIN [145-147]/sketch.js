// FRACTALES SIMPLES ARRONDIES

// ----------------------------------------------------
let DESSIN = 147; //[145,146,147]

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let M=1,N=13,K=1,S=8;
if (DESSIN==146)
  K=2,S=4;
else if (DESSIN==147)
  K=3,S=3;
let X=Array(M),Y=Array(M),L=Array(N-1),A=Array(N-1);

// ----------------------------------------------------
function setup() 
{
  INIT();
  X[0]=0;X[1]=NP;
  Y[0]=NP;Y[1]=0;
  L[0]=.4;L[1]=.4;L[2]=.2;L[3]=.2;L[4]=.2;L[5]=.2;L[6]=.4;L[7]=.4;L[8]=.2;L[9]=.2;L[10]=.2;L[11]=.2;L[12]=.2;
  A[0]=0;A[1]=PI/2;A[2]=0;A[3]=-PI/2;A[4]=0;A[5]=-PI/2;A[6]=-PI;A[7]=-PI/2;A[8]=0;A[9]=PI/2;A[10]=0;A[11]=PI/2;A[12]=0;  
  
  for (let II=0; II<=M-1; II++)
  {
    let XD=X[II],YD=Y[II],XA=X[II+1],YA=Y[II+1];
    let X0=XD,X1=X0,X2=X0,Y0=YD,Y1=Y0,Y2=Y0;
    if (XA!=XD) 
      A0 = atan((YA-YD)/(XA-XD));
    else 
      A0 = PI/2*SGN(YA-YD);
    if ((XA-XD)<0) A0=A0+PI;
    L0=sqrt(pow(XA-XD,2)+pow(YA-YD,2));
    for (let I=0;I<=pow(N,K)-1;I++)
    {
      let LL=L0,AA=A0,T1=I;
      if (K==0){
        X0=X1;X1=X2;X2=X2+LL*cos(AA);
        Y0=Y1;Y1=Y2;Y2=Y2+LL*sin(AA);
        GOSUB_SOUS_PROGRAMME_ARRONDIR(I,X0,Y0,X1,Y1,X2,Y2);
      }
      else
      {
        for (let J=K-1;J>=0;J--)
        {
          let R=pow(N,J);let T2=int(T1/R);
          AA=AA+A[T2];LL=LL*L[T2];
          T1=T1-T2*R;
        }
        X0=X1;X1=X2;X2=X2+LL*cos(AA);
        Y0=Y1;Y1=Y2;Y2=Y2+LL*sin(AA);
        GOSUB_SOUS_PROGRAMME_ARRONDIR(I,X0,Y0,X1,Y1,X2,Y2);
      }
    }
  }
  TRACE2();
}

function GOSUB_SOUS_PROGRAMME_ARRONDIR(I,X0,Y0,X1,Y1,X2,Y2)
{
  let VX=X1-X0,VY=Y1-Y0,WX=X2-X1,WY=Y2-Y1;
  for (let K4=0;K4<=S;K4++)
  {
    let AN=PI/2*K4/S,CO=cos(AN),SI=sin(AN);
    let XQ=(X0+X2+CO*(-WX)+SI*VX)/2;
    let YQ=(Y0+Y2+CO*(-WY)+SI*VY)/2;
    if (I==0) LPRINT(`M${int(XQ)},${int(YQ)}`);
    else if (I>0) LPRINT(`D${int(XQ)},${int(YQ)}`);
  }
}
