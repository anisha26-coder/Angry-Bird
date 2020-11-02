var fixedRect, movingRect;

//function setup
function setup() {
  var canvas = createCanvas(800,400);

  fixedRect=createSprite(200,200,80,30);
  movingRect = createSprite(100,20,30,80);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor="green";
  
}

function draw() {
  background(0,0,0);  

  movingRect.x= mouseX;
  movingRect.y=mouseY;

  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
    movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2&&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor="blue";
  }else{
    fixedRect.shapeColor = "green";
  movingRect.shapeColor="green";
  }

 drawSprites();
}
