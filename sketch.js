var ball;
function preload(){

}
function setup() {
  createCanvas(400,400);
 ball = createSprite(200,200,20,20);
}

function draw() 
{
  background("green");
ball.velocityX = 0;
ball.velocityY = 0; 
if(keyDown("right")){
  ball.velocityX = 2;
}

if(keyDown("left")){
  ball.velocityX = -2;
}

if(keyDown("down")){
  ball.velocityY = 2;
}
if(keyDown("up")){
  ball.velocityY = -2;
}
 drawSprites();
}




