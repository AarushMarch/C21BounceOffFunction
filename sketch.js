
var fixedRect;

var movingRect;

function setup() {
  createCanvas(1200,800);

  //Creating sprites for both fixed & moving rectangle
  //fixedRect = createSprite(200, 200, 50, 80);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "yellow"

  //fixedRect.velocityX = 5
  fixedRect.velocityY = 5
  
  movingRect = createSprite(400, 800, 80, 30);
  movingRect.shapeColor = "green"
  //movingRect.velocityX = -5
  movingRect.velocityY = -5
}

function draw() {
  background(255,255,255);  

  //console.log(movingRect.x - fixedRect.x); //fixedRect/2 = 25 , movingRect/2 = 40
  //console.log(movingRect.x - fixedRect.Rect)
  bounceOff(fixedRect, movingRect);

 drawSprites();
}


