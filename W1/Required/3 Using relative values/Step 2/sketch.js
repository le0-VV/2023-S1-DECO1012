let sizeLimit

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (windowWidth>windowHeight) {
    sizeLimit = windowHeight-50
  } else {
    sizeLimit = windowWidth-50
  }
  let sizeRatio = 3
  noStroke()
  fill(212)
  circle(windowWidth/2, windowHeight/2,map(128,0,128,(sizeLimit)/sizeRatio,sizeLimit))
  fill(188)
  circle(windowWidth/2, windowHeight/2, map(64,0,128,(sizeLimit)/sizeRatio,sizeLimit))
  fill(165)
  circle(windowWidth/2, windowHeight/2, map(32,0,128,(sizeLimit)/sizeRatio,sizeLimit))
  fill(143)
  circle(windowWidth/2, windowHeight/2, map(16,0,128,(sizeLimit)/sizeRatio,sizeLimit))
  fill(121)
  circle(windowWidth/2, windowHeight/2, map(8,0,128,(sizeLimit)/sizeRatio,sizeLimit))
  fill(101)
  circle(windowWidth/2, windowHeight/2, map(4,0,128,(sizeLimit)/sizeRatio,sizeLimit))
  fill(81)
  circle(windowWidth/2, windowHeight/2, map(2,0,128,(sizeLimit)/sizeRatio,sizeLimit))
  fill(38)
  circle(windowWidth/2, windowHeight/2, map(1,0,128,(sizeLimit)/sizeRatio,sizeLimit))
}