// This is step 2 but in green and blue

// try varying the noiseScale
// what if you used a different noiseScale for x and y?
let noiseScale = 0.05;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let greenVal = noise(x * noiseScale)*255;
      let blueVal = noise(y * noiseScale)*255;
      
      // how could you convert this to rgb colour values?
      // what about using colorMode(HSB)?
      stroke(0, greenVal, blueVal);
      point(x, y);
    }
  }
}