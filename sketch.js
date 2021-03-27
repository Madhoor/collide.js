
var car,wall;
function setup() {
  createCanvas(1200,800);
  car = createSprite(400, 200, 50, 80);
  car.shapeColor = "green";
 // car.debug = true;
  car.velocityX = 4;

  wall = createSprite(800,200,80,30);
  wall.shapeColor = "blue";
  //wall.debug = true;
}

function draw() {
  background(0,0,0);  
  

bounce(car,wall)

  
  drawSprites();
}

