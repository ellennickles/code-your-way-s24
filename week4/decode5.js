/*
Inspired by William Kolomyjec’s Random Squares

Based on a translation using recursion from Generative Artistry:
https://generativeartistry.com/tutorials/hypnotic-squares/
*/ 

let sizeStart;
let sizeTarget = 4;
let totalSteps = 6;
var directions = [-1, 0, 1];

function setup() {
  createCanvas(windowWidth, windowHeight);
  initialize();
}

function initialize() {
  background(255);
  noFill();
  strokeWeight(2);

  sizeStart = width / 8;

  for (let x = 0; x < width; x += sizeStart) {
    for (let y = 0; y < height; y += sizeStart) {
      let xDirection = random(directions);
      let yDirection = random(directions);
      drawSquare(x, y, sizeStart, xDirection, yDirection, totalSteps - 1);
    }
  }
}

function drawSquare(x, y, size, xMove, yMove, steps) {
  
  square(x, y, size);

  if (steps >= 0) {
    let newSize = sizeStart * (steps / totalSteps) + sizeTarget;
    let halfway = (size - newSize) / 2;
    let newX = x + halfway;
    let newY = y + halfway;
    newX = newX - ((x - newX) / (steps + 2)) * xMove;
    newY = newY - ((y - newY) / (steps + 2)) * yMove;
    drawSquare(newX, newY, newSize, xMove, yMove, steps - 1);
  }
}

/*
MIT License

Copyright (c) 2018 Tim Holman

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/