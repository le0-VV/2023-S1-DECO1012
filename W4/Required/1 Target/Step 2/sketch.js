function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  frameRate(3);
}

function draw() {
  background(230);
  //This makes a single row of targets, how would you make it a grid?
  let numWide = 8;
  let numHigh = 4
  let padding = 75
  let circleSize = 50
  let ringCount = 15

  for (let x = 0; x < numHigh; x++) {
    for (let i = 0; i < numWide; i++) {
      let xPos = map(i, 0, numWide-1, padding, width-padding);
      let yPos = map(x, 0, numHigh-1, padding, height-padding);
      target(xPos, yPos, circleSize, random(ringCount));
    }
  }
}

function target(x, y, size, circleNum) {
  for (let i = 0; i < circleNum; i++) {
    if (i % 2 == 0) {
      fill(255);
    } else {
      fill(0);
    }
    ellipse(x, y, size - i * size / circleNum, size - i * size / circleNum);
  }
}