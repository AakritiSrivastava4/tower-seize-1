const Engine= Matter.Engine;
const World =Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var slingshot
function preload(){
  polygonimage= loadImage("images.jpg")
}
function setup() {

  engine= Engine.create ();
  world= engine.world;
  createCanvas(1200,800);

  polygon= Bodies.circle(50,150,20);
  World.add(world,polygon);
  ground = new Ground (500,270,400,10)
  slingshot= new SlingShot(this.polygon,{x:100,y:150});

  block1=new Box (330,235,30,40);
  block2=new Box (360,235,30,40);
  block3=new Box (390,235,30,40);
  block4=new Box (420,235,30,40);
  block5=new Box (360,195,30,40);

  block6=new Box (390,198,30,40);
  block7=new Box (375,155,30,40);

}

function draw() {

  Engine.update(engine);
  background ("white");
  image(polygonimage,polygon.position.x,polygon.position.y,80,50);
 ground.display();
 block1.display();
 block2.display()
 block3.display()
 block4.display()
 block5.display()
 block6.display()
 block7.display()
}
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
