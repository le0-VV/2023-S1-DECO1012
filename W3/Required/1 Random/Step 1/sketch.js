function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  stroke(random(0, 255), random(0, 255), random(0, 255))
  line(random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight))
}
