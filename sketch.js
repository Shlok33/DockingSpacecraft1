var iss, spacecraft, hasDocked = false;

function preload(){
  issImg = loadImage("iss.png");
  sc1 = loadImage("spacecraft1.png");
  sc2 = loadImage("spacecraft2.png");
  sc3 = loadImage("spacecraft3.png");
  sc4 = loadImage("spacecraft4.png");
  spaceBg = loadImage("spacebg.jpg");
}

function setup() {
  createCanvas(1000,600);
  iss = createSprite(600,250);
  iss.addImage(issImg);
  iss.scale = 0.75;
  spacecraft = createSprite(300,450);
  spacecraft.scale = 0.20;
  spacecraft.addImage(sc1);
}

function draw() {
  background(spaceBg);
  
  if(!hasDocked){
    if(keyDown("UP_ARROW")){
       spacecraft.y = spacecraft.y-2;
       spacecraft.addImage(sc2);
    }
    if(keyDown("LEFT_ARROW")){
      spacecraft.x= spacecraft.x-2;
      spacecraft.addImage(sc3);
   }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.x= spacecraft.x+2;
      spacecraft.addImage(sc4);
 }
    if(keyDown("DOWN_ARROW")){
      spacecraft.y = spacecraft.y+2;
      spacecraft.addImage(sc1);
}
  }
    if(spacecraft.x === 546 && spacecraft.y === 330){
      hasDocked = true;
      fill("white") 
      textSize(30)
      text("Docking Succesful", 540, 500)
      
      spacecraft.addImage(sc1);
    }

  

  drawSprites();
}