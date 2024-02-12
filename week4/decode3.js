/*
Based on Matt Pearson's "Listing i.1 A generative system in 24 lines of code" in the Introduction to Generative Art, 2011, p. xxiii

License:
No part of this publication may be reproduced, stored in a retrieval system, or transmitted, in any form or by means electronic, mechanical, photocopying, or otherwise, without prior written permission of the publisher, with the exception of the Introduction, Chapter 1, Chapter 6, and the source code throughout, which are available under a Creative Commons (Attribution-NonCommercial 3.0) license.
See creativecommons.org/licenses/by-nc/3.0/. Note that Creative Commons distribution of the images in the Introduction and in Chapter 1 is limited to those by Matt Pearson only.
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noFill();

  let xstart = random(10);
  let ty = random(10);

  translate(width / 2, height / 2);

  for (let y = -height / 8; y <= height / 8; y += 3) {
    ty += 0.02;
    let tx = xstart;
    for (let x = -width / 8; x <= width / 8; x += 3) {
      tx += 0.02;
      let noiseFactor = noise(tx, ty);
      drawCircle(x, y, noiseFactor);
    }
  }
}
  
function draw() {}
  
function drawCircle(newX, newY, newNoise) {
  push();
  translate(newX * newNoise * 4, newY * newNoise * 4);
  circle(0, 0, newNoise * 10);
  pop();
}
  