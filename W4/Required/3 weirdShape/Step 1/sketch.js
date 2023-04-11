// Code supplied by Peter Qin, modified by Leonard Wang

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(230);
  let padding = 20
  for (let i=0; i<10; i++){
    let xPos= map(i,0,10,padding,width-padding)
    for (let o=0;o<10;o++){
      let yPos= map(o,0,10,padding,height-padding) 
      let points= map(o+i,0,10,3,30)
      weirdShape(xPos, yPos, 10, points)
    }
  }
}
  

function weirdShape(xPos, yPos, size, points) {
  noFill();
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < points; i++) {
    vertex(xPos + random(-size, size), yPos + random(-size, size));
  }
  endShape();
}