let noiseStep = 0.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0, 50);
}

function draw() {
  background(204,30);
  
  noiseStep += 0.01;
  let n = noise(noiseStep) * width;
  line(n, 0, n, height);
}