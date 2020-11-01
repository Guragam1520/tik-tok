var hr, mn, sc;

function setup() {
  createCanvas(800,400);
angleMode(DEGREES);
}

function draw() {
  translate(200,200)
  background(255,255,255);  
  hr=hour();
 mn=minute();
 sc=second();
 scAngle=map(sc,0,60,0,360);
 hrAngle=map(hr,0,60,0,360);
 mnAngle=map(mn,0,60,0,360);

push();
rotate(scAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();

push();
rotate(mnAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();

push();
rotate(hrAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();



  strokeWeight(10); 
 stroke(255,0,255); 
point(0,0);
 noFill();
  //Seconds
   stroke(255,0,0); arc(0,0,300,300,0,scAngle); 
  // Minutes
   stroke(0,255,0); arc(0,0,280,280,0,mnAngle);
   //Hour
    stroke(0,0,255); arc(0,0,260,260,0,hrAngle);


  drawSprites();
}