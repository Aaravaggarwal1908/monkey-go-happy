var bananaImage,obstacleImage,obstacleGroup,background1,score,backgroundImg,ground,monkey,foodGroup,banana1;
function preload(){
  monkeyImage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  backgroundImg=loadImage("jungle.jpg"); 
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
}
function setup() { 
  createCanvas(400, 400);
  background1=createSprite(0,0,400,400);
  background1.addImage(backgroundImg);
  background1.scale=1;
 // background1.velocityX=-4;
  background1.x=background1.width/2;
  
  ground=createSprite(200,400,400,20);
  ground.visible=false;
  
  monkey=createSprite(60,360,20,20);
  monkey.addAnimation("monkeyrunning",monkeyImage);
  monkey.scale=0.10;
  
  foodGroup=new Group();
 
  obstacleGroup=new Group();
}

function draw() {
  background(220);
  if(foodGroup.isTouching(monkey)){
    score=score+2;
    foodGroup.destroyEach();
  }
  if(keyDown("space")){
    monkey.velocityY=-10;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  
    switch(score){
      case 10:monkey.scale=0.14;
        break;
      case 20:monkey.scale=0.16;
        break;
      case 30:monkey.scale=0.18;
        break;
      case 40:monkey.scale=0.20;
        break;
      default : break;
  }
  

  monkey.collide(ground);
  spawnBananas();
  spawnObstacles();
drawSprites();
stroke("white");
textSize(20);
fill("white");
text("Score:"+score,200,50);
  function spawnBananas(){
    if(frameCount%60===0){
      banana1=createSprite(400,300,30,30);
      banana1.y=Math.round(random(200,300));
      banana1.addImage(bananaImage);
      banana1.velocityX=-3;
      banana1.scale=0.05;
   banana1.depth=monkey.depth;
    monkey.depth=monkey.depth+1;
      banana1.lifetime=200;
    }
  }

  function spawnObstacles(){
    if(frameCount%90===0){
      obstacle=createSprite(400,370,20,20);
      obstacle.addImage(obstacleImage);
      obstacle.scale=0.1;
      obstacle.velocityX=-3;
      obstacle.depth=monkey.depth;
      monkey.depth=monkey.depth+1;
    }
  }
  if(foodGroup.isTouching(monkey)){
    score=score+2;
  }
} 