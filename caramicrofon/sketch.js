let mic;//Crea una variable pel micròfon
function setup() {
  createCanvas(600,400);//Tamany de l'àrea de dibuix
  //El primer número es l'mplada en píxels i el segon número es l'alçada en píxels.
  mic=new p5.AudioIn();//El micròfon és una entrada de audio amb p5
  mic.start();//Activa el micròfon
}

function draw() {
  let vol=mic.getLevel();
  let h=map(vol,0,1,0,400);
  background(248,210,250);//Color del fons del dibuix
  //El primer número es el nivell de vermell"R",el segon número és el nivell de verd "G" i el tercer número és l'intensitat de blau "B" per tant color RGB en html. Dintre de background o fons.
  fill(255, 252, 227);//Color de la cara exterior
  //En el cas de fill serà el mateix.Però el que fa es omplir de color la figura següent que son dos ellipses.
  ellipse(300,200,200,250);//Forma de la cara exterior
 //El primer número es la posició "X" desde la cantonada superior esquerra que es al "0,0",el segon número la pisició "y" o alçada del centre de la ellipse.El tercer número és la amplada de la ellipse. El quart número és la alçada de la ellipse.
    fill(255, 252, 227);//Color blanc dels ulls
  
  ellipse(350,150,35,25);//Forma de l'ull dret perquè 
  ellipse(250,150,35,25);// Forma de l'ull esquerra perquè x=250
  line (320,140,370,130);
  line (220,140,270,130)
  //noStroke();
  fill(255-h*4,0,0);//Color boca
  arc(300,250,75,50+h,0,PI);//Forma de la boca
} 
