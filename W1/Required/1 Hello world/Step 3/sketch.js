function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(225)
  let centre_X = windowWidth/2
  let centre_Y = windowHeight/2
  strokeWeight(1)
  fill("red")
  ellipse(centre_X-50,centre_Y-50,50)
  fill("orange")
  ellipse(centre_X-25,centre_Y-25,50)
  fill("yellow")
  ellipse(centre_X,centre_Y,50)
  fill("green")
  ellipse(centre_X+25,centre_Y+25,50)
  fill("blue")
  ellipse(centre_X+50,centre_Y+50,50)
  strokeWeight(5)
  line(centre_X-50,centre_Y-50,centre_X+50,centre_Y+50)
}