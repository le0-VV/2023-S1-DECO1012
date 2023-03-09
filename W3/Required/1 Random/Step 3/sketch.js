// let divisionCount = 110

function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(230);
  fill(20);
  stroke(20);
  noLoop();
}

function draw() {
  let divisionCount = floor(random(0,100))
  background(230);
  noStroke()
  for (let i = 0; i < divisionCount; i++) {
    fill(random(0,255),random(0,255),random(0,255))
    let xPos = map(i, 0, divisionCount, 0, width)
    rect(xPos, random(0,height), width/divisionCount, height);
  }
}