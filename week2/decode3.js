/*
Inspired by Frieder Nake's ER56 / 264 (1963) and Vera Molnár's Du Cycle: Segments et leurs Croisements No. 9 (1973)
*/

let startX;
let startY;
let endX;
let endY;

let seed = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  strokeWeight(2);
}

function draw() {
  background(0);
  
  for (let i = 0; i < 100; i++) {
    
    startX = random(20, width - 20);
    startY = random(20, height - 20);

    if (random(10) < 1) {
      let amount = random(5, 20);
      endX += amount;
      endY = startY + amount;
    } else {
      let amount = random(5, 20);
      endY += amount;
      endX = startX + amount;
    }
    
    line(startX, startY, endX, endY);
  }

  noLoop();
}

function mousePressed() {
  seed = random(1000);
  loop();
}
