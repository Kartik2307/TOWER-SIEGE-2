const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var engine,world;

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
    world = engine.world;

ground=new Ground(500,680,1000,40)
platform=new Ground(400,550,300,40)

polygon=new Hexagon(100,350,40)
sling=new Slingshot(polygon.body,{x:100,y:350})


box1=new Box(280,540,30,40,"blue")
box2=new Box(310,540,30,40,"blue")
box3=new Box(340,540,30,40,"blue")
box4=new Box(370,540,30,40,"blue")
box5=new Box(400,540,30,40,"blue")
box6=new Box(430,540,30,40,"blue")
box7=new Box(460,540,30,40,"blue")
box8=new Box(490,540,30,40,"blue")
box9=new Box(520,540,30,40,"blue")


box10=new Box(310,510,30,40,"pink")
box11=new Box(340,510,30,40,"pink")
box12=new Box(370,510,30,40,"pink")
box13=new Box(400,510,30,40,"pink")
box14=new Box(430,510,30,40,"pink")
box15=new Box(460,510,30,40,"pink")
box16=new Box(490,510,30,40,"pink")


box17=new Box(340,480,30,40,"blue")
box18=new Box(370,480,30,40,"blue")
box19=new Box(400,480,30,40,"blue")
box20=new Box(430,480,30,40,"blue")
box21=new Box(460,480,30,40,"blue")


box22=new Box(370,450,30,40,"pink")
box23=new Box(400,450,30,40,"pink")
box24=new Box(430,450,30,40,"pink")


box25=new Box(400,420,30,40,"brown")


    Engine.run(engine); 
}


function draw() {
    
    rectMode(CENTER);
    background(125);

strokeWeight(2)
textSize(30)
fill("yellow")
text("Drag the hexagon and Release it, to launch it ",80,40)
text("Press Space to re-attach the hexagon to the point",80,80)

ground.display();
platform.display();

polygon.display();
sling.display();

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();


}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}


function keyPressed(){
    if(keyCode===32){
Matter.Body.setPosition(polygon.body, {x:100,y:350});
sling.attach(polygon.body);

    }
}




