// Declare the variables up here, but don't assign an initial value

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Initialise the variables here!
}

function draw() {
  let myColor = color(255, 100, 20);
  let halfHeight = height / 2;
  let spawnX = random(width);
  let spawnY = random(height);
  // Moved all the variables here, since they are only needed here
  fill(myColor);
  circle(spawnX, spawnY, halfHeight);
}