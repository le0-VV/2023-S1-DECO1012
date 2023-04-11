function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(0);
  noStroke();
  for (let i = 0; i < 10; i++) {
    let xPos = map(i, 0, 10, 0, width)
    rect(xPos, random(0,height), width/10, height);
  }
}