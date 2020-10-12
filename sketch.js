var car,wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1350,400);
  speed=random(223,231);
  weight=random(30,52);
  thickness=random(22,23);
  car=createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickness,height/2);
  fill(80,80,80);
}

function draw() {
  background(0);
  car.velocityX=speed;
  if(wall.x-car.x<(car.width+wall.width/2))  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509
  }
    if(deformation>180){
      car.shapeColor = color(255,0,0);
    }
    if(deformation>180 && deformation>100){
      car.shapeColor = color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor = color(0,255,0);
    }
  
  drawSprites();
}
function hasCollided(Lbullet,Lwall){
bulletRightEdge=Lbullet.x+Lbullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallRightEdge)
{
  return true
}
return false;
}
if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
if(damage>10){
  wall.shapeColour=colour(255,0,0);
}
if(damage<10){
  wall.shaoeColor(0,225,0);
}
}