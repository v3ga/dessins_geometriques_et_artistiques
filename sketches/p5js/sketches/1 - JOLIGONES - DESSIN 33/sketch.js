// JOLIGONES - DESSIN 33

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let K=400,AN=19*PI/60,RA=.996;
let AA=0,RR=0.40*NP;
let X = (NP-RR)/2,Y=(NP-RR)/2; // ERREUR BOUQUIN ? MODIFICATION DE Y 

// ----------------------------------------------------
function setup() 
{
  INIT2(900);
  
  LPRINT(`M${X},${Y}`);
  for (let I = 0; I < K; I++) 
  {
    X = X+RR*cos(AA);
    Y = Y+RR*sin(AA);
    LPRINT(`D${int(X)},${int(1.7*Y)}`);
    AA=AA+AN, RR=RR*RA;
  }
  
  TRACE2();
}