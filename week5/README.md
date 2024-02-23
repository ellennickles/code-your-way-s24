# Week 5 • Version Control 2 / Parametric Geometries

## References

- [Class
  Slides](https://drive.google.com/drive/u/1/folders/1iH0ERUaMkSCn_7A9F4bnBWwMHJmu04ak)
- Version control with Git
  - [Command Line Intro](https://github.com/ellennickles/code-your-way-s24/blob/main/version-control-guides/commandline.md)
  - [Git Intro](https://github.com/ellennickles/code-your-way-s24/blob/main/version-control-guides/git.md)
  - [Integrated Terminal in Visual Studio
    Code](https://code.visualstudio.com/docs/terminal/basics)
  - Coding Train videos (from 2018): [Visual Studio
    Code](https://thecodingtrain.com/tracks/2018-workflow/workflow/2-visual-studio-code)
    | [Shell](https://thecodingtrain.com/tracks/2018-workflow/workflow/3-shell)
| [Git](https://thecodingtrain.com/tracks/2018-workflow/workflow/4-git)
  
## Assignment

Don't worry if you haven't worked with algebra and trigonometry in a long time!
Just tinker and have fun with the equations in the code examples. This week is
more about getting used to implementing version control with Git using a command line interface.

### Part 1: Explore and Experiment

Modify each sketch to make it your own: play with the numbers (make some huge,
some tiny), change the shapes, make multiples of an animation, integrate some
random functions (`random()` and `noise()`), "layer up sine and cosine
functions" as suggested in Miller's video (linked below), make a grid, make it
interactive, combine it with a previous sketch.

1. [Example 1](https://editor.p5js.org/enickles/sketches/XFLDhFgk6)
2. [Example 2](https://editor.p5js.org/enickles/sketches/291nqvFwo)
3. [Example 3](https://editor.p5js.org/enickles/sketches/DIQO7W7ep)
4. [Example 4](https://editor.p5js.org/enickles/sketches/I3fbOML-3)
5. [Example 5](https://editor.p5js.org/enickles/sketches/ARUWgs58A)

#### Resources

- Highly recommend! [Recreating Vintage Computer Art with
  Processing](https://www.youtube.com/watch?v=LaarVR1AOvs), inspired by John
  Whitney’s work (linked below), is an excellent introduction to creative coding
  with parametric equations with sine and cosine functions. (What's the
  [`return`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
  keyword?)
- [Khan Academy's lesson on Parametric
  equations](https://www.khanacademy.org/math/algebra-home/alg-trig-functions/alg-parametric/v/parametric-equations-1)
- [Graphs of Sine, Cosine and
  Tangent](https://www.mathsisfun.com/algebra/trig-sin-cos-tan-graphs.html)
- [Amplitude, Period, Phase Shift and
  Frequency](https://www.mathsisfun.com/algebra/amplitude-period-frequency-phase-shift.html)
- Description and use of the `sin()` function in [Creative Computing: Changes
  over time](https://creative-coding.decontextualize.com/changes-over-time) by
  Allison Parrish
- Coding Train videos
  - [3.4 Polar
    Coordinates](https://thecodingtrain.com/tracks/the-nature-of-code-2/noc/3-angles/4-polar-coordinates)
    (don't worry about vectors)
  - [3.5 Harmonic
    Motion](https://thecodingtrain.com/tracks/the-nature-of-code-2/noc/3-angles/5-harmonic-motion)
    demonstrating how to use the `sin()` function to simulate simple harmonic motion
  - [3.6 Graphing Sine
    Wave](https://thecodingtrain.com/tracks/the-nature-of-code-2/noc/3-angles/6-graphing-sine-wave)
    on how to graph and animate a sine wave varying the period and
    phase
  - [Coding Challenge #116 — Lissajous Curve
    Table](https://thecodingtrain.com/challenges/116-lissajous-curve-table) (and
    [challenge continued](https://www.youtube.com/watch?v=glDU8Nsyidg))

### Part 2: Re/Code

- Develop a local p5 project on your computer in VS Code, and program your own
  full screen screensaver. (Hmmm... coming full circle to Week 1's preloaders?)
  Further extend one of your modified examples above or combine some?
  - Initialize your p5 project directory as a Git repository.
  - Use our [Git Intro](https://github.com/ellennickles/code-your-way-s24/blob/main/week5/git.md) guide for reference and try:
    - Committing your changes as you develop your sketch.
    - Creating at least one new branch to develop a version with a new
      feature  
    - Switching back and forth between branches
    - Merging one branch into another
    - NOTE: As you work on your project in VS Code, saving changes there will
      not be automatically added to your Git repository. To "save" changes to
      your Git repository, it's a two-step process in the terminal of (1) staging (adding) your
      modified files and then (2) committing them.
- Possible inspiration
  - Featured artists in the Class Slides
  - Classic Windows screensavers that do not use parametric equations but are
    adjacent to this week's creative
    theme: [Mystify](https://www.youtube.com/watch?v=FPfMkEgi2qI),
    [Bézier](https://www.youtube.com/watch?v=3SEBEh_t5K8), and also
    [Screensaver_XP](https://openprocessing.org/sketch/215642) by kuba
  - John Whitney’s [Catalog](https://www.youtube.com/watch?v=TbV7loKp69s) (1961)
    and [Matrix III](https://www.youtube.com/watch?v=ZrKgyY5aDvA) (1972), as
    well as [An Afternoon with John
    Whitney](https://www.youtube.com/watch?v=cP5Mj6ZvZJc)
  - [Franke’s
    Oscilloscope](https://www.drbillkolomyjec.com/artworks/generative-art-vending-machine/franke-s-oscilloscope)
    Be sure to click _Generate_ for new examples! See description for how to
    start with a pair of parametric equations.
  - [Parametric
    Equations](https://p5js.org/examples/math-parametric-equations.html) example
    in the p5 Reference
  - [Coding Train Coding Challenge #12 — The Lorenz
    Attractor](https://thecodingtrain.com/challenges/12-lorenz-attractor) in
    Processing
  - [Peter de Jong Attractors](http://paulbourke.net/fractals/peterdejong/)
    (1989) written by Paul Bourke (images updated 2014)
  - [Visualize:
    SUPERFORMULA](http://formandcode.com/code-examples/visualize-superformula)
    in _Form+Code in Design, Art, and Architecture_
  - The [PATHS](https://exchange.art/semuspace/nfts) series by @semuspace, "an
    art project inspired by the image produced by a
    [Harmonograph](https://en.wikipedia.org/wiki/Harmonograph), a mechanical
    device that employs a pendulum to generate images"

### Part 3: Document

- Write a blog post. Copy and paste any code from VS Code into the p5 web
  editor, so you can link to your sketches in your documentation. I know, I know
  this is getting super redundant, but it's still the easiest way to share.
- Reflect on the discoveries and challenges you encountered with the code
  exercises **and also with your new workflow using the command line interface
  and Git**. Where did you get stuck, and what steps did you take troubleshoot?
  What would you like to explore and practice more?
- [Submit here](https://forms.gle/ec4VxRgt8CtAjDGU7)

### Part 4: Prepare for next week's class

- Create a [GitHub
  account](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home)
  if you don't already have one.
- Sign up for the [GitHub Student Developer
  Pack](https://education.github.com/pack) to get free benefits.
