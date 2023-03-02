function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  for (let i = 0; i < width; i++) {
    let redAmount = map(i, 0, width, 255, 0);
    stroke(redAmount, 100, 200);
    line(i,0,i,height)
  }
}
