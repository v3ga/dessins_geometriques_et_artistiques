// POLYGONES RÉGULIERS
//
// DESSIN 27 | added : Y=(NP-RR)/0.4
//
// TODOS : DESSINS [28,29,30,31,32] not centered, why ?

// ----------------------------------------------------
let DESSIN = 26; // [26,27,28,29,30,31,32]

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let K=200,AN=15*PI/31,RA=.98;
let AA=0,RR=0.80*NP;
let X = (NP-RR)/2,Y=(NP-RR)/2; // ERREUR BOUQUIN ? MODIFICATION DE Y 

if (DESSIN==27)
{
    K=120,AN=29*PI/30,Y=(NP-RR)/0.4;
}
else if (DESSIN==28)
{
    K=200,AN=PI/4, RR=0.40*NP;
}
else if (DESSIN==29)
{
    K=2000,AN=PI/20;RA=0.998
    RR=0.065*NP;
}
else if (DESSIN==30)
{
    K=200,AN=4*PI/5+.02,RA=.99;
}
else if (DESSIN==31)
{
    K=100,AN=6*PI/7,RA=.98;
}
else if (DESSIN==32)
{
    K=300,AN=2*PI/5+.01,RA=.993;
    RR=0.60*NP;  
}  

// ----------------------------------------------------
function setup() 
{
  INIT();
  
  for (let I = 0; I < K; I++) 
  {
    X = X+RR*cos(AA);
    Y = Y+RR*sin(AA);
    LPRINT(`D${int(X)},${int(Y)}`);
    AA=AA+AN, RR=RR*RA;
  }
  
  TRACE2();
}

