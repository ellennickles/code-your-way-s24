/*
Inspired by Colette and Charles J. Bangert's Complex Intersecting Line (1976) and Roman Verostko's Sketch (1987)
*/

let startX;
let startY;
let endX;
let endY;

let num = 0;
let total = 1000;

let tx = 0;
let ty = 1000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  strokeWeight(2);
  getStartPoint();
  getEndPoint();
}

function draw() {
  while (num < total) {
    line(startX, startY, endX, endY);
    startX = endX;
    startY = endY;
    getEndPoint();
    num++;
  }
}

function getStartPoint() {
  startX = map(noise(tx), 0, 1, 0, width);
  startY = map(noise(ty), 0, 1, 0, height);
}

function getEndPoint() {
  endX = map(noise(tx), 0, 1, 0, width);
  endY = map(noise(ty), 0, 1, 0, height);

  tx += 0.01;
  ty += 0.01;
}
