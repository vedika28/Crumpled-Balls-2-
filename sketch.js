var ground, paper;
var dustbin;
var Dline1,Dline2,Dline3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
  
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	paper = new Paper();
	ground = new Ground();
	
	Dline1 = new Dline(690, 635, 130, 10);
	Dline2 = new Dline(625, 580, 10, 120);
	Dline3 = new Dline(755, 580, 10, 120);

	dustbin=new Dustbin();
	
}

function draw() {
	rectMode(CENTER);
	background(255);

	Engine.update(engine);

	paper.display();
	ground.display();

	Dline1.display();
	Dline2.display();
	Dline3.display();
	dustbin.display();

	drawSprites();

}

function keyPressed() {
	if (keyDown(UP_ARROW)) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 160, y: -300 });
		Matter.Body.setStatic(paper.body, false);
	}
}