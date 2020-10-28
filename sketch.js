var car, wall;
var speed, weight;

function setup() {
  createCanvas(1200,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,90,60);
  car.velocityX = speed;  
  wall = createSprite(1000,200,100,200);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0,0,0);  
  
 if (wall.x-car.x < (car.width+wall.width)/2) {

 car.velocityX = 0;

 var deform =0.5* weight* speed* speed/25500;

 if (deform<100) {
   car.shapeColor = color(255,0,0);
 }
 
 if (deform<180 && deform>100 ) {
   car.shapeColor = color(230,230,0);

}
 if (deform>180) {
   car.shapeColor = color (0,255,0);
}


 }

  drawSprites();
}