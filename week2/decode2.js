/*
Inspired by George Nees' Micro-Innovation Series (1966)
*/

let x;
let y;
let w;
let h;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noFill();
  stroke(255);
  strokeWeight(2);
}

function draw() {
  background(0);

  for (let i = 0; i < 400; i++) {
    
    if (random(10) < 8) {
      w = random(5, 25);
      h = random(50, 150);
    } else {
      w = random(50, 150);
      h = random(5, 25);
    }
    
    x = random(w, width - w);
    y = random(h, height - h);
    
    rect(x, y, w, h);
  }
  
  noLoop();
}

function mousePressed() {
  loop();
}
