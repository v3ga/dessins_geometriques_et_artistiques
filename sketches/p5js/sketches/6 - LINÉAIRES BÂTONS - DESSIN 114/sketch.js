// LINÉAIRES BÂTONS
//
// added : translate(0,40)

// ----------------------------------------------------
let DESSIN = 114;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=300,M=7,K=7;

// ----------------------------------------------------
function setup() 
{
  INIT2(700);
  for (let I=1;I<=M;I++)
  {
    let R1=NP/3*pow(.8,I-1);
    let R2=NP/12*pow(.8,I-1);
    for (let J=0;J<=N-1;J++ )
    {
      let AN=2*J*PI/N;
      let XD=NP/2+R1*cos(AN)+R2*cos(K*AN); 
      let YD=NP/2+R1*sin(AN)+R2*sin(K*AN);YD=1.3*YD;
      let XA=NP/2+R1*cos(AN)+R2*cos(K*AN+PI); 
      let YA=NP/2+R1*sin(AN)+R2*sin(K*AN+PI);YA=1.3*YD;
      LPRINT(`M${int(XD)},${int(YD)}`);
      LPRINT(`D${int(XA)},${int(YA)}`);
    }
  }
  translate(0,40);
  TRACE();
}