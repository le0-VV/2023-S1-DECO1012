function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  let mappedOuterSize = map(mouseX+mouseY, 0, width, 55, 70)
  let mappedColour = map(mouseX+mouseY, 0, height, 0, 255)
  let mappedColourReversed = map(mouseX+mouseY, 0, height, 255, 0)
  fill(mappedColourReversed)
  circle(mouseX, mouseY, mappedOuterSize)
  fill(mappedColour)
  circle(mouseX,mouseY,50)
}
