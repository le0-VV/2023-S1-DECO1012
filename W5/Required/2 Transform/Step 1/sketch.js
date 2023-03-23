let movingX = 0
let speedFactor = 0.002

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  bauhausHead(movingX, height/2);
  movingX+=width*speedFactor
  if (movingX > width){
    movingX = 0
  }
}

function bauhausHead(xPos, yPos, rotation, ratio) {
  push();

  //Step 1: use xPos and yPos to make it move.
  translate(xPos, yPos);

  //Step 2: use rotation to make it spin.
  //Don't forget about angleMode()

  //Step 3: use ratio to make it grow

  // Circular outline
  fill(245);
  strokeWeight(2);
  ellipse(0, 0, 98);

  // Style for head
  strokeWeight(0.5);
  fill(20);
  stroke(20);

  // Eye
  rect(-20, -22, 10, 10);
  line(-20, -22, -25, -22);
  line(-10, -12, -10, -7);

  rect(10, -47, 1, 60);
  line(10, 13, 0, 13);

  rect(3, 20.5, 5, 1);
  rect(8, 13, 2, 15);

  // Chin
  rect(1, 28, 7, 20);
  line(1, 28, -5, 28);

  pop();
}
