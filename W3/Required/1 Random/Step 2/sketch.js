function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(230);
  fill(20);
  stroke(20);
  // noLoop();
}

function draw() {
  background(230);
  for (let i = 0; i < 10; i++) {
    fill(random(0,255),random(0,255),random(0,255))
    let xPos = map(i, 0, 10, 0, width)
    rect(xPos, random(0,height), width/10, height);
  }
}