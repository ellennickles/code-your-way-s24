/*
Inspired by Vera Molnár's Un, deux, trois

Based on a translation from Generative Artistry:
https://generativeartistry.com/tutorials/un-deux-trois/
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeCap(ROUND);
  strokeWeight(4);
}

function draw() {
  background(255);

  let step = min(width / 15, height / 15);

  for (let y = step; y < height - step; y += step) {
    for (let x = step; x < width - step; x += step) {
      if (y < height / 3) {
        drawLine(x, y, step, [0.5]);
      } else if (y < (height / 3) * 2) {
        drawLine(x, y, step, [0.2, 0.8]);
      } else {
        drawLine(x, y, step, [0.1, 0.5, 0.9]);
      }
    }
  }
  noLoop();
}

function drawLine(_x, _y, _step, positions) {
  push();
  translate(_x + _step / 2, _y + _step / 2);
  rotate(random(5));
  translate(-_step / 2, -_step / 2);
  for (let i = 0; i <= positions.length; i++) {
    line(positions[i] * _step, 0, positions[i] * _step, _step);
  }
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/*
MIT License

Copyright (c) 2018 Tim Holman

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
