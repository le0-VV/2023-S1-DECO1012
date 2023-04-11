function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  frameRate(2);
}

function draw() {
  background(230);
  target(width / 2, height / 2, random(height), random(6));
}

function target(x, y, size, circleNum) {
  for (let i = 0; i < circleNum; i++) {
    if (i % 2 == 0) {
      fill(255);
    } else {
      fill(0);
    }
    ellipse(x, y, size - i * size / circleNum);
  }
}