// SURFACES
//
// Added E3=1
// Added Z=0
// 
// E1=1 : lines, E1=2 : grid
// E2=0 : hidden lines, E2=1 : no hidden lines

// TODO : bugs in the rendering when E1=2 (no grid)
// DESSIN 198 infinite loop to check

// ----------------------------------------------------
let DESSIN=188; // [178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200]
let _DEBUG_ = false;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=6,PA=NP/16,E1=2,E2=1,E3=0;
let XA=NP/2,YA=NP/16,XB=NP*7/8,YB=NP/4,XC=NP/2,YC=NP*5/8,XD=NP/8,YD=NP*7/16,Z=0;

if (DESSIN==178)
  N=60,PA=NP/160,E1=1,E2=0;
else if (DESSIN==179)
  N=60,PA=NP/160,E1=1,E2=1;
else if (DESSIN==180)
  N=60,PA=NP/160,E1=2,E2=0;
else if (DESSIN==181)
  N=60,PA=NP/160,E1=2,E2=1;
else if (DESSIN==182)
{
  N=60,PA=NP/240,E1=1,E2=0;
  XA=0,YA=0,XB=3/4*NP,YB=0,XC=NP,YC=5/4*NP,XD=NP/4,YD=5/4*NP;  
}  
else if (DESSIN==183)
{
  N=60,PA=NP/240,E1=2,E2=0;
  XA=NP/2,YA=0,XB=NP,YB=5/12*NP,XC=NP/2,YC=5/6*NP,XD=0,YD=5/12*NP;  
}
else if (DESSIN==184)
{
  N=30,PA=NP/240,E1=2,E2=0;
  XA=NP/2,YA=0,XB=NP,YB=5/12*NP,XC=NP/2,YC=5/6*NP,XD=0,YD=5/12*NP;  
}
else if (DESSIN==185)
{
  N=40,PA=NP/240,E1=2,E2=0;
  XA=NP/2,YA=0,XB=NP,YB=NP/2,XC=NP/2,YC=NP,XD=0,YD=NP/2;  
}
else if (DESSIN==186)
{
  N=30,PA=NP/160,E1=2,E2=0;
  XA=NP/2,YA=0,XB=NP,YB=NP/3,XC=NP/2,YC=2*NP/3,XD=0,YD=NP/3;  
}
else if (DESSIN==187)
{
  N=50,PA=NP/240,E1=2,E2=0;
  XA=NP/2,YA=0,XB=NP,YB=NP/3,XC=NP/2,YC=2*NP/3,XD=0,YD=NP/3;  
}
else if (DESSIN==188)
{
  N=40,PA=NP/240,E1=2,E2=0;
  XA=NP/2,YA=0,XB=NP,YB=NP/2,XC=NP/2,YC=NP,XD=0,YD=NP/2;  
}
else if (DESSIN==189)
{
  N=80,PA=NP/480,E1=1,E2=0;
  XA=NP/2,YA=0,XB=NP,YB=NP/3,XC=NP/2,YC=2*NP/3,XD=0,YD=NP/3;  
}
else if (DESSIN==190)
{
  N=80,PA=NP/240,E1=1,E2=0;
  XA=NP/2,YA=0,XB=NP,YB=NP/3,XC=NP/2,YC=2*NP/3,XD=0,YD=NP/3;  
}
else if (DESSIN==191)
{
  N=40,PA=NP/240,E1=2,E2=0;
  XA=NP/2,YA=0,XB=NP,YB=NP/3,XC=NP/2,YC=2*NP/3,XD=0,YD=NP/3;  
}
else if (DESSIN==192)
{
  N=40,PA=NP/240,E1=2,E2=0;
  XA=NP/3,YA=0,XB=NP,YB=NP/4,XC=2*NP/3,YC=3*NP/4,XD=0,YD=NP/2;  
}
else if (DESSIN==193)
{
  N=40,PA=NP/240,E1=2,E2=0;
  XA=NP*5/12,YA=0,XB=NP,YB=NP*5/12,XC=NP*7/12,YC=NP*5/6,XD=0,YD=NP*5/12;  
}
else if (DESSIN==194)
{
  N=60,PA=NP/240,E1=2,E2=0;
  XA=NP*3/8,YA=0,XB=NP,YB=XA,XC=NP*5/8,YC=NP*3/4,XD=0,YD=XA;  
}
else if (DESSIN==195)
{
  N=40,PA=NP/240,E1=2,E2=0;
  XA=NP*5/12,YA=0,XB=NP,YB=NP,XC=NP*7/12,YC=NP/2,XD=0,YD=NP/4;  
}
else if (DESSIN==196)
{
  N=80,PA=NP/240,E1=2,E2=0;
  XA=NP/4,YA=0,XB=NP,YB=0,XC=NP*3/4,YC=NP*3/4,XD=0,YD=NP*3/4;  
}
else if (DESSIN==197)
{
  N=80,PA=NP/480,E1=1,E2=0;
  XA=NP/3,YA=0,XB=NP,YB=NP/4,XC=2/3*NP,YC=NP*3/4,XD=0,YD=NP/2;  
}
else if (DESSIN==198)
{
  N=64,PA=NP/480,E1=2,E2=0;
  XA=NP/3,YA=0,XB=NP,YB=NP*4/15,XC=2/3*NP,YC=NP*4/5,XD=0,YD=NP*8/15;  
}
else if (DESSIN==199)
{
  N=64,PA=NP/480,E1=1,E2=0;
  XA=NP/3,YA=0,XB=NP,YB=NP*4/15,XC=2/3*NP,YC=NP*4/5,XD=0,YD=NP*8/15;  
}
else if (DESSIN==200)
{
  N=64,PA=NP/480,E1=2,E2=0;
  XA=NP*2/3,YA=0,XB=NP,YB=NP*8/15,XC=NP/3,YC=YB,XD=0,YD=0;  
}

