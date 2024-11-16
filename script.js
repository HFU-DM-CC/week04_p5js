// this setup function is called once at the start
function setup() {
  createCanvas(600, 600);
  // set fill color to yellow
  fill(255, 255, 0);
}

// this function is called 60 times per second
function draw() {
  // draw a black background but with a transparency
  background(0, 10);
  // draw a circle at the position of the mouse
  circle(mouseX, mouseY, 50);
}

// callback function for ESP touch input
function handleTouch12() {
  console.log("called from handleTouch12");
  changeColor();
}

// change the fill to a random rgb color
function changeColor() {
  fill(random(255), random(255), random(255));
}
