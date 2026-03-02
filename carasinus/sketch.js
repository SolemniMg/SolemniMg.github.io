function setup() {
  createCanvas(600,400);//Tamany de l'àrea de dibuix
  //El primer número es l'mplada en píxels i el segon número es l'alçada en píxels.
}

function draw() {
  let sinus=sin(frameCount*0.01)*20;
  let sinuscolor=sin(frameCount*0,01)
  //Sinus és una variable, és un nom que conté números que canvien,
  //És a dir, una variable numèrica on guardem números que provenen
  //De la funció Sinus que genera números entre -1 i +1.
  //Si els números entre -1 i +1 ho multiplico per 20, es transformaràn en números entre -20 i +20. No seràn aleatoris, si no que augmentaràn i disminuiràn repetidament sense parar. Aquesta variable la puc sumar, multiplicar, dividir o canviar en qualsevol paràmetrede les funcions següents.
  background(248,210,250);//Color del fons del dibuix
  //El primer número es el nivell de vermell"R",el segon número és el nivell de verd "G" i el tercer número és l'intensitat de blau "B" per tant color RGB en html. Dintre de background o fons.
  fill(2675+sinus, 258+sinus, 2877+sinus);//Color de la cara exterior
  //En el cas de fill serà el mateix.Però el que fa es omplir de color la figura següent que son dos ellipses.
  ellipse(300,200,200,250);//Forma de la cara exterior
 //El primer número es la posició "X" desde la cantonada superior esquerra que es al "0,0",el segon número la pisició "y" o alçada del centre de la ellipse.El tercer número és la amplada de la ellipse. El quart número és la alçada de la ellipse.
    fill(255, 252, 227);//Color blanc dels ulls
  
  ellipse(350+sinus,150,35,25);//Ull dret perquè x=350
  ellipse(250+sinus,150,35,25);// Ull esquerra perquè x=250
  fill(255,110,110);
  arc(300+sinus,250+sinus,75+sinus,50+sinus,0,PI);
}
