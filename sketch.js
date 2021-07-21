const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ball;
var ground; 

function setup() {
  createCanvas(400,400)
  engine = Engine.create() 
  world = engine.world
  var ball_options = {
    restitution: 0.95,
    frictionAir: 0.01,
  }
ball = Bodies.circle(100,10,40,ball_options) 
World.add(world,ball) 

var ground_options = {
  isStatic: true 
}
ground = Bodies.rectangle(200,390,400,20,ground_options) 
World.add(world,ground) 

var rock_options = {
  restitution: 0.95,
  frictionAir: 0.01,
}
rock = Bodies.circle(300,20,20,rock_options) 
World.add(world,rock) 

}

function draw() {
background(51)
Engine.update(engine)
ellipse(ball.position.x,ball.position.y,40)
rect(ground.position.x,ground.position.y,400,20) 
ellipse(rock.position.x,rock.position.y,20) 
}