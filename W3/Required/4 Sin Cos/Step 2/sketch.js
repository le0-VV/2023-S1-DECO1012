// this code somewhat resembles the demo shown on Canvas, but isn't 100% similar

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode("degrees");
}

function draw() {
  background(0, 100);
  let circleSize = map(mouseY, 0, height, 5, 50)
  let orbitSize = 30
  let speedMultiplier = map(mouseX, 0, width, 10, 20)
  let angle = (frameCount % 360)*speedMultiplier

  let x = mouseX + orbitSize * sin(angle);
  let y = mouseY + orbitSize * cos(angle);
  
  noStroke();
  circle(x, y, circleSize);
}