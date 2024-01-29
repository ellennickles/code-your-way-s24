/*
Inspired by Jongmin Park's sketch from Programming for Artists @ CUNY CCNY Spring 2022
*/

let rowHeight;

function setup() {
  createCanvas(600, 600);
  noStroke();
  rowHeight = height / 3;
}

function draw() {
  let x = mouseX;
  let y = mouseY;
  
  let inverseX = width - mouseX;
  let inverseY = height - mouseY;
  
   console.log("mouseX: " + mouseX, "the inverse: " + inverseX)

  if (mouseIsPressed) {
    background(80, 175);
  } else {
    background(175, 80);
  }

  fill(255, 150);
  circle(x, height / 2, y);

  fill(0, 150);
  circle(inverseX, height / 2, inverseY);

  if (mouseY < rowHeight) {
    fill(20, 150);
    rect(0, 0, width, rowHeight);
  } else if (mouseY < rowHeight * 2) {
    fill(80, 150);
    rect(0, rowHeight, width, rowHeight);
  } else {
    fill(140, 150);
    rect(0, rowHeight * 2, width, rowHeight);
  }
}