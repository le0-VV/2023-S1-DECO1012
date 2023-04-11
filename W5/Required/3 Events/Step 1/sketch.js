let myColor = 230;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(230);
}

function draw() {
  background(myColor)
}

function mousePressed() {
  if(mouseX < width/2) {
    if(mouseY < height/2) {
      myColor = color(255, 0, 0)
    } else {
      myColor = color(0, 0, 255)
    }
  } else {
    if(mouseY < height/2) {
      myColor = color(0, 255, 0)
    } else {
      myColor = "white"
    }
  }
}
