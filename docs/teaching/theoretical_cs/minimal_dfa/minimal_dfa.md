---
layout: lesson_page
permalink: /teaching/theoretical_cs/minimal_dfa
lesson_name: Minimal DFA
order: 8
---

<!-- This section is to be redone, with a proof of correctness video -->

This section will be about minimal DFAs. You will see what it means for a DFA to be minimal and how to convert a DFA to its minimal equivalent. You can find the notes related to this section [here](minimal_dfa.pdf).

<h4>Minimal DFAs and the minimization algorithm</h4>

<iframe width="560" height="315" src="https://www.youtube.com/embed/h5VL6FuXS58" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

A DFA is minimal in the sense that no other DFA with a smaller **number of states** exists that accepts the same language. Every regular language has at least one minimal DFA! This can be shown by construction. First, we create an algorithm that minimizes any DFA. If we can prove that this algorithm is correct, then clearly a minimal DFA exists for every regular language: simply create *any* DFA that accepts it and then reduce it with this algorithm.

<iframe width="560" height="315" src="https://www.youtube.com/embed/C4K1o8cWfc4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

We will see that, thanks to the Myhill-Nerode Theorem, any minimal DFA produced by the state reduction algorithm will be unique (up to relabeling the states).

<h4>Using the algorithm</h4>

Are you confused? I don't blame you! I was confused the first time I saw the minimization algorithm. The way that I was able to understand the algorithm was by running it over a few DFAs. That's what I do in the next video!

<iframe width="560" height="315" src="https://www.youtube.com/embed/9hFa2wY77D8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<h4>Exercises</h4>

<!-- This video has a mistake in it, needs to be corrected -->

{% include_relative exercise_6states.html %}

{% include_relative exercise_minimal_nfa.html %}

<!-- Include T/F about minimality and identify of languages -->