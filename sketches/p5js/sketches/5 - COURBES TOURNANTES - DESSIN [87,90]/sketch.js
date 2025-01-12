// COURBES TOURNANTES
//
// added : let S_= DESSIN == 87 ? cos(4*PI*I/N)*.4+.6 : 1;


// ----------------------------------------------------
let DESSIN = 87; // [87,88,89,90]

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=2000,T1=1,T2=100,K1=1,K2=1,H1=1,H2=1,R1=NP/6,R2=NP/4;
if (DESSIN==88)
  N=3000,K2=2,R1=NP/3,R2=NP/7;
else if (DESSIN==89)
  N=3000,T1=.5,T2=30,K2=3,R1=NP/8,R2=NP*.27;
else if (DESSIN==90)
  N=2000,T1=.5,T2=50,H1=1,H2=2,K2=2,K2=3,R1=NP/7,R2=NP/4;


// ----------------------------------------------------
function setup() 
{
  INIT();
  for (let I=0; I<N; I++)
  {
    let S_= DESSIN == 87 ? cos(4*PI*I/N)*.4+.6 : 1;
    let AN=2*PI*I/N;
    let C1=cos(H1*AN*T1),S1=sin(H2*AN*T1);
    let C2=S_*cos(K1*AN*T2),S2=S_*sin(K2*AN*T2);
    X=NP/2+R1*C1+R2*(C1*C2-S1*S2);
    Y=NP/2+R1*S1+R2*(S1*C2+C1*S2);
    if (I==0) LPRINT(`M${int(X)},${int(Y)}`);
    if (I>0) LPRINT(`D${int(X)},${int(Y)}`);
  }
  TRACE2();
}