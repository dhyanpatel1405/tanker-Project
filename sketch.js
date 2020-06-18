
  const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
var shoot
var tanker
var tankerhead
var ball
var bgimg
function preload(){
bgimg = loadImage("images/bg1.jpg");



}
function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(0.1,490,1400,10)
    //shoot = new 
    tanker = new Tanker(50,400,100,100)
    tankerhead = new
ball = new
}

function draw() {
background(bgimg)
Engine.update(engine);
ground.display()
//shoot.display()
tanker.display()
tankerhead.display()
ball.display()
}
