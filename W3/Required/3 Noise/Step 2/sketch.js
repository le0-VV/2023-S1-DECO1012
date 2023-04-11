// try varying the noiseScale
// what if you used a different noiseScale for x and y?
let noiseScale = 0.1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let noiseVal = noise(x * noiseScale, y * noiseScale);
      
      // how could you convert this to rgb colour values?
      // what about using colorMode(HSB)?
      stroke(noiseVal * 255);
      point(x, y);
    }
  }
}