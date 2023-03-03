// This is one code block

let xPos = 200; // moved this line of code out of the setup() function
// EDIT: this code works correctly now

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Here we have our variable declared inside the setup function
}

// This is a different block
function draw() {
  // This code won't work correctly, because the xPos variable was not declared in this code block
  // We can fix this problem by either: 
  // declaring xPos inside this code block, or
  // making xPos a global variable
  ellipse(xPos, 200, 100, 100);
}