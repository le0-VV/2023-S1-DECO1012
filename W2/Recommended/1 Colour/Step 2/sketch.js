let maxRedAmountModifier = 160
let screenDivisions = 5

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  let sectionIncrement = windowWidth / screenDivisions;
  let lineStartX = 0;
  let lineEndX = sectionIncrement;
  for (let x = 0; x <= maxRedAmountModifier; x += maxRedAmountModifier / screenDivisions){
    for (let i = 0; i <= height; i++) {
      let redAmount = map(i, 0, height, x, 255);
      stroke(redAmount, 100, 200);
      line(lineStartX, i, lineEndX, i);
    }
    lineStartX += sectionIncrement;
    lineEndX += sectionIncrement;
  }
}