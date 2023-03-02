function setup() {
  // This is just setup code, making the canvas the right size and the 
  // background a pleasantly numbing shade of grey.
  createCanvas(windowWidth, windowHeight);
  background(225);
  print(windowWidth, windowHeight)
}

function draw() {
  // This draws a red line in the middle of the canvas
  // (it should also give you a clue for your condition!)
  // You might hear this referred to as a "debug view";
  // you can remove it from the final design, but it will help you see
  // how the code is working, which helps remove bugs!
  // stroke(255,0,0);
  // line(width/2, 0, width/2, height);
  // stroke(0);

  noFill();

  // Put your condition here, in parentheses after the if (this one isn't quite right!)
  if(mouseX > width/2) {
    rectMode(CENTER)
    square(mouseX,mouseY,100,)
    // Put what happens if your condition is true here
  } else {
    circle(mouseX,mouseY,100)
		// Put what happens if your condition is false here
  }
}