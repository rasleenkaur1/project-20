var car , wall;
var speed , weight;
var d;
function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(1200,200,60,height/2);
  wall.shapeColor =color (80,80,80);
  car.velocityX = speed;
  d = 0.5*weight*speed*speed/22500;
}

function draw() {
  background("green");  
  if(wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX = 0;
  d = 0.5*weight*speed*speed/22500;
  if(d>180){
  car.shapeColor = color(255,0,0);
  }
  if(d<180 && d>100){
    car.shapeColor = color(230,230,0);
    }
    if(d<100){
      car.shapeColor = color(0,255,0);
      }
  }
  drawSprites();
}