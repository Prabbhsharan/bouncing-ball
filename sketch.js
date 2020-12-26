var fixedRect, movingRect;
var box1,box2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  box1 = createSprite(200,500,100,50);
  box1.shapeColor = "lightgreen";
  box1.velocityX =3;

  box2 = createSprite(800,500,200,100);
  box2.shapeColor = "lightblue";
  box2.velocityX = -3; 
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
bounceOff(box1,box2);


 if(isTouching(box1,box2)){
  box1.x = 50;
  box2.x = 100;
 }
 else {
 box1.x = 200;
 box2.x = 800;
 }

  drawSprites();
}

