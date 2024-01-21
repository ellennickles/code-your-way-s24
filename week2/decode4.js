/*
Inspired by Frieder Nake's Zufälliger Polygonzug – 13/9/65 Nr. 7 (Random Polygon (1965) and A. Michael Noll's Gaussian-Quadratic (1963)
*/

let startX;
let startY;
let endX;
let endY;

let num = 0;
let total = 40;

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
  startX = random(10, width - 10);
  startY = random(10, height - 10);
}

function getEndPoint() {
  endX = random(10, width - 10);
  endY = random(10, height - 10);
}