let M=NP/PA,MA=Array(M),MI=Array(M);
let skip = false;

// ----------------------------------------------------
function setup() 
{
  if (DESSIN==182 || DESSIN==188)
    INIT2(650);
  else if (DESSIN==185 || DESSIN==192 || DESSIN==193)
    INIT2(750);
  else if (DESSIN==195 || DESSIN==196 || DESSIN==200)
    INIT2(1000);
  else 
    INIT({svg:true});
  
  while(true)
  {
    for (I=0;I<=M;I++) { MA[I]=-5*NP; MI[I]=5*NP }
    for (I=0;I<=N;I++)
    {
      XP = (I*XD+(N-I)*XA)/N;
      YP = (I*YD+(N-I)*YA)/N;
      XQ = (I*XC+(N-I)*XB)/N;
      YQ = (I*YC+(N-I)*YB)/N;
      
      
      if (E3==1) {Y=I/N} else {X=I/N}
      let I1 = int(XP/PA), I2=int(XQ/PA), G=SGN(I2-I1);
      for (let J=I1;COMP(J,I2,G);J=J+G)
      {      
        skip=false;
        if (E3==1){X=(J-I1)/(I2-I1)} else {Y=(J-I1)/(I2-I1)}
        GOSUB_COMPUTE_Z();
        XF = int(J*PA);
        YF = int((J-I1)*YQ+(I2-J)*YP)/(I2-I1)+Z; YF=int(YF);
        if (J==I1) { LPRINT(`M${XF},${YF}`) }
        if (E2==1) { LPRINT(`D${XF},${YF}`) ; skip=true;}
        
        if (skip==false)
        {
          if (YF>MI[J] && YF<MA[J])
          { 
            LPRINT(`M${XF},${YF}`) 
          }
          else 
          {
            if (YF>MA[J]) MA[J] = YF;
            if (YF<MI[J]) MI[J] = YF;
            LPRINT(`D${XF},${YF}`);
          }
        }
      }
    }
    if (E1==1) break;
    
    E3=1,E1=1;  
    UU=XD,XD=XB,XB=UU;
    UU=YD,YD=YB,YB=UU;
  }
  TRANSLATE();
  TRACE2();
  DEBUG();
}

