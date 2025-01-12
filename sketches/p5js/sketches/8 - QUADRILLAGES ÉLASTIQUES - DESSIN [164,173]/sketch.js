// QUADRILLAGES ÉLASTIQUES

// ----------------------------------------------------
let DESSIN = 164; //[164,165,166,167,168,169,170,171,172,173]

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
      for (let J=0; J<=20; J++)
      {
        let X=I/10-1,Y=J/10-1,T,AN;
        if (L==1) T=X,X=Y,Y=T;
        let DI=sqrt(X*X+Y*Y);
        if (X!=0) 
          AN=atan(Y/X);
        else
          AN = PI/2*SGN(Y);
        if (X<0) AN=AN+PI;
        
        if (DESSIN==164)
        {
          if (DI<1) DI=pow(DI,0.3);
        }
        else if (DESSIN==165)
        {
          if (DI<1) DI=pow(DI,3);
        }
        else if (DESSIN==166)
        {
          if (DI<1) AN=AN+PI/2*(1-DI);
        }        
        else if (DESSIN==167)
        {
          if (DI<1) AN=AN+3.5*(1-DI),DI=pow(DI,.3);
        }        
        else if (DESSIN==168)
        {
          if (DI<1) AN=AN+2*PI*(1-DI);
        }        
        else if (DESSIN==169)
        {
          if (DI<1) AN=AN+PI*(1-DI),DI=pow(DI,3);
        }        
        else if (DESSIN==170)
        {
          if (DI<1) AN=AN+PI/2*sin(PI*(1-DI)),DI=pow(DI,.2);
        }        
        else if (DESSIN==171)
        {
          if (DI<1) AN=AN+PI/4*sin(2*PI*(1-DI));
        } 
        else if (DESSIN==172)
        {
          if (DI<1) AN=AN+PI/4*sin(2*PI*(1-DI)),DI=pow(DI,2);
        } 
        else if (DESSIN==173)
        {
          if (DI<1) AN=AN+PI/4*sin(2*PI*(1-DI));
        }          
                
        X=DI*cos(AN),Y=DI*sin(AN);
        let X_=int( NP/2*(1+.95*X) ),Y_=int( NP/2*(1+.95*Y) );
        if (J==0) LPRINT(`M${X_},${Y_}`);
        if (J>0) LPRINT(`D${X_},${Y_}`);
      }
    }
  }
  TRACE2();
}