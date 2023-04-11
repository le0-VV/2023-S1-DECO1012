let squareSize;
let targetSize;
let easing = 0.1;
let interval = 1

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(230);
  fill(20, 20);
  stroke(170);
  rectMode(CENTER);
  squareSize = random(height);
  targetSize = squareSize
}

function draw() {
  square(width / 2, height / 2, squareSize);

  if (frameCount%(60*interval) == 0){
    targetSize = random(height)
  }

  squareSize = lerp(squareSize, targetSize, easing);
}