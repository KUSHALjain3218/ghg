var hi,laser;
var gameState=1;
var score=0;
function preload(){
hi=loadImage("myy/c20.jpg")
shutle=loadImage("myy/rrr.png.png");
meteor=loadImage("myy/metreorr.png");
lase=loadImage("myy/laser1.png");
}


function setup() {
  createCanvas(500,889);
  if(gameState===1){

    button=createButton("LEVEL 1");
    button.position(250,444.5);
    button.mousePressed(()=>{
      gameState=2;
     
    })
    }
 
  metttGroup=createGroup();
 laserGroup=createGroup();
}

function draw() {
  background(hi);  
  drawSprites();
 
    if(gameState===2){
    
      rocket=createSprite(250,800,20,20);
      rocket.addImage("shutle crock",shutle);
      rocket.scale=(0.03);
      gameState=3;
      button.hide();
    }
   
    if(keyDown("space")){
      laser1();

    }
    for (var i=0; i<metttGroup.length;i++){
      if(metttGroup.get(i).isTouching(laserGroup)){
      metttGroup.get(i).destroy();
     
    score=score+1;
     
      }
  }

  //rocket.velocityX=0;
 // rocket.velocityY=0;

    if(keyDown("up")){
      rocket.velocityY=-5;
      
    }
    if(keyDown("down")){
      rocket.velocityY=5;
      
    }
    if(keyDown("left")){
      rocket.velocityX=-5;
      
    }
    if(keyDown("right")){
      rocket.velocityX=5;
      
    }

    if(gameState===3){
    mettt();
 
    if(score===10){
gameState = 4;


    }
    };
}
function mettt(){
  if(frameCount%20===0){
   met=createSprite(Math.round(random(450,5)),0,10,10,) 
   met.addImage("hi",meteor); 
  met.velocityY=5;
    met.scale=0.2;
metttGroup.add(met);
  }
}

function laser1(){
if(frameCount%2===0){
  laser = createSprite(rocket.x,rocket.y,20,20);
  laser.addImage("laser",lase)
  laser.scale=0.1;
  laser.velocity.y=-20;
  laserGroup.add(laser);
}

}


