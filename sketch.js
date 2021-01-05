const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var object;
var box1, ground1;

function setup() {

  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new box(200,200,30,30);
  ground1 = new ground(400,380,800,10);

}


function draw() {
  background(255,255,255);  

  Engine.update(engine);
box1.display();
ground1.display();
 
  drawSprites();
}