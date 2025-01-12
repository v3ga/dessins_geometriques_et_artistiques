// COURBES SPIRALES
//
// added -45 for let Y_=int(1.7*NP/2*(1+YY))-45

// ----------------------------------------------------
let DESSIN = 99;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=2000,T=40,R=.8,L=.1;

// ----------------------------------------------------
function setup() 
{
  INIT2(720);
  for (let I=0; I<N; I++)
  {
    let RR=pow(L,I/N);
    let AN=2*PI*I/N;
    let X=RR*cos(T*AN),Y=RR*R*sin(T*AN);
    let CO=cos(AN),SI=sin(AN);
    let XX=X*CO-Y*SI;YY=X*SI+Y*CO;
    let X_=int(NP/2*(1+XX));
    let Y_=int(1.7*NP/2*(1+YY))-45;
    if (I==0) LPRINT(`M${X_},${Y_}`);
    if (I>0) LPRINT(`D${X_},${Y_}`);
  }
  TRACE2();
}