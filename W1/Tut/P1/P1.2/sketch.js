function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0,256,256)
  let centre_X = windowWidth/2
  let centre_Y = windowHeight/2
  ellipse(centre_X-60,centre_Y-60,100)
  ellipse(centre_X-40,centre_Y-40,100)
  ellipse(centre_X-20,centre_Y-20,100)
  ellipse(centre_X,centre_Y,100)
  ellipse(centre_X+20,centre_Y+20,100)
  ellipse(centre_X+40,centre_Y+40,100)
  ellipse(centre_X+60,centre_Y+60,100)
}