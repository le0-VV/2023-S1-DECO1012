let img;

function preload() {
 //load your image here
  img = loadImage("https://upload.wikimedia.org/wikipedia/en/6/63/Feels_good_man.jpg"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  imageMode(CENTER)
  tint(0, 255, 255)
  //display your image here with the image() function
  image(img, width/2, height/2)
}
