// COURBES ORBITALES

// ----------------------------------------------------
let DESSIN = 86;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=1400,T1=1,T2=600,K1=1,K2=1,R1=NP*.25;

// ----------------------------------------------------
function setup() 
{
  INIT();
  for (let I=0; I<N; I++)
  {
    R2=.25*NP*(.5+.5*cos(14*PI*I/N));
    let A1=2*PI*I/N*T1,A2=2*PI*I/N*T2;
    X = int(NP*.5+R1*cos(K1*A1)+R2*cos(A2));
    Y = int(NP*.5+R1*sin(K2*A1)+R2*sin(A2));
    if (I==0) LPRINT(`M${X},${Y}`);
    if (I>0)  LPRINT(`D${X},${Y}`);
  }
  TRACE2();
}