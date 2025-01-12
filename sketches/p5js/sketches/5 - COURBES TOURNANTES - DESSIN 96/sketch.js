// COURBES TOURNANTES
//
// added : translate(0,50) to center the pattern

// ----------------------------------------------------
let DESSIN = 96;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=4000,T1=1,T2=100,H1=1,H2=1,K1=1,K2=2,R1=NP/6,R2=NP/4;

// ----------------------------------------------------
function setup() 
{
  INIT2(720);
  for (let I=0; I<N; I++)
  {
    let S_= cos(6*PI*I/N)*.4+.6;
    let AN=2*PI*I/N;
    let C1=cos(H1*AN*T1),S1=sin(H2*AN*T1);
    let C2=S_*cos(K1*AN*T2),S2=S_*sin(K2*AN*T2);
    X=NP/2+R1*C1+R2*(C1*C2-S1*S2);
    Y=NP/2+R1*S1+R2*(S1*C2+C1*S2);Y=1.7*Y;
    if (I==0) LPRINT(`M${int(X)},${int(Y)}`);
    if (I>0) LPRINT(`D${int(X)},${int(Y)}`);
  }
  translate(0,50);
  TRACE2();
}