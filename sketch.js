var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 1500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  var ball_options={
    isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2

  }
  ball = Bodies.circle(260,100,10,ball_options)
  World.add(world,ball)

  ground = new Ground(width/2,670,width,20)
  leftBox = new Ground(1100,600,20,120)
  rightBox = new Ground(1350,600,20,120)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20,20)
  ground.display()
  leftBox.display ()
  rightBox.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{
			x:5,
			y:-5
		})
	}
}


