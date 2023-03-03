function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectMode(CENTER);
  noStroke();
}
 
function draw() {
  // colour max 224
  // colour min 20
  // 9 shapes inclusive
  // Shorten this code using a for loop
  // fill(250);
  // rect(width/2,height/2, 300,300);
  // fill(200);
  // rect(width/2,height/2, 250,250);
  // fill(150);
  // rect(width/2,height/2, 200,200);
  // fill(100);
  // rect(width/2,height/2, 150,150);
  // fill(50);
  // rect(width/2,height/2, 100,100);
  // fill(0);
  // rect(width/2,height/2, 50,50);

  let shapeCount = 9
  let sizeMax = width-100
  let sizeMin = 0
  let brightest = 224
  let darkest = 20
  for (increment = shapeCount; increment >= 0; increment--){
    fill(map(increment, 0, shapeCount, darkest, brightest))
    square(width/2,height/2, map(increment, 0, shapeCount, sizeMin, sizeMax))
  }
}