// ----------------------------------------------------
function GOSUB_COMPUTE_Z()
{
  if (DESSIN==182)  
    Z = NP/5*sin(3*PI*Y)*sin(4*PI*X);
  else if (DESSIN==183)  
    Z = NP/4*sin(2*PI*Y)*sin(3*PI*X);
  else if (DESSIN==184)  
    DI = 7*sqrt( (X-.5)*(X-.5) + (Y-.5)*(Y-.5) ), Z = cos(DI)*NP/5;
  else if (DESSIN==185)
  {
    let X7=2*X-1,Y7=2*Y-1;
    if (X7*Y7!=0) 
      Z=3*NP/4*X7*Y7*(X7*Y7-Y7*Y7)/(X7*X7+Y7*Y7)
    else 
      Z=0;
  }
  else if (DESSIN==186)
  {
    let X7=(3*X-int(3*X))*2-1,Y7=(2*Y-int(2*Y))*2-1;
    let DI=X7*X7+Y7*Y7;
    Z=NP/4*(1-pow(DI,.2));
  }
  else if (DESSIN==187)
  {
    let X7=(5*X-int(5*X))*2-1,Y7=(5*Y-int(5*Y))*2-1;
    let DI=X7*X7+Y7*Y7;
    Z=NP/4*(1-DI)*(.6-abs(Y-.5));
  }
  else if (DESSIN==188)
  {
    let X7=2*X-1,Y7=2*Y-1;
    if (X7*Y7!=0) 
      Z=3*NP/4*X7*Y7*(X7*X7-Y7*Y7)/(X7*X7+Y7*Y7)
    else 
      Z=0;
  }
  else if (DESSIN==189)
  {
    let X7=3*Y-1.5,Y7=3*X-1.5;
    if (X7*Y7!=0) 
      Z=NP/4*Y7*X7*X7/(Y7*Y7+X7*X7*X7*X7);
    else 
      Z=0;
  }
  else if (DESSIN==190)
  {
    let DI=16*( (X-.5)*(X-.5) + (Y-.5)*(Y-.5) )
    Z=NP*5/12*cos(4*DI)*exp(-DI);
  }
  else if (DESSIN==191)
  {
    let X7=2*abs(X-.5),Y7=2*abs(Y-.5),M7=X7;
    if (X7<Y7) M7=Y7;
    let M8=int(5*M7),M9=5*M7-M8;
    Z=0;
    if (M9>.8) Z=(M9-.8)*5;
    Z=-NP*5/48*(Z+M8);
  }
  else if (DESSIN==192)
  {
    let X7=2*abs(X-.5),Y7=2*abs(Y-.5),M7=X7+Y7;
    let M8=int(4*M7),M9=4*M7-M8;
    Z=0;
    if (M9>.8) Z=(M9-.8)*5;
    Z=-NP*5/48*(Z+M8);
  }
  else if (DESSIN==193)
  {
    let AA=1.5-6*abs(X-.5),BB=1.5-6*abs(Y-.5);
    if (BB<AA) AA=BB;
    let CC=.5-2*abs(X-.5),DD=.25-abs(Y-.5);
    if (CC>AA) AA=CC;
    if (DD>AA) AA=DD;
    Z=NP*5/8*AA;
  }
  else if (DESSIN==194)
  {
    let X7=2*X-int(2*X),Y7=3*Y-int(3*Y);
    let AA=1.5-6*abs(X7-.5),BB=1.5-6*abs(Y7-.5)
    if (BB<AA) AA=BB;
    let CC=.5-2*abs(X7-.5),DD=.25-abs(Y7-.5);
    if (CC>AA) AA=CC;
    if (DD>AA) AA=DD;
    Z=NP*13/48*AA;
  }
  else if (DESSIN==195)
  {
    let R2=sqrt(2);
    let AA=.5-abs(X-.5),BB=.5-abs(Y-.5),CC=.5-abs(X+Y-1),DD=.5-abs(X-Y)/R2;
    if (BB<AA) AA=BB;
    if (CC<AA) AA=CC;
    if (DD<AA) AA=DD;
    Z=NP*5/2*AA;
  }
  else if (DESSIN==196)
  {
    let X7=(7*X-int(7*X))*2-1,Y7=(7*Y-int(7*Y))*2-1;
    let DI=X7*X7+Y7*Y7;
    Z=NP*(1/16*(1-DI)+5/4*(1-abs(X-.5))*(1-abs(Y-.5)));
  }
  else if (DESSIN==197)
  {
    let XH=X+.4755+Y,YH=Y+.23771-X;
    let X6=2*abs(3*XH-int(3*XH)-.5),Y6=2*abs(4*YH-int(4*YH)-.5),Z6=X6*Y6;
    let X7=2*abs(5*XH-int(5*XH)-.5),Y7=2*abs(5*YH-int(5*YH)-.5),Z7=X7*Y7;
    let X8=2*abs(10*XH-int(10*XH)-.5),Y8=2*abs(13*YH-int(13*YH)-.5),Z8=X8*Y8;
    Z=(5*Z6+3*Z7+2*Z8)*NP/48,Z=Z*(.6-abs(X-.5)*(.6-abs(Y-.5)));
  }  
  else if (DESSIN==198)
  {
    let X7=X,Y7=Y,K7=0,U7=0,V7=0;
    do
    {
      K7=K7+1;
      if (K7>4) {Z=0;return}
      U7=int(2*X7);X7=2*X7-U7;
      V7=int(2*Y7);Y7=2*Y7-V7;
    } while (U7!=V7)
    let X9=2*X7-1,Y9=2*Y7-1;
    Z=(1-abs(X9))*(1-abs(Y9));Z=NP*5/24*Z*Z*Z;
  }
  else if (DESSIN==199)
  {
    let X7=X,Y7=Y,K7=0,U7=0,V7=0;
    do
    {
      K7=K7+1;
      if (K7>6) {Z=0;return}
      U7=int(2*X7);X7=2*X7-U7;
      V7=int(2*Y7);Y7=2*Y7-V7;
    } while (U7!=V7)
    let X9=2*X7-1,Y9=2*Y7-1;
    Z=1-X9*X9-Y9*Y9;
    if (Z>0) 
      Z=NP*5/16/pow(K7,2)*sqrt(Z);
      else 
    Z=0;
  }
  else if (DESSIN==200)
  {
    let X7=X,Y7=Y,K7=0,U7=0,V7=0;
    do
    {
      K7=K7+1;
      if (K7>5) {Z=0;return}
      U7=int(2*X7);X7=2*X7-U7;
      V7=int(2*Y7);Y7=2*Y7-V7;
    } while (U7==0 || V7==0)
    let Z1=.5-abs(X7-.5);Z=.5-abs(Y7-.5);
    if (Z1<Z) Z=Z1;
    Z = NP*2.5/pow(K7,2)*Z;
  }    
  else
    Z = NP/3*sin(PI*Y)*sin(PI*X);
}

