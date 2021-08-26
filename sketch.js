
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;

var engine, world;
var plink
var divisionHeight = 250;

var particles = [];
var plinkos = [];
var division = [];
var ground;
var l, r, u, d;

function setup() {
  createCanvas(570, 700);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  //creating canvas border
  l = new Ground2(width - 5, height / 2, 10, height);
  u = new Ground2(width / 2, height - 695, width, 10);
  r = new Ground2(width - 565, height / 2, 10, height);
  d = new Ground2(width / 2, height - 5, width, 10);

  //creating ground
  ground = new Ground(width / 2, 690, width, 10);


  for (var i = 0; i <= width; i = i + 80) {
    division.push(new Division(i, height - divisionHeight / 2, 10, divisionHeight));
  }

  //creating plinkos
  for (var p = 30; p <= width; p = p + 50) {
    plinkos.push(new Plinko(p, 35));
  }
  for (var p = 5; p <= width - 10; p = p + 50) {
    plinkos.push(new Plinko(p, 75));
  }
  for (var p = 30; p <= width; p = p + 50) {
    plinkos.push(new Plinko(p, 125));
  }
  for (var p = 5; p <= width - 10; p = p + 50) {
    plinkos.push(new Plinko(p, 175));
  }

  for (var p = 30; p <= width; p = p + 50) {
    plinkos.push(new Plinko(p, 225));
  }
  for (var p = 5; p <= width - 10; p = p + 50) {
    plinkos.push(new Plinko(p, 275));
  }
  for (var p = 30; p <= width; p = p + 50) {
    plinkos.push(new Plinko(p, 325));
  }
  for (var p = 5; p <= width - 10; p = p + 50) {
    plinkos.push(new Plinko(p, 375));
  }

 

  //createSprite(400, 200, 50, 50);
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  //displaying ground
  ground.display();

  //displaying plinkos
  for (var p = 0; p < plinkos.length; p++) {
    plinkos[p].display()
  }
  for (var p = 0; p < plinkos.length; p++) {
    plinkos[p].display()
  }
  for (var p = 0; p < plinkos.length; p++) {
    plinkos[p].display()
  }
  for (var p = 0; p < plinkos.length; p++) {
    plinkos[p].display()
  }

   //displaying particles
   for (var t = 0; t < particles.length; t++) {
    particles[t].display();
  }

   //creating particles
   if (frameCount % 60 === 0) {
    particles.push(new Particle(random(width / 2 - 30, width / 2 + 30), 10, 10));
  }

  //displaying division
  for (var i = 0; i < division.length; i++) {
    division[i].display();
  }

 

  //displaying canvas border
  l.display();
  u.display();
  r.display();
  d.display();

  Engine.update(engine);
  drawSprites();
}