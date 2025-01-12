// COURBES SPIRALES

// ----------------------------------------------------
let DESSIN = 97;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=2000,T=40,R=0.8,L=.1;

// ----------------------------------------------------
function setup() 
{
  INIT();
  for (let I=0; I<N; I++)
  {
    let RR=pow(L,I/N);
    let AN=2*PI*I/N;
    let X=RR*cos(T*AN),Y=RR*R*sin(T*AN);
    let CO=cos(AN),SI=sin(AN);
    let XX=X*CO-Y*SI;YY=X*SI+Y*CO;
    let X_=int(NP/2*(1+XX));
    let Y_=int(NP/2*(1+YY));
    if (I==0) LPRINT(`M${X_},${Y_}`);
    if (I>0) LPRINT(`D${X_},${Y_}`);
  }
  TRACE2();
}