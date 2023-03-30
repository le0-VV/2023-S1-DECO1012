let xCount = 10
let yCount = 8
let coordArr = []

let margin = 50;

function setup() {
createCanvas(windowWidth, windowHeight);
  background(230);
  noStroke();
  for(let x = 0; x < xCount; x++) {
    for(let y = 0; y < yCount; y++) {
      coordArr.push(
        [
          map(x, 0, xCount-1, margin, width-margin),
          map(y, 0, yCount-1, margin, height-margin),
          floor(random(3,10))
        ]
      )
    }
  }
}

function draw() {
  for(i = 0; i < coordArr.length; i++) {
    target(
      coordArr[i][0],
      coordArr[i][1],
      margin,
      coordArr[i][2]
    )
  }
}

//the target function hasn't changed at all
function target(x, y, size, circleNum) {
  for(let i = 0; i < circleNum; i++) {
    if(i % 2 == 0) {
      fill(255);
    } else {
      fill(0);
    }
    ellipse(x, y, size - i*size/circleNum, size - i*size/circleNum);
  }
}

function mousePressed() {
  loop();
}