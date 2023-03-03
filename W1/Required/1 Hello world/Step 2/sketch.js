function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(225)
  let centre_X = windowWidth/2
  let centre_Y = windowHeight/2
  ellipse(centre_X-50,centre_Y-50,50)
  ellipse(centre_X-25,centre_Y-25,50)
  ellipse(centre_X,centre_Y,50)
  ellipse(centre_X+25,centre_Y+25,50)
  ellipse(centre_X+50,centre_Y+50,50)
  line(centre_X-50,centre_Y-50,centre_X+50,centre_Y+50)
}