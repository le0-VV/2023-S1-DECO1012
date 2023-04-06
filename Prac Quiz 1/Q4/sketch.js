let coords = []
let lineCount = 0

function setup() {
  createCanvas (windowWidth, windowHeight);
  let lineCount = random(1,30)
  let seedA = random(0, 99999999)
  let seedB = random(0, 99999999)
  let prevX = 0
  strokeWeight(3)
  
  for(i = 0; i < lineCount; i++) {
    noiseSeed(seedA)
    let newX = map(noise(i), 0, 1, prevX, width/(lineCount*0.6)+prevX)
    noiseSeed(seedB)
    let newY = (noise(i) + 1) * height/3

    coords.push([newX, newY])
    prevX = newX
  }
}

function draw() {
  let prevX = 0
  let prevY = height/2

  for (i = 0; i < coords.length; i++) {
    let greenMod = map(noise(i), 0, 1, 0, 255)
    stroke(color(0, greenMod, 255))
    line(prevX, prevY, coords[i][0], coords[i][1])
    prevX = coords[i][0]
    prevY = coords[i][1]
  }
}