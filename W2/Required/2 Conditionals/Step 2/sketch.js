// This is just setup code, similar to part one

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(225);
}

function draw() {
  // This draws two red lines in the middle of the canvas
  // showing the boundaries of the quadrants
  // (it should also give you a clue for your conditions!)
  // stroke(255,0,0);
  // line(width/2, 0, width/2, height);
  // line(0, height/2, width, height/2);
  stroke(0);
  rectMode(CENTER)
  noFill();

  // Put your condition here, in parentheses after the if 
  if((mouseX < width/2 && mouseY < height/2) || (mouseX > width/2 && mouseY > height/2)) {
    circle(mouseX, mouseY, 100)
    // Put what happens if your condition is true here
  } else {
    square(mouseX, mouseY,100)
		// Put what happens if your condition is false here
  }
}
