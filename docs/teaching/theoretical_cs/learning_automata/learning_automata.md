---
layout: lesson_page
permalink: teaching/theoretical_cs/learning_automata
lesson_name: Learning Automata and the L* Algorithm
order: 10
---

This section will be about learning automata and the $$L^*$$ algorithm. The algorithm was first described in this [1987 paper](https://www.sciencedirect.com/science/article/pii/0890540187900526). You can find the notes I use to discuss it [here](learning_automata_notes.pdf) and the formal description of the algorithm [here](Lstar_algorithm.pdf).

<h4>What are learning automata?</h4>

In this video, I describe at a high-level the idea of learning automata and __why__ they might intuitively be useful.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ShbLgE7cZgE?si=iPW_WCFLH9seabDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<h4>Introducing the active learning problem tackled by the \(L^*\) algorithm</h4>

Now that we're a bit more convinced that studying learning automata is worthwhile, I describe problem setup (i.e., the input and expected output) of the \(L^*\) algorithm.

<iframe width="560" height="315" src="https://www.youtube.com/embed/e2nmosh6gCI?si=v1V0Kb2-1dEVUcd5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<h4>The \(L^*\) observation table</h4>

In this video, I give a lower-level description of the \(L^*\) algorithm by describing how it uses its main data structure, the observation table, to create a candidate DFA for the teacher. I also describe the **closed** and **consistent** conditions necessary to ensure that an observation table can actually be converted to a DFA.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ggEnDPM9m3A?si=Z1iDkp2ylw2rkPqD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<h4>Running through an example of the \(L^*\) algorithm</h4>

Grab some paper and a pen as, in this video, we'll be going through an example run of the \(L^*\) algorithm. We will start with some seed data: \(\varepsilon \in L, a, b \notin L\) and we will expand the observation table and seek validation from the teacher oracle.


<iframe width="560" height="315" src="https://www.youtube.com/embed/TFq8LEniCHE?si=W8poQdV_BIlbcdU0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>