// WARNING: the functions here are modified to my preferences

function randX(border) {
  return random(border, width - border);
}

function randY(border) {
  return random(border, height - border);
}

function drawGridArray(numX, numY) {
  let border = 50; //some distance in from the edge of the canvas
  //nested for loop to set position on grid
  for (let x = 0; x < numX; x++) {
    for (let y = 0; y < numY; y++) {
      let xPos = map(x, 0, numX - 1, border, width - border);
      let yPos = map(y, 0, numY - 1, border, height - border);
      //draw something here
    }
  }
}

function circlePosX(angle, radius, centreX) {
  //return the x coordinate of a point on a circle
  return sin(angle) * radius + centreX;
}

function circlePosY(angle, radius, centreY) {
  //return the y coordinate of a point on a circle
  return cos(angle) * radius + centreY;
}

function drawPolarArray(numItems, centre, radius, shapeFunction, size) {
  //draw shapes in a circular pattern
  for (let i = 0; i < numItems; i++) {
    let angle = map(i, 0, numItems, 0, 360);
    let coords = []
    coords[0] = sin(angle) * radius + centre[0];
    coords[1] = cos(angle) * radius + centre[1];
    //draw something here, design your custom shape drawing functions and stuff them here
    shapeFunction(coords, size)
  }
}


function randomColour() {
  //make a colour of random hue, very bright and very saturated
  push();
  colorMode(HSB);
  let col = color(random(360), 100, 100);
  pop();
  return col;
}

function randomColourFromList() {
  //make an array of color() elements
  let colArray = [color("red"), color("green"), color("blue")];
  return random(colArray);
}

function wrapAroundCanvasX(xPos) {
  let remainder = xPos % width;
  if(remainder < 0){
    remainder += width;
  }
  return remainder;
}

function wrapAroundCanvasY(yPos) {
  let remainder = yPos % height;
  if(remainder < 0){
    remainder += height;
  }
  return remainder;
}
