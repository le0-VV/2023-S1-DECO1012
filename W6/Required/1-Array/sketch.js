let sizes = [100, 50, 100, 100]; //This is the most basic way to make an array. It's great for storing a bunch of numbers that we already know!
let heights = []; //Here we say that there is an array called heights and that it should start empty.

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  //here we can initialise each element in our array individually
  heights[0] = random(height); //we can't use p5.js functions like random outside of setup or draw - that's why we wanted to declare our array starting empty!
  heights[1] = random(height);
  heights[2] = height/2; //we also don't have access to the height variable until after createCanvas
  heights[3] = 100;
}

function draw() {
  background(255);
  fill('lightblue');

  //see if you can turn this bit into a for loop
  circle(width*0.20, heights[0], sizes[0]);
  circle(width*0.40, heights[1], sizes[1]);
  circle(width*0.60, heights[2], sizes[2]);
  circle(width*0.80, heights[3], sizes[3]);
}