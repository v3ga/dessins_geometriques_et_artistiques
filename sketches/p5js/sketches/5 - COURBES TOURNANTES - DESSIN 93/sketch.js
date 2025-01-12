// COURBES TOURNANTES

// ----------------------------------------------------
let DESSIN = 93;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=3000,T1=1,T2=100,H1=1,H2=2,K1=1,K2=2,R1=NP/3,R2=NP/8;

// ----------------------------------------------------
function setup() 
{
  INIT2(720);
  for (let I=0; I<N; I++)
  {
    let S_= cos(8*PI*I/N)*.4+.6;
    let AN=2*PI*I/N;
    let C1=cos(H1*AN*T1),S1=sin(H2*AN*T1);
    let C2=S_*cos(K1*AN*T2),S2=S_*sin(K2*AN*T2);
    X=NP/2+R1*C1+R2*(C1*C2-S1*S2);
    Y=NP/2+R1*S1+R2*(S1*C2+C1*S2);Y=1.3*Y;
    if (I==0) LPRINT(`M${int(X)},${int(Y)}`);
    if (I>0) LPRINT(`D${int(X)},${int(Y)}`);
  }
  TRACE2();
}