# Week 2 • Debugging / Unpredictability

## References

- [Class
  Slides](https://drive.google.com/drive/folders/1iH0ERUaMkSCn_7A9F4bnBWwMHJmu04ak?usp=sharing)
- [In-class code tracing
  example](https://editor.p5js.org/enickles/sketches/BYxH62qMr)
- [A Brief Introduction to Debugging Parts
  1-4](https://vimeo.com/channels/debugging) (p5 is not mentioned, but these
  strategies are universal for all programming languages) ~15min
- p5 Tutorial: [A Field Guide to
  Debugging](https://p5js.org/learn/debugging.html)
- [Rubber Duck Debugging: Debugging software with a rubber
  ducky](https://rubberduckdebugging.com/)
- [Happy Coding Debugging p5.js
  Tutorial](https://happycoding.io/tutorials/p5js/debugging)
- “Topic 20: Debugging,” [The Pragmatic Programmer, 2nd
  Edition](https://bobcat.library.nyu.edu/primo-explore/fulldisplay?docid=nyu_aleph006843771&context=L&vid=NYU&lang=en_US&search_scope=all&adaptor=Local%20Search%20Engine&tab=all&query=any,contains,pragmatic%20programmer&sortby=rank&mode=basic),
  by David Thomas and Andrew Hunt (NYU Library online access)
- “Chapter 23: Debugging,” [Code Complete, 2nd
  Edition](https://bobcat.library.nyu.edu/primo-explore/fulldisplay?docid=nyu_aleph005835845&context=L&vid=NYU&lang=en_US&search_scope=all&adaptor=Local%20Search%20Engine&isFrbr=true&tab=all&query=any,contains,code%20complete&sortby=date&facet=frbrgroupid,include,1147872474&offset=0),
  by Steve McConnell (NYU Library online access)
- [Frieder Nake: The Beginnings of Digital Art](https://vimeo.com/645548103)
  ~7min

## Assignment

### Part 1: Decode

Use the [Decode process](https://github.com/ellennickles/code-your-way-s24/blob/main/decode.md) to practice reading and analyzing code before running it to predict the outcome.

- [Decode
  1](https://github.com/ellennickles/code-your-way-s24/blob/main/week2/decode1.js)
- [Decode
  2](https://github.com/ellennickles/code-your-way-s24/blob/main/week2/decode2.js)
- [Decode
  3](https://github.com/ellennickles/code-your-way-s24/blob/main/week2/decode3.js)
- [Decode
  4](https://github.com/ellennickles/code-your-way-s24/blob/main/week2/decode4.js)

Watch [Coding Train videos
I.2-I.4](https://www.youtube.com/watch?v=Qf4dIN99e2w&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD)
on the difference between `random()` and `noise()` ([related
code](https://editor.p5js.org/codingtrain/collections/qTyT_RX11)), and then:

- [Decode
  5](https://github.com/ellennickles/code-your-way-s24/blob/main/week2/decode5.js)

#### Resources

- **TL;DW**
  - Did you know that the [`random()`](https://p5js.org/reference/#/p5/random)
    function in p5.js does not produce pure random numbers? Instead, it
    generates what’s known as “pseudo-random” numbers. Every number within a
    given range has an equal probability of being generated, also known as
    uniform distribution of numbers
    ([example](https://editor.p5js.org/enickles/sketches/dC50tsWAF)).
  - Each time a p5.js sketch with the `random()` function starts, it produces a
    different outcome. In other words, a different pseudo-random number is
    generated. However, if you want to produce the same results (because maybe
    you prefer the visual output), then you can “seed” the number generator with
    a fixed value. To see this in action, edit the
    [`randomSeed()`](https://p5js.org/reference/#/p5/randomSeed) example on the
    p5.js Reference.
  - The [`noise()`](https://p5js.org/reference/#/p5/noise) function is also a
    random number generator, but it produces a more “smooth and organic”
    sequence of pseudo-random numbers
    ([example](https://editor.p5js.org/enickles/sketches/HvjK-H9sw)) compared to
    the `random()` function. There is also a corresponding
    [`noiseSeed()`](https://p5js.org/reference/#/p5/noiseSeed) function.
  - More illustrative? [Three different lines: straight, `random()`,
    `noise()`](https://editor.p5js.org/enickles/sketches/8zBZe9DuZ)
  - If you prefer to read, Daniel Shiffman explains this along with some
    alternative options to non-uniform and custom distributions of numbers in
    the [Introduction to the Nature of
    Code](https://drive.google.com/file/d/1G_16tPKByN9ya6l2Ws58X-OJK1yex9IX/view)
    (v2.0 draft edition).
- [Perlin Noise with p5.js](http://genekogan.com/code/p5js-perlin-noise/) by
  Gene Kogan
- [RANDOM.ORG: Introduction to Randomness and Random
  Numbers](https://www.random.org/randomness/) on “why it's hard (and
  interesting) to get a computer to generate proper random numbers.”
- [Coding Train videos on conditional
  statements](https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/3-conditionals/1-conditionals)
- [Coding Train videos on while and for
  loops](https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/4-loops/1-while-for)

### Part 2: Ask AI

Follow up on one of your code questions from this week or last week using the
[AI
Tutor](https://github.com/ellennickles/code-your-way-s24/blob/main/ai-assisted-learning.md#ai-as-tutor)
prompt. Describe how the interaction went for you. Did you gain any insights?
Can you evaluate the tool's effectiveness and accuracy? Describe the
specific examples it provided, and identify any areas where your understanding
might still be lacking. Be sure to save the conversation for your documentation.

### Part 3: Re/Code

- This assignment introduces unpredictability into our programs by
  coding procedural drawing rule sets with random functions. Invent your own
  rules and create a system that as Tyler Hobbs mentions in his talk, [Code goes
  in, Art comes out](https://www.youtube.com/watch?v=LBpqoj2nOQo), “balance[s]
  randomness and structure so the outcome is unpredictable and surprising but
  [has] a type of order that we still understand.” Challenge yourself to create
  something that is distinctive from the examples.
- Can you combine aspects from the above exercises for an unexpected design? Can
  you apply unpredictability using `random()` or `noise()` (or both!) to color
  (stroke, fill), size, stroke weight, rotation, using different types of
  [shapes or curves](https://p5js.org/reference/#group-Shape), vertices of
  [custom shapes](https://p5js.org/reference/#/p5/vertex), position, speed,
  etc.? Can you animate your sketch or make  responsive/interactive? What
  functions and techniques can you continue to practice from the previous week’s exercises?
- If it helps, make a plan before you start (pseudocode).
- Possible inspiration
  - Featured artists in the Class Slides
  - [Tips to Improve your Generative
    Artwork](https://tylerxhobbs.com/essays/2018/tips-to-improve-your-generative-artwork)
    and [Working with Color in Generative
    Art](https://tylerxhobbs.com/essays/2016/working-with-color-in-generative-art)
    by Tyler Hobbs

### Part 4: Document

- Write a blog post. Link to your sketches from Parts 1 and 3 and the output
  from Part 2.
- Same as last week: reflect on the discoveries and challenges you encountered
  during the exercises. What graphic or animation effects are most pleasing to
  you? Where did you get stuck, and what steps did you take to troubleshoot?
  What code-related techniques would you like to explore and practice more?
- [Submit here](https://forms.gle/ec4VxRgt8CtAjDGU7)
