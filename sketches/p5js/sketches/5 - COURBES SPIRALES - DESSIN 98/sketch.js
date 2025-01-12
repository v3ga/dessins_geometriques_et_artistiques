// COURBES SPIRALES
// 
// added -75 for let Y_=int(1.3*NP/2*(1+YY))-75

// ----------------------------------------------------
let DESSIN = 98;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=3000,T=60,R=.1,L=.1;

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
    let Y_=int(1.3*NP/2*(1+YY))-75;
    if (I==0) LPRINT(`M${X_},${Y_}`);
    if (I>0) LPRINT(`D${X_},${Y_}`);
  }
  TRACE2();
}