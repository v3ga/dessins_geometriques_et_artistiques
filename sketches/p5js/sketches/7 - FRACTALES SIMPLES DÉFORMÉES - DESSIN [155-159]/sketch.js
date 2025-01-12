// FRACTALES SIMPLES DÉFORMÉES

// ----------------------------------------------------
let DESSIN = 155; //[155,156,157,158,159]

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let M=3,N=4,K=5;
let X=Array(M),Y=Array(M),L=Array(N-1),A=Array(N-1);
// ----------------------------------------------------
function setup() 
{
  INIT();
  
  for (let IJ=0;IJ<=3;IJ++)
  {
    X[IJ]=NP/2*(1+sin(2*IJ*PI/3));
    Y[IJ]=NP/2*(1+cos(2*IJ*PI/3));
  }
  L[0]=1/3;L[1]=L[0];L[2]=L[0];L[3]=L[0];
  A[0]=0;A[1]=PI/3;A[2]=-A[1];A[3]=0;
  
  for (let II=0; II<=M-1; II++)
  {
    let XD=X[II],YD=Y[II],XA=X[II+1],YA=Y[II+1];
    let X0=XD,Y0=YD;
    [X1,Y1] = GOSUB_SOUS_PROGRAMME_DEFORMATION(X0,Y0);
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
        X0=X0+LL*cos(AA);
        Y0=Y0+LL*sin(AA);
      }
      else
      {
        for (let J=K-1;J>=0;J--)
        {
          let R=pow(N,J);let T2=int(T1/R);
          AA=AA+A[T2];LL=LL*L[T2];
          T1=T1-T2*R;
        }
        X0=X0+LL*cos(AA);
        Y0=Y0+LL*sin(AA);
        [X1,Y1]=GOSUB_SOUS_PROGRAMME_DEFORMATION(X0,Y0);
        LPRINT(`D${X1},${Y1}`);
      }
    }
  }
  TRACE2();
}

function GOSUB_SOUS_PROGRAMME_DEFORMATION(X0,Y0)
{
  let XH=X0/NP*2-1,YH=Y0/NP*2-1;
  let DH=sqrt(XH*XH+YH*YH);
  if (XH!=0)
      AH=atan(YH/XH)-PI*(SGN(XH)-1)/2*SGN(YH);
  else
      AH=PI/2*SGN(YH);
  if (DESSIN==155)
    DH=pow(DH,6),AH=AH*AH*AH/PI/PI;
  else if (DESSIN==156)
    DH=pow(DH,6),AH=4*AH*AH*AH/PI/PI;
  else if (DESSIN==157)
    DH=pow(DH,5),AH=10*AH;
  else if (DESSIN==158)
    DH=pow(DH,5),AH=AH+PI/18*sin(6*PI*DH);
  else if (DESSIN==159)
    DH=pow(DH,5),AH=20*AH;
  let X1=int((DH*cos(AH)+1)*NP/2);
  let Y1=int((DH*sin(AH)+1)*NP/2);
  return [X1,Y1];
}
