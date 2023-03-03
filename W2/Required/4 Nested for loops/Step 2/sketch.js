// README: I've decided to recreate the example shown on canvas instead of following the text instructions, more fun

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(224);
}

function draw() {
  noStroke()
  fill(16)
  let size = 30
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 5; y++) {
      // this remaps 0 to 50 to numbers that are useful on our canvas
      let xPos = map(x, 0, 9, 100, width - 100);
      // this should be replaced with a definition using the map function
      let yPos = map(y, 0, 4, height/2.7, height - height/2.7);
      if (x % 2 == 0){
        ellipse(xPos, yPos, size);
      } else {
        rectMode(CENTER)
        square(xPos, yPos, size);
      }
    }
  }
}