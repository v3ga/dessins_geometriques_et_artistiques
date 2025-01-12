// QUADRILLAGES ÉLASTIQUES

// ----------------------------------------------------
let DESSIN = 175;

// ----------------------------------------------------
let NP=480,PI=Math.PI;

// ----------------------------------------------------
function setup() 
{
  INIT();
  for (let L=0; L<=1; L++)
  {
    for (let I=0; I<=20; I++)
    {
      for (let J=0; J<=40; J++)
      {
        let X=I/10-1,Y=J/20-1,T,AN;
        if (L==1) T=X,X=Y,Y=T;
        let DI=sqrt(X*X+Y*Y);
        if (X!=0) 
          AN=atan(Y/X);
        else
          AN = PI/2*SGN(Y);
        if (X<0) AN=AN+PI;
        
        if (DI<1) AN=AN+PI*2*(1-DI);         
                
        X=DI*cos(AN),Y=DI*sin(AN);
        let X_=int( NP/2*(1+.95*X) ),Y_=int( NP/2*(1+.95*Y) );
        if (J==0) LPRINT(`M${X_},${Y_}`);
        if (J>0) LPRINT(`D${X_},${Y_}`);
      }
    }
  }
  TRACE2();
}