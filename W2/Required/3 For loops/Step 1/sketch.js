function setup() {
  createCanvas(windowWidth, windowHeight);
  background(225);
  noFill();
}
 
function draw() {
  // We can do better than repeating the ellipse function over and over again in our draw loop.
  // For loops are perfect for shortening this code
  // ellipse(mouseX + 0, mouseY, 50);
  // ellipse(mouseX + 50, mouseY, 50);
  // ellipse(mouseX + 100, mouseY, 50);
  // ellipse(mouseX + 150, mouseY, 50);
  // ellipse(mouseX + 200, mouseY, 50);
  for (distance = 0; distance <= 200; distance+=50){
    ellipse(mouseX + distance, mouseY, 50);
  }
}
