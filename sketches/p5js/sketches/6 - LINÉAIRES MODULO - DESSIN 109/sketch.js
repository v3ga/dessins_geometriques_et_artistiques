// LINÉAIRES MODULO

// ----------------------------------------------------
let DESSIN = 109;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=400,M=200,K1=2,K2=2,H=9;
let X=Array(N),Y=Array(N);

// ----------------------------------------------------
function setup() 
{
  INIT2(750);
  for (let I=0; I<N; I++)
  {
    X[I] = int(NP*.5*(1+sin(K1*I*PI/N)));
    Y[I] = int(NP*.5*(1+cos(K2*I*PI/N)));
  }
  for (let I=0; I<M; I++)
  {
    let I1=8*I%N;I2=(H*I)%N;
    LPRINT(`M${X[I1]},${Y[I1]}`)
    LPRINT(`D${X[I2]},${Y[I2]}`)
  }
  TRACE();
}