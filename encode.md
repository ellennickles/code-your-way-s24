# Encode

*A process modified from the
[PRIMM](https://www.raspberrypi.org/blog/primm-talk-in-programming-lessons-research-seminar/)
approach ([official website](https://primmportal.com/))

Steps to start reverse engineering sketches:

1. **Run** • Before you look at the source code, run the sketch in full screen
   mode.
2. **Speculate** • Based on what you see and experience on the screen, describe
   the various elements and how they operate computationally in your own words.
   For example:
    - What are the elements? Come up with a list of features.
    - How many are there? Are they related to one another? How?
    - What is moving and how? What is not moving?
    - Can you interact with the elements?
    - What happens if you resize the window?
    - How are color effects determined?
    - Maybe write some pseudocode to build a mental model of the algorithm?
3. **Investigate** • Now look at the source code. Tinker with it, and map the
   features from your observations to individual lines or blocks of code. Can
   you identify the part(s) of the code that implement the elements on which you
   speculated? For example, try:
    - Changing function parameters and variable values in substantial ways.
    - Commenting out parts of the code to see what happens.
    - Consulting the resources for the assignment if you see anything new.
4. **Annotate** • Duplicate the sketch into your own p5 account, and comment the
   code to explain what the different parts do, i.e. can you tell the story of
   the program?
    - If you need to, annotate each line, especially those with functions,
      syntax, and techniques that are new to you.
    - For example: describe how a function's parameters work, e.g. instead of //
      draws a circle, include the how: // the x parameter is the circle's
      distance from the origin of the canvas.
    - If you get stuck, write yourself a question to return to later.
5. **Modify** • Use your understanding of the code to change it and make it do
   different things. Make it your own; modify the code in some way to make it
   distinct from the original. If there’s something tricky that you’re still
   wrapping your head around, use that as a starting point. For example, try:
    - Changing the appearance by playing with scale, speed, color, etc.
    - Reordering lines or blocks of code.
    - Simplifying or extending the sketch, e.g. removing code or adding more
      functionality.
    - Make it interactive!
