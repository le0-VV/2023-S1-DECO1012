function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(255, 150);
  let bounceValue1 = sin(frameCount / 10) * 5;
  let bounceValue2 = cos(frameCount / 10) * 5;

  drawOffsetEllipse(-75, bounceValue2, color(0, 87, 231))
  drawOffsetEllipse(-25, bounceValue1, color(214, 45, 32))
  drawOffsetEllipse(25, -bounceValue2, color(255, 167, 0))
  drawOffsetEllipse(75, -bounceValue1, color(0, 135, 68))
}

function drawOffsetEllipse(xOffset, yOffset, myColor) {
  push()
    fill(myColor)
    ellipse(width / 2 + xOffset, height / 2 + yOffset, 25);
  pop()
}