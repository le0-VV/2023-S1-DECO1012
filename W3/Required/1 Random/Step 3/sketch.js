function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  let divisionCount = floor(random(0,100))
  background(0);
  noStroke()
  for (let i = 0; i < divisionCount; i++) {
    let xPos = map(i, 0, divisionCount, 0, width)
    rect(xPos, random(0,height), width/divisionCount, height);
  }
}