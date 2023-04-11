let ellipseSize = 25;
let rotationRadius = 75;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(255, 150);
  drawOffsetEllipse(getNextX(angle), getNextY(angle), color(0, 87, 231));
  drawOffsetEllipse(getNextX(angle + PI / 2), getNextY(angle + PI / 2), color(214, 45, 32));
  drawOffsetEllipse(getNextX(angle + PI), getNextY(angle + PI), color(255, 167, 0));
  drawOffsetEllipse(getNextX(angle + 3 * PI / 2), getNextY(angle + 3 * PI / 2), color(0, 135, 68));
  angle += 0.1;
}

function getNextX(theta) {
  return rotationRadius * sin(theta) + width / 2;
}

function getNextY(theta) {
  return rotationRadius * cos(theta) + height / 2;
}

function drawOffsetEllipse(xOffset, yOffset, myColor) {
  fill(myColor);
  ellipse(xOffset, yOffset, ellipseSize);
}
