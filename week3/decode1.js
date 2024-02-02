/*
Inspired by works from Frieder Nake's Matrix Multiplication Series
*/

let cellSize;
let sign;
let seed = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  noFill();
  stroke(0);
  strokeWeight(2);
}

function draw() {
  background(255);
  randomSeed(seed);

  cellSize = min(width / 10, height / 10);

  for (let x = cellSize / 2; x < width; x += cellSize) {
    for (let y = cellSize / 2; y < height; y += cellSize) {
        
      push();
      translate(x, y);

      let chance = random(1);
      if (chance < 0.5) {
        sign = 1;
      } else {
        sign = -1;
      }

      let angle = random(0, -60 * sign);
      rotate(angle);

      if (angle < 0) {
        square(0, 0, cellSize * random(0.5, 1));
      } else {
        square(0, 0, cellSize);
      }

      pop();
    }
  }
}

function mousePressed() {
  seed = random(50000);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
