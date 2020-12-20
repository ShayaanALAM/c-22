const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var bl;

function setup() {
  var canvas =createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  
  var grdopt={
    isStatic: true
  }
  ground=Bodies.rectangle(200,360,400,20,grdopt);
  World.add(world,ground);

  var blopt={
    restitution:1.0
  }
  bl=Bodies.circle(200,100,20,blopt);
  World.add(world,bl);
}

function draw() {
  background(0,0,0); 
   Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
  ellipseMode(RADIUS);
  ellipse(bl.position.x,bl.position.y,20,20);
}