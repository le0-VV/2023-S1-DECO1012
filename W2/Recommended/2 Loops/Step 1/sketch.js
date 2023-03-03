let numCircles = 20; // define total number of circles
let minRadius = 20; // Radius of the smallest circle

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  noFill(); // Make circles transparent
  //you might also like to play with transparency using fill(0, 20);
  stroke(255); // Set white stroke for each circle

  /* Write a while or for loop to create a pattern as shown in the image above.
   * You can use width/2 and height/2 to position the center of the circle at the center of the canvas
   * Refer to the p5 documentation to understand the usage of the ellipse() method
   */
  for (i = 0; i <= numCircles; i++) {
    // stroke(random(1,255))
    circle(width/2, height/2, map(i, 0, numCircles, minRadius, width*0.9));
  }

}