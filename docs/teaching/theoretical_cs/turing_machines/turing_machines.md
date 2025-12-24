---
layout: lesson_page
permalink: /teaching/theoretical_cs/turing_machines
lesson_name: Turing Machines
order: 18
---

This section will be about Deterministic Infinite Tape (DIT) Turing Machines (TMs). TMs are **the most expressive** models of computation. By most expressive we mean that whatever additional feature you give to a TM (e.g., multiple tapes, non-determinism, **quantum**), it will accept exactly the same set of languages as the TM you started with. It's this expressive power that makes TMs the theoretical equivalent of the modern-day computer.

<h4>What's a Deterministic Infinite Tape Turing Machine?</h4>

<iframe width="560" height="315" src="https://www.youtube.com/embed/1Qe_82baSF8?si=sPVDlfGL2fI4AfCL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<h4>An example TM</h4>

To get more familiar with DIT TMs, we will study the strings that cause a particular TM to accept, reject and **loop**. Note that none of the previous theoretical models of computation we saw could get "stuck" in an infinite loop.

<iframe width="560" height="315" src="https://www.youtube.com/embed/U1j3UIz3U78?si=zjpZ7QcBGewd6Suk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<h4>Designing a TM which accepts a language</h4>

In this video, I show the standard approach to designing a TM which accepts a given language. More exercises at the end of this page!

<iframe width="560" height="315" src="https://www.youtube.com/embed/SPLaN4uvWg0?si=Ge5Tl3Gq1Lya_t-G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<h4>Designing a TM which computes a function</h4>

The other thing that is different between TMs and the previous models of computations we've seen is that we can use TMs to *compute* functions. We say that a function is **computable** if there exists a TM which computes it (produces the correct output for the corresponding input in finite time).[^1]

<iframe width="560" height="315" src="https://www.youtube.com/embed/PNFkzJtCE_M?si=ZQz5f8fxwybK-39h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Exercises

{% include_relative exercise1.html %}

{% include_relative exercise2.html %}

{% include_relative exercise4.html %}

{% include_relative exercise3.html %}

{% include_relative exercise5.html %}

[^1]: Really this is the definition of a **total** computable function, but I will not get into that here.