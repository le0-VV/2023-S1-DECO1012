// Code provided by peter

let position=-120
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255, 200, 0);
  bell(width/2, (height/3)*2, 1);
}

function bell(x, y, size) {
  push();
  rectMode(CENTER);
  strokeWeight(8);
  strokeCap(ROUND);
  strokeJoin(ROUND);
  translate(x, y);
  scale(size);
  fill(255);
  // Bell body
  arc(0, 0, 200, 200, PI, TAU,CHORD);
  arc(0, 0, 165, 165, PI+0.2, PI+0.85);
  arc(0, 0, 165, 165, PI+1.05, PI+1.2);

  // Base of bell
  rect(0, 10, 210,20);

  // The bell head (this is what we want to move when clicked!)
  line(0,-100 , 0, -120);
  arc(0, position, 50, 50, PI, TAU,CHORD);
  pop();
}

function mousePressed() {
  position=-100
}

function mouseReleased() {
  position=-120
}