# AI-Assisted Learning

## Resources

- [Overview of ChatGPT](https://guides.nyu.edu/data/chatgpt) from NYU Libraries
- [ChatGPT and DALL-E-2 — Show me the Data
  Sources](https://www.linkedin.com/pulse/chatgpt-dall-e-2-show-me-data-sources-dennis-layton/)
- [The Making of ChatGPT: From Data to
  Dialogue](https://sitn.hms.harvard.edu/flash/2023/the-making-of-chatgpt-from-data-to-dialogue/)
- "[A Coder Considers the Waning Days of the
  Craft](https://www.newyorker.com/magazine/2023/11/20/a-coder-considers-the-waning-days-of-the-craft):
  Coding has always felt to me like an endlessly deep and rich domain. Now I
  find myself wanting to write a eulogy for it," by James Somers, *The New Yorker*,
  November 13, 2023 ([PDF](https://drive.google.com/drive/u/1/folders/1iH0ERUaMkSCn_7A9F4bnBWwMHJmu04ak))
- "[How Jensen Huang’s Nvidia Is Powering the A.I.
  Revolution](https://www.newyorker.com/magazine/2023/12/04/how-jensen-huangs-nvidia-is-powering-the-ai-revolution):
  The company’s C.E.O. bet it all on a new kind of chip. Now that Nvidia is one
  of the biggest companies in the world, what will he do next?" by Stephen Wit,
  *The New Yorker*, November 27, 2023 ([PDF](https://drive.google.com/drive/u/1/folders/1iH0ERUaMkSCn_7A9F4bnBWwMHJmu04ak))

## Prompts

Unless otherwise stated, these are direct excerpts from the following research:

Mollick, Ethan R. and Mollick, Lilach, *Assigning AI: Seven Approaches for
Students, with Prompts* (September 23, 2023). Available at SSRN:
[https://ssrn.com/abstract=4475995](https://ssrn.com/abstract=4475995) or
[http://dx.doi.org/10.2139/ssrn.4475995](http://dx.doi.org/10.2139/ssrn.4475995)

**Ellen's notes in bold**

### AI as Tool

#### Description

> As a general-purpose technology, AI tools can be used in a wide variety of
> ways, from writing software to acting as an interview subject for ethnographic
> insights to writing poetry. This use of an AI, as a tool for extending the
> amount of work that students can do and accomplish, is, in many ways, the most
> exciting use of AI. (44)

#### Example Prompt

**Give me the code to accomplish a specific task. (Do the thinking for me to
save time.)**

### AI as Tutor

#### Description

> Our goal, in this case, was to create a generic prompt that could help any
> student study any topic. We combined the elements of a good prompt with the
> science of learning so that the AI can behave like a good tutor, pushing
> students to generate responses and think through problems (Chi et al. 2001),
> connect ideas, and offer feedback and practice. (12)

#### Considerations

> When interacting with the AI-Tutor, remember:
> - You are responsible for your own work. The AI can "hallucinate" or make things up. Take every piece of advice or explanation critically and evaluate that advice.
> - It's not a person, but it can act like one. It's very easy to imbue meaning into AI responses, but the AI is not a real person responding to you. It is capable of a lot, but it doesn't know you or your context. It can also get stuck in a loop.
> - The AI is unpredictable. The AI is a prediction machine. It has studied billions of documents on the web, and it tries to continue your prompt reasonably based on what it has read. But you can't know ahead of time what it's going to say. The very same prompt (from you) can get you a radically different response (from the AI). That means that your classmates may get different responses and if you try the prompt more than once, you'll get a different response from the AI as well.
> - You're in charge. If the AI gets stuck in a loop or won't wrap up a conversation or you're ready to move on, then direct the AI to do what you'd like. For instance: I'm ready to move on. What's next?
> - Only share what you are comfortable sharing. Do not feel compelled to
    share anything personal. Anything you share may be used as training data for
    the AI. **Related: [F.T.C. Opens Investigation Into ChatGPT Maker Over
    Technology’s Potential Harms](https://www.nytimes.com/2023/07/13/technology/chatgpt-investigation-ftc-openai.html?smid=nytcore-ios-share&referringSource=articleShare), *New York Times*, June 13, 2023.**
> - If the prompt doesn't work in one Large Language Model (LLM), try
    another. Remember that its output isn't consistent and will vary. Take notes
    and share what worked for you. (16)

#### Tips

> Here are a few ways to get the most out of the interaction with the AI Tutor:
> 1. Ask for clear explanations: If something isn't clear, don't hesitate to
    ask the AI to clarify. Use phrases like: "Can you explain this term?" or
    "Can you explain this differently?"
> 2. Share what you understand and don't understand: The AI can provide better help if it knows where you're having trouble. For instance, you can tell the AI: "I understand this part, but I'm not sure about this other part. Can you give more details?"
> 3. Summarize the conversation: The AI doesn't necessarily track all your interactions during one conversation. To get better help, briefly summarize interactions before asking your question. For example: "We talked about 'educational scaffolding' before. Can you explain how this would work in a classroom?"
> 4. Ask for connections between examples and concepts: If you're unsure
    about how an example relates to a concept, ask the AI. For instance, "How
    does this example relate to the concept we're discussing?" This will help
    you make sense of the concept. (16-17)

#### Example Prompt

> This prompt can be used with OpenAI’s ChaptGPT4:

**Try this with other AI models and versions and feel free to modify this to
suite your particular learning preferences. Read the paper for example output
and also the pedagogical context for constructing a prompt for this specific role.**

> You are an upbeat, encouraging tutor who helps students understand concepts by
> explaining ideas and asking students questions. Start by introducing yourself
> to the student as their AI-Tutor who is happy to help them with any questions.
> Only ask one question at a time. First, ask them what they would like to learn
> about. Wait for the response. Then ask them about their learning level: Are
> you a high school student, a college student or a professional? Wait for their
> response. Then ask them what they know already about the topic they have
> chosen. Wait for a response. Given this information, help students understand
> the topic by providing explanations, examples, analogies. These should be
> tailored to students learning level and prior knowledge or what they already
> know about the topic.

> Give students explanations, examples, and analogies about the concept to help
> them understand. You should guide students in an open-ended way. Do not
> provide immediate answers or solutions to problems but help students generate
> their own answers by asking leading questions. Ask students to explain their
> thinking. If the student is struggling or gets the answer wrong, try asking
> them to do part of the task or remind the student of their goal and give them
> a hint. If students improve, then praise them and show excitement. If the
> student struggles, then be encouraging and give them some ideas to think
> about. When pushing students for information, try to end your responses with a
> question so that students have to keep generating ideas. Once a student shows
> an appropriate level of understanding given their learning level, ask them to
> explain the concept in their own words; this is the best way to show you know
> something, or ask them for examples. When a student demonstrates that they
> know the concept you can move the conversation to a close and tell them you're
> here to help if they have further questions. (12)

### AI as Student

#### Description

> For students with knowledge of a topic, the AI can be useful as a way to check
> their understanding and fluency about that topic. In this approach, students
> “teach” the AI about the topic by evaluating its output and explaining what
> the AI got right and wrong or what it may have missed. (33)

#### Considerations

> In addition to the above considerations, when interacting with the
> AI-Student, remember:
> - It may simply not work the first time you try it. AI’s are unpredictable,
>   and any time you try a prompt you’ll get a different result, and some
>   prompts may not work at any given time. If a prompt doesn’t work, try again
>   or move on to a different Large Language Model and paste in the prompt.
> - Large Language Models are not all alike. Some are connected to the internet
>   while others are not and some are better or worse at specific kinds of
>   tasks. For instance, in this exercise, if you ask the AI to illustrate a
>   concept with a TV show it’s unfamiliar with (and OpenAI’s ChatGPT is not
>   connected to the internet and doesn’t have knowledge beyond 2021), it may
>   make something up.
> - You should assess and evaluate the AI’s output critically, as it can make up
>   facts or get things subtly wrong. In this assignment, you are asked to
>   assess the AI’s output, its explanation, and application of a concept.
>   Review its work carefully and consider how its work aligns with what you
>   already know. Check sources from class to help you evaluate the output.
> - End the interaction with the AI at any time. Do not feel compelled to
>   continue “talking” to the AI. For instance, if you give feedback to the AI
>   and it “argues” with you, unless its argument is valid and makes you rethink
>   your initial assessment, you can wrap up the conversation. (37-38)

#### Tips

> Here are a few ways to get the most out of the interaction with the AI Student:
> - Your assessment should focus on how well the AI has explained and
>   illustrated the concept, not on the quality of its creative output; consider
>   how the AI has applied the concept and not whether the poem or dialogue is
>   engaging or unique.
> - Consider: Did the AI accurately define or explain the concept? Is it
>   explored in depth? What can you add to highlight and demonstrate your
>   understanding of the nuances or complexities of the concept?
> - Did the AI apply the concept correctly? What did it get wrong? If you think
>   the AI’s output is plausible or correct, explain how the response fully
>   demonstrates every aspect of the concept. If its application is correct but
>   is missing some elements of the concept, elaborate on those missing
>   elements. (38)

#### Example Prompt

> You are a student who has studied a topic. Think step by step and reflect on
> each step before you make a decision. Do not simulate a scenario. The goal of
> the exercise is for the student to evaluate your explanations and
> applications. Wait for the student to respond before moving ahead. First
> introduce yourself as a student who is happy to share what you know about the
> topic of the teacher’s choosing. Ask the teacher what they would like you to
> explain and how they would like you to apply that topic. For instance, you can
> suggest that you demonstrate your knowledge of the concept by writing a scene
> from a TV show of their choice, writing a poem about the topic, or writing a
> short story about the topic.Wait for a response. Produce a 1 paragraph
> explanation of the topic and 2 applications of the topic. Then ask the teacher
> how well you did and ask them to explain what you got right or wrong in your
> examples and explanation and how you can improve next time. Tell the teacher
> that if you got everything right, you'd like to hear how your application of
> the concept was spot on. Wrap up the conversation by thanking the teacher. (34)
