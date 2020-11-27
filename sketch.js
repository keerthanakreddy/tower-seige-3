const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score=0;

function setup() {

 

  

  createCanvas(1600,1600);

  engine = Engine.create();
  world = engine.world;

  stand = new Ground(400,263,250,12);
  stand2=new Ground(800,263,250,12);
  stand3=new Ground(1200,263,250,12);
  wheel=new Circle(100,200,20);

  block1=new Box(330,235,30,40);
  block2=new Box(360,235,30,40);
  block3=new Box(390,235,30,40);
  block4=new Box(420,235,30,40);
  block5=new Box(450,235,30,40);
  block6=new Box(360,195,30,40);
  block7=new Box(390,195,30,40);
  block8=new Box(420,195,30,40);
  block9=new Box(390,1555,30,40);
  block10=new Box(375,155,30,40);
  block11=new Box(408,155,30,40);
  block12=new Box(390,110,30,40);
  block13=new Box(730,235,30,40);
  block14=new Box(762,235,30,40);
  block15=new Box(794,235,30,40);
  block16=new Box(824,235,30,40);
  block17=new Box(854,235,30,40);
  block18=new Box(760,195,30,40);
  block19=new Box(790,195,30,40);
  block20=new Box(820,195,30,40);
  block21=new Box(775,155,30,40);
  block22=new Box(805,155,30,40);
  block23=new Box(792,110,30,40);
  block24=new Box(1130,235,30,40);
  block25=new Box(1160,235,30,40);
  block26=new Box(1190,235,30,40);
  block27=new Box(1220,235,30,40);
  block28=new Box(1250,235,30,40);
  block29=new Box(1160,195,30,40);
  block30=new Box(1190,195,30,40);
  block31=new Box(1220,195,30,40);
  block32=new Box(1175,155,30,40);
  block33=new Box(1205,155,30,40);
  block34=new Box(1190,110,30,40);

  chain=new Chain(wheel.body,{x:200,y:50});
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();  
  block32.display();
  block33.display();
  block34.display();

  stand.display();
  stand2.display();
  stand3.display();

  wheel.display();

  block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();
block17.score();
block20.score();
block18.score();
block19.score();
block21.score();
block22.score();
block23.score();
block24.score();
block25.score();
block26.score();
block27.score();
block28.score();
block29.score();
block31.score();
block30.score();
block31.score();
block32.score();
block33.score();
block34.score();

  noStroke();
textSize(40);
text("SCORE :"+score,1000,350);
fill("green");



}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour);

  if(hour>=06 && hour<=19){
      backgroundImg = "sprites/bg1.jpg";
  }
  else{
      backgroundImg = "sprites/bg2.jpg";
  }

  backgroundImg = loadImage(background);
  console.log(backgroundImg);
}

function mouseDragged(){
  Matter.Body.setPosition(wheel.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  chain.fly();
}

function keyPressed(){
  if(keyCode===32){
    chain.attach(wheel.body);
  }
}