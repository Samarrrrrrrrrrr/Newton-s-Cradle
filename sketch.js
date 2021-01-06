
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(100, 500)
	bob2 = new Bob(200, 500)
	bob3 = new Bob(300, 500)
	bob4 = new Bob(400, 500)
	bob5 = new Bob(500, 500)
	ground = new Ground(350, 200, 800, 50)
	chain1 = new Chain(bob1.body, {x:100, y:200})
	chain2 = new Chain(bob2.body, {x:200, y:200})
	chain3 = new Chain(bob3.body, {x:300, y:200})
	chain4 = new Chain(bob4.body, {x:400, y:200})
	chain5 = new Chain(bob5.body, {x:500, y:200})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
bob1.display()
bob2.display()
bob3.display()
bob4.display()
bob5.display()
ground.display()
chain1.display()
chain2.display()
chain3.display()
chain4.display()
chain5.display()

  drawSprites();
 
}

function keyPressed() {

	if (keyCode===32) {
Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-10, y:-10})

console.log(bob1.body.position.x, bob1.body.position.y)
	}

}


