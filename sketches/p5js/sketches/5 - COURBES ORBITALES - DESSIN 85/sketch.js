// COURBES

// ----------------------------------------------------
let DESSIN = 85;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5000,T1=2,T2=250,K1=1,K2=2,R1=NP*.35;

// ----------------------------------------------------
function setup() 
{
  INIT2(720);
  for (let I=0; I<N; I++)
  {
    R2=.15*NP*(.5+.5*cos(2*PI*I/N));
    let A1=2*PI*I/N*T1,A2=2*PI*I/N*T2;
    X = int(NP*.5+R1*cos(K1*A1)+R2*cos(A2));
    Y = int(1.4*(NP*.5+R1*sin(K2*A1)+R2*sin(A2)));
    if (I==0) LPRINT(`M${X},${Y}`);
    if (I>0)  LPRINT(`D${X},${Y}`);
  }
  TRACE2();
}