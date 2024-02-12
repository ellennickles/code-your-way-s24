/*
Inspired by William Kolomyjec’s Random Squares

Based on a translation from Nick Santaniello:
http://recodeproject.com/translation/nick-santaniello-direct-untitled-1-various
*/

let total;
let sqSize;
let sizeDifference;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectMode(CENTER);
  strokeWeight(2);
  noFill();

  let minDimension = min(width, height);
  total = minDimension / 80;

  sqSize = width / total;
  sizeDifference = sqSize / 6;
}

function draw() {
  translate(sqSize / 2, sqSize / 2);

  for (let r = 0; r < total; r++) {
    for (let c = 0; c < total; c++) {
      let x = r * sqSize;
      let y = c * sqSize;
      square(x, y, sqSize);

      let offsetX = random(-5, 5);
      let offsetY = random(-5, 5);

      for (let i = 1; i < 6; i++) {
        let newX = c * sqSize + i * offsetX;
        let newY = r * sqSize + i * offsetY;
        let newSize = sqSize - i * sizeDifference;
        rect(newX, newY, newSize);
      }
    }
  }
  noLoop();
}
