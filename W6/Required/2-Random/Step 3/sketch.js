let numShapes = 15;
let speed = 5;
let shapeSize;

let randXs = [];
let randYs = [];
let randRotations = [];

let randColors = [];
let randNames = [];

//these are the new arrays that store the current direction of each shape's movement and rotation
let randXDirections = [];
let randYDirections = [];
let randRotationDirections = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  shapeSize = width * 0.1;

  for (let i = 0; i < numShapes; i++) {
    randXs[i] = random(width * 0.1, width * 0.9);
    randYs[i] = random(height * 0.1, height * 0.9);

    randRotations[i] = random(360);
    randColors[i] = random(['Crimson', 'green', 'DodgerBlue', 'yellow']);
    randNames[i] = random(['square', 'circle', 'triangle']);

    //here we pick a random direction for each shape to start travelling
    randXDirections[i] = random(-speed, speed);
    randYDirections[i] = random(-speed, speed);
    randRotationDirections[i] = random(-speed, speed);
  }
}

function draw() {
  background('#CDF1FC');

  //This whole for loop could probably go into it's own function called moveShapes()
  for (let i = 0; i < numShapes; i++) {
    //in this case we are randomly changing directions, experiment with changing this behaviour
    randXDirections[i] += random(-1, 1);
    randYDirections[i] += random(-1, 1);
    randRotationDirections[i] += random(-1, 1);

    //Every frame we add onto each shape's current position their current direction of movement and rotation
    randXs[i] += randXDirections[i];
    randYs[i] += randYDirections[i];
    randRotations[i] += randRotationDirections[i];

    //This is a simple behaviour to ensure the shapes don't leave the screen. You could also change how this works
    if (randXs[i] > width || randXs[i] < 0 || randYs[i] > height || randYs[i] < 0) {
      //here we reset all the location and direction variables
      randXs[i] = random(width * 0.1, width * 0.9);
      randYs[i] = random(height * 0.1, height * 0.9);
      randXDirections[i] = random(-speed, speed);
      randYDirections[i] = random(-speed, speed);
      randRotationDirections[i] = random(-speed, speed);
    }
  }

  for (let i = 0; i < numShapes; i++) {
    drawAShape(randXs[i], randYs[i], randRotations[i], randColors[i], randNames[i]);
  }
}

//still unchanged
function drawAShape(x, y, rotation, color, name) {
  push();
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