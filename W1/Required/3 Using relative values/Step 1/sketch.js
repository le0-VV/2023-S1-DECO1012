function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(204);
  ellipse(width/2-100, height/2, 80, 80); // Left
  ellipse(width/2, height/2, 80, 80); // Middle
  ellipse(width/2+100, height/2, 80, 80); // Right
}