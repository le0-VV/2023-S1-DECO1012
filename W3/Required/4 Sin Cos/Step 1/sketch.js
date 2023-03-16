// Defines the radius of the area which the design should cover.
let waveSize = 150;

// Keep this variable increasing to make the sin wave move.
let motion = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(255);
  
  // Optional: Set the radius to scale with the sketch

  // Remember to change the angleMode to use degrees!
  angleMode("degrees")
  // This is important, without this the code will break
}

function draw() {
  background(0, 50);

  /*
    Steps:
    Write a for loop to generate a sequence "theta" which starts at 0 and ends at 360 with steps of 360/40.
     - note: The step size will change the harmonic motion of the displayed sin() plot.
    Within the loop:
      Calculate an X position to stretch from the left to the right of canvas as theta increases.
      Calculate a Y position with the formula: sin(theta + motion) * waveSize
      - note: Multiplying the output of sin() allows us to stretch the -1 to 1 range onto the range of the scaling value.
      - note: Try it without the addition of a motion value to see the static version
      Draw a circle at x, y + (height/2), with a size of 10
      
    After the loop, increase motion by 1 to introduce motion into the design.
  */
  
    for(theta = 0; theta <= 360; theta += 360/40){
        let x = map(theta, 0, 360, 0, width)
        let y = sin(theta + motion) * waveSize

        circle(x, y + height/2, 10)
    }
    motion++
}
