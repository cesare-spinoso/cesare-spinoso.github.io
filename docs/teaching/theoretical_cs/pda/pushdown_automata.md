---
layout: lesson_page
permalink: /teaching/theoretical_cs/pushdown_automata
lesson_name: Pushdown Automata (PDA)
order: 14
---

<!-- Definition of PDAs, Examples  -->

<!-- Slides for this section can be found [here](pushdown_automata.pdf). -->

In this section, we will be discussing pushdown automata (PDA), which are the automata equivalent (in expressive power) to context-free grammars. PDA are similar in nature to NFA+$$\varepsilon$$ except that they are equipped with an additional data structure: a stack. I will first give some general intuitions about how PDA work. The rest of the section will be examples and exercises about creating PDA which recognize context-free languages. Note that, technically speaking, this is a presention of **N**PDA: **non-deterministic** pushdown automata. Deterministic pushdown automta are not covered in this section.

# What are pushdown automata? 

In this video, I present the high-level intuitions of PDA. This video is taken from a recording of a lecture that I gave in Fall 2024.

<iframe width="560" height="315" src="https://www.youtube.com/embed/NGYmQ1f-IcQ?si=zMBO9ZPM6ZEKOnwx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# Designing a PDA that recognizes a language

In this this video, I present the more "nitty-gritty" details of PDA by describing how to design one that accepts the (infamously non-regular) language $$\{a^nb^n : n \geq 0\}$$. Note that in this video I am assuming that the bottom-of-the-stack marker is the dollar sign, i.e. `$`, and that it has already been placed at the stack's bottom.

<iframe width="560" height="315" src="https://www.youtube.com/embed/t983Sg9faXI?si=osgA7ialqGvEV9wo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!-- A nice question: Show that N-deep-stack (where can look N into the stack) PDA is equivalent to a 1-deep-stack. -->

### Exercises

{% include_relative exercise1.html %}

{% include_relative exercise2.html %}

{% include_relative exercise3.html %}

{% include_relative exercise4.html %}
