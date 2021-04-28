var tom, tomAnimation, tomStart, tomEnd;
var jerry, jerryAnimation;
var backGround, backGroundImage;

function preload() {

    backGroundImage = loadImage("garden.png");
    tomStart = loadImage("cat1.png");
    tomEnd = loadImage("cat4.png");
    tomAnimation = loadAnimation("cat2.png", "cat3.png");

    jerryStart = loadImage("images/mouse1.png");
    jerryAnimation = loadAnimation("mouse2.png", "mouse3.png");
    jerryEnd = loadImage("mouse4.png");

}

function setup(){

    createCanvas(1000,800);
    
    backGround = createSprite(500, 400);
    backGround.addImage("background", backGroundImage);

    tom = createSprite(800, 600);
    tom.addImage("tom", tomStart);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addImage("jerry", jerryStart);
    jerry.scale = 0.1;
    
    tom.setCollider("rectangle", 0, 0, 400, 400);
    jerry.setCollider("rectangle", 0, 0, 400, 400);
}

function draw() {

    background("white");
    
    if(tom.x - jerry.x <  tom.width/2 - 150+ jerry.width/2){

        tom.velocityX = 0;
        jerry.addImage("jerry", jerryEnd);
        tom.addImage("tom", tomEnd);

    }

    keyPressed();

    drawSprites();

}


function keyPressed(){

    if(keyDown("left")){

        jerry.addAnimation("jerry", jerryAnimation);
        tom.velocityX = -4;
        tom.addAnimation("tom", tomAnimation);

    }
  
  }
