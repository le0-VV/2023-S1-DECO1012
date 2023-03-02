function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  let increment = width/5
  let baseX = 0
  let toX = increment
  for (let x = 0; x <= 160; x+=40){
    for (let i = 0; i <= height; i++) {
      let redAmount = map(i, 0, height, x, 255);
      stroke(redAmount, 100, 200);
      line(baseX,i,toX,i)
    }
    baseX += increment
    toX += increment
  }
}
