// BIPARTI COMPLET

// ----------------------------------------------------
let DESSIN = 101; // [101,102,103,104]

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=10,XA=0,YA=0,XB=0,YB=NP,XC=NP,YC=0,XD=NP,YD=NP;
if (DESSIN==102)
  N=15,XA=NP/2,YA=NP/15,XB=NP/2,YB=1.2*NP,XC=0,YC=0,XD=NP,YD=0;
else if (DESSIN==103)
  N=19,XA=0,YA=0,XB=NP,YB=1.4*NP,XC=0,YC=YB,XD=NP,YD=0;
else if (DESSIN==104)
  N=16,XA=0,YA=0,XB=NP/2,YB=NP,XC=NP,YC=0,XD=NP/2,YD=NP;


// ----------------------------------------------------
function setup() 
{
  INIT2([102,103].includes(DESSIN)?672:NP);
  for (let I=0; I<=N; I++)
  {
    let X1=(I*XA+(N-I)*XB)/N;
    let Y1=(I*YA+(N-I)*YB)/N;
    let X=int(X1),Y=int(Y1);
    for (let J=0; J<=N; J++)
    {
      LPRINT(`M${X},${Y}`);
      let X2=(J*XC+(N-J)*XD)/N;
      let Y2=(J*YC+(N-J)*YD)/N;
      let XX=int(X2),YY=int(Y2);
      LPRINT(`D${XX},${YY}`);
    }
  }
  TRACE();
}