let colourMax = 160
let overallIncrement = 5

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  let screenIncrement = width/overallIncrement
  let baseX = 0
  let toX = screenIncrement
  for (let x = 0; x <= colourMax; x+=colourMax/overallIncrement){
    for (let i = 0; i <= height; i++) {
      let redAmount = map(i, 0, height, x, 255);
      stroke(redAmount, 100, 200);
      line(baseX,i,toX,i)
    }
    baseX += screenIncrement
    toX += screenIncrement
  }
}
