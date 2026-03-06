function setup() {
  frameRate(5);
  createCanvas(600,400);//Tamany de l'àrea de dibuix
  //El primer número es l'mplada en píxels i el segon número es l'alçada en píxels.
}

function draw() { let r=random(0,255);
  let g=random(0,127);
  let b=random(128,255);
  let x=random(0,50);
  let y=50*noise(0.005*frameCount);
  background(r,g,b);//Color del fons del dibuix
  //El primer número es el nivell de vermell"R",el segon número és el nivell de verd "G" i el tercer número és l'intensitat de blau "B" per tant color RGB en html. Dintre de background o fons.
  fill(255, 252, 227);//Color de la cara exterior
  //En el cas de fill serà el mateix.Però el que fa es omplir de color la figura següent que son dos ellipses.
  ellipse(300,200,200,250);//Forma de la cara exterior
 //El primer número es la posició "X" desde la cantonada superior esquerra que es al "0,0",el segon número la pisició "y" o alçada del centre de la ellipse.El tercer número és la amplada de la ellipse. El quart número és la alçada de la ellipse.
    fill(255, 252, 227);//Color blanc dels ulls
  
  ellipse(350,150,35+x,25+x);//Ull dret perquè x=350
  ellipse(250,150,35+x,25+x);// Ull esquerra perquè x=250
  fill(255-r,110,110);
  arc(300,250,75,50,0,PI);
}