// ----------------------------------------------------
function COMP(J,I2,G)
{
  return G==1 ? (J<=I2) : (J>=I2);
}


// ----------------------------------------------------
function DESSIN_POINT(name,x,y,opts={})
{
  let y_=height-y;
  circle(x,y_,5);
  text(name,x+5,y_);
}
// ----------------------------------------------------
function DESSIN_QUAD()
{
  push();
  stroke(200,0,0);
  beginShape();
  vertex(XA,height-YA);
  vertex(XB,height-YB);
  vertex(XC,height-YC);
  vertex(XD,height-YD);
  endShape(CLOSE);
  noStroke();
  fill(200,0,0);
  DESSIN_POINT("XA",XA,YA);
  DESSIN_POINT("XB",XB,YB);
  DESSIN_POINT("XC",XC,YC);
  DESSIN_POINT("XD",XD,YD);
  pop();
}

// ----------------------------------------------------
function TRANSLATE()
{
  if (DESSIN==184 || DESSIN==185)
    translate(0,-40);
  else if (DESSIN==186 || DESSIN==187)
    translate(0,-40);
  else if (DESSIN==189)
    translate(0,-60);
  else if (DESSIN==191)
    translate(0,-260);
  else if (DESSIN==192)
    translate(0,-420);
  else if (DESSIN==193 || DESSIN==195)
    translate(0,-160);
}



// ----------------------------------------------------
function DEBUG()
{
  if (_DEBUG_)
    DESSIN_QUAD();
}

