var minANGLE, secANGLE, hourANGLE;
var hr, min, sec;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);

}

function draw() {
  background(255,255,255);  
  hr = hour();
  min = minute();
  sec = second();

  secANGLE = map(sec, 0, 60, 0, 360);
  minANGLE = map(min, 0, 60, 0, 360);
  hourANGLE = map(hr, 0, 12, 0, 360);

  translate(200, 200);
  rotate(-90);
  push();
  noFill();
  stroke("green");
  strokeWeight(2);
  ellipse(0, 0, 300);
  pop();

  push();
  rotate(secANGLE);
  stroke("cyan");
  strokeWeight(1);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minANGLE);
  stroke("red");
  strokeWeight(2);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourANGLE);
  stroke("blue");
  strokeWeight(3);
  line(0, 0, 50, 0);
  pop();

  drawSprites();
}

