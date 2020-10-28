//Class 22

//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var ground;
var box1, box2;

function setup() {
  createCanvas(400,400);

  myengine = Engine.create();
  myworld = myengine.world;

  

  //Matter.Bodies.rectangle(x, y, width, height, [options])

  ground = new Ground(200,390,400,20);
  

  //Matter.Bodies.circle(x, y, radius, [options]);

  box1 = new Box(200,300,50,50);

  box2 = new Box (240,100,50,100);
 


}

function draw() {
  background("black"); 

  Engine.update(myengine);
  


  box1.display();
  box2.display();
  ground.display();

}