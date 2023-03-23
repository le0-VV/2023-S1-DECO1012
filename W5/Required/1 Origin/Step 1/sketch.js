function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
}



function draw() {
  background(0, 1);

  translate(width/2, height/2);

  let translateX = sin(frameCount) * 50;
  let translateY = cos(frameCount) * 100; 

  translate(translateX, translateY);
  noStroke();
  fill(255);
  ellipse(0, 0, 5);
}