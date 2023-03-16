let squareSize;
let targetSize;
let easing = 0.1;

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
  background(230);
  square(width / 2, height / 2, squareSize);

  if (frameCount%180 == 0){
    targetSize = random(height)
  }

  squareSize = lerp(squareSize, targetSize, easing);
  print(targetSize," VS ",squareSize)
}