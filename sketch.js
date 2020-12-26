const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20)

    box1 = new Box(1000,380,60,60);
    box2 = new Box(850,380,60,60);
    pig1 = new Pig(925,380);
    log1 = new Log(925,320,200,PI/2);

    box3 = new Box(1000,300,60,60);
    box4 = new Box(850,300,60,60);
    pig2 = new Pig(925,300);
    log2 = new Log(925,240,200,PI/2);

    box5 = new Box(925,220,60,60);

    log3 = new Log(865,220,80,PI/7);
    log4 = new Log(985,220,80,PI/-7);

    bird = new Bird(200,200,40,40);

 
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();

    log3.display();
    log4.display();

    bird.display();

}