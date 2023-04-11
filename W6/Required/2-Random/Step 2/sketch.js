let numShapes = 15;
let shapeSize;

//We need to initialise our arrays as "empty"
let randRotations = [];
let randColors = [];
let randNames = [];
let randX = [];
let randY = [];

//Initialise two "empty" arrays for the x and y values here



function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  shapeSize = width * 0.1;

  //This time we will store all of the results, not just the most recent one
  for (let i = 0; i < numShapes; i++) {
    //Save random values in your array of x positions here
    
    //Save random values in your array of y positions here

    randRotations[i] = random(360);
    randColors[i] = random(['Crimson', 'green', 'DodgerBlue', 'yellow']);
    randNames[i] = random(['square', 'circle', 'triangle']);
    randX[i] = random(width)
    randY[i] = random(height)
  }
}

function draw() {
  background('#CDF1FC');

  //the draw loop is really simple now, this is good because we only get one draw loop but as many functions as we like
  //so keeping the draw loop tidy is an important practice
  for (let i = 0; i < numShapes; i++) {
    drawAShape(randX[i], randY[i], randRotations[i], randColors[i], randNames[i]);
  }
}

//the drawAShape function hasn't changed, we can ignore it which helps reduce "cognitive load"
//once you have a simple function that does one distinct job perfectly you don't need to worry about it anymore
//try collapsing the function with the small arrow on the left of the function near the line numbers
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