var test,testanimation;
function preload()
{
testanimation=loadAnimation("test.png","snake.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(0);
  test=createSprite(random(0,windowWidth),random(0,windowHeight),20,20);
  test.scale=0.2;
 test.addAnimation("snake",testanimation);            
    
  test.lifetime=50;
  drawSprites();
}