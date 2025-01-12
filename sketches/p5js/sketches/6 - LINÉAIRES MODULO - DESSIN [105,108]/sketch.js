// LINÉAIRES MODULO

// ----------------------------------------------------
let DESSIN = 108; // [105,106,107,108]

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=400,M=N,K1=4,K2=5,H=2;
let X=Array(N),Y=Array(N);

if (DESSIN==106)
  N=500,K1=11/7,K2=7/3,H=3;
else if (DESSIN==107)
  N=400,K1=4,K2=2,H=2;
else if (DESSIN==108)
  N=300,K1=5,K2=3,H=2;

// ----------------------------------------------------
function setup() 
{
  INIT2(750);
  for (let I=0; I<N; I++)
  {
    X[I] = int(NP*.5*(1+sin(K1*I*PI/N)));
    Y[I] = int(NP*.75*(1+cos(K2*I*PI/N)));
  }
  for (let I=0; I<M; I++)
  {
    let I1=I%N;I2=(H*I)%N;
    LPRINT(`M${X[I1]},${Y[I1]}`)
    LPRINT(`D${X[I2]},${Y[I2]}`)
  }
  TRACE();
}