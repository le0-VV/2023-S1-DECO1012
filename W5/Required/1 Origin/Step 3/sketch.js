function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
}

function draw() {
  background(0, 1);
  translate(width/2, height/2);

  rotate(frameCount/4);

  let translateX = sin(frameCount) * 50;
  let translateY = cos(frameCount) * 100; 

  translate(translateX, translateY);
  noStroke();
  fill(255);
  ellipse(0, 0, 5);

  //Step 3: add another dot orbiting the first dot
  fill("red")
  let orbitSpeed = 7
  let orbitDisplacement = 5
  ellipse(sin(frameCount * orbitSpeed) * orbitDisplacement, cos(frameCount * orbitSpeed) * orbitDisplacement, 5);
}