let numShapes = 15;
let shapeSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  shapeSize = width * 0.1; //simple way to make sure the size of our shapes scales with the window size
}

function draw() {
  background('#CDF1FC');

  //Here we will use some simple variables to hold our random outcomes
  for (let i = 0; i < numShapes; i++) {
    let randX = random(width * 0.1, width * 0.9);
    let randY = random(height * 0.1, height * 0.9);
    let randRotation = random(360);
    let randColor = color(random(255), random(255), random(255)); //you can choose a random result from an array like this
    let randName = random(['square', 'circle', 'triangle']);
    drawAShape(randX, randY, randRotation, randColor, randName); //by doing the shape drawing in a function we keep our draw loop nice and tidy
  }
  noLoop();
}

function drawAShape(x, y, rotation, color, name) {
  push(); //push here to make sure this shape's transformations do not affect any others
  translate(x, y);
  rotate(rotation);
  fill(color);
  if (name == 'square') {
    square(0, 0, shapeSize);
  } else if (name == 'circle') {
    circle(0, 0, shapeSize / 2);
  } else if (name == 'triangle') {
    triangle(0, 0, shapeSize, 0, shapeSize / 2, shapeSize);
  }
  pop();
}