/*
Inspired by Vera Molnár's Du Cycle: “Carrés Non-Concentriques” (1974)
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(CENTER);
  noFill();
  stroke(255);
  strokeWeight(2);
  
  let minSize = min(width, height);
  let amount = minSize / 30;

  for (let i = 1; i < amount; i++) {
    let x = random(width / 2 - amount, width / 2 + amount);
    let y = random(height / 2 - amount, height / 2 + amount);
    square(x, y, amount * i);
  }
}

function draw() {}
