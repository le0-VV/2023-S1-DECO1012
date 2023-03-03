function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  let lineCount = 20
  // top left quadrant
  for(i = 0; i <= lineCount; i++) {
    let setX = 0+map(i, 0, lineCount, 0, width/2)
    line(setX, 0, setX, height/2)
  }
  
  // top right quadrant
  for(i = 0; i <= lineCount; i++) {
    let setY = 0+map(i, 0, lineCount, 0, height/2)
    line(width/2, setY, width, setY)
  }
  
  // bottom left quadrant
  for(i = 0; i <= lineCount; i++) {
    let setY = 0+map(i, 0, lineCount, height/2, height)
    line(0, setY, width/2, setY)
  }
  
  // bottom right quadrant
  for(i = 0; i <= lineCount; i++) {
    let setX = 0+map(i, 0, lineCount, width/2, width)
    line(setX, height/2, setX, height)
  }
}