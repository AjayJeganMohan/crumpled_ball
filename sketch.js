
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;


var ball

var ground
var left
var right

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);
 
	var ball_options = {
	  isStatic : false,
	  restitution:0.3,
	  friction:0,
	  density:1.2
  		}
	
	background(51);
	
	//Create the Bodies Here.

	ball = Bodies.circle(40,380,20,ball_options)
	World.add(world,ball)

	Engine.run(engine);
  
	ground = new Ground(400,390,800,20);
	left = new Ground(500,290,20,180)
	right = new Ground(700,290,20,180)
}

function draw() {
 
	background(51);
	ellipse(ball.position.x,ball.position.y, 20);
  drawSprites();
  ground.show()
  left.show()
  right.show()
  keyPressed()
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.4,y:10})
	}
}