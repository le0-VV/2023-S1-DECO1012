let squareSize;
let easing = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(230);
  fill(20, 20);
  stroke(170);
  rectMode(CENTER);
  squareSize = random(height);
}

function draw() {
  background(230);
  square(width / 2, height / 2, squareSize);

  squareSize = lerp(squareSize, mouseY, easing);
  print(mouseY," VS ",squareSize)
}