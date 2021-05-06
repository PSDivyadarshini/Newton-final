
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bob1;
var roof1;
var myrope;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1 = new bob(150,500,30);
bob2 = new bob(190,500,30);
bob3 = new bob(230,500,30);
bob4 = new bob(270,500,30);
bob5 = new bob(310,500,30);

roof1 = new roof(200,200,350,20);

rope1=new rope(bob1.body,roof1.body,-80,0);
rope2=new rope(bob2.body,roof1.body,-40,0);
rope3=new rope(bob3.body,roof1.body,0,0);
rope4=new rope(bob4.body,roof1.body,+40,0);
rope5=new rope(bob5.body,roof1.body,+80,0);

	Engine.run(engine);
  
}


function draw() {
  background("blue");
  Engine.update(engine);
  rectMode(CENTER);
  background("white");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
  //drawSprites();

 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
  }
}



