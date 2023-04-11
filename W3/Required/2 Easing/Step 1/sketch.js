let squareSize;
let easing = 0.1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(230);
  fill(20, 20);
  stroke(170);
  rectMode(CENTER);
  squareSize = random(height);
}

function draw() {
  square(width / 2, height / 2, squareSize);

  squareSize = lerp(squareSize, mouseY, easing);
}