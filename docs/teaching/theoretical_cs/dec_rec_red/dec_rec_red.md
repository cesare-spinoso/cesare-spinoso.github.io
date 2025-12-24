---
layout: lesson_page
permalink: /teaching/theoretical_cs/dec_rec_red
lesson_name: Decidability, Recognizability and Turing Reductions
order: 19
---

Now that we've discussed Turing machines, we're ready to define the notions of (Turing) decidability and recognizability for languages *and decision problems*. We will show that there are problems - such as the **halting problem** - that are undecidable and we will also show how we can use (Turing) **reductions** to show that a problem is undecidable.

<h4>Decidability and recognizability of languages and decision problems </h4>

In this video, I will present the concept of (Turing) decidability and recognizability for languages **and decision problems.** You might be asking yourself: Decision problems, where did that come from? We have actually been dealing with decision problems this whole time! Indeed, there is always a decision problem for a corresponding formal language (and vice-versa). The decision problem $$Q$$ of a language $$L_Q$$ is typically the following: "Given $$x \in \Sigma^*$$, is $$x \in L_Q$$?" While this might seem like a bit of a silly way of talking about a language, we will see that it's a much more natural conceptualization when discussing properties of decidability and recognizability. This and more in the following video!

<iframe width="560" height="315" src="https://www.youtube.com/embed/JLQ_5lorgqU?si=YJvfhpSPdEMHffcS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<h4>The halting problem is undecidable</h4>

In this video, I show you the infamous proof that the halting problem is undecidable. The technique which I use is very similar to Cantor's diagonalization technique used to show that $$\mathbb{R}$$ is uncountable.

```Add HP proof.```

<h4>The undecidability hierarchy and reductions</h4>

In this video, I discuss the undecidability hierarchy and introduce, at a high level, how we can use (Turing) reductions to show that a decision problem is undecidable. A more concrete example is presented in the next video![^1] 

<iframe width="560" height="315" src="https://www.youtube.com/embed/g6_T6BqAVI4?si=3ybvDSUb7d8MaHns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<h4>Using a reduction to show that EXAM2 is harder than EXAM1</h4>

In this final video of this section, I provide a more concrete usage of the reduction proof technique to show that one exam, EXAM2, is harder than another exam, EXAM1. While this doesn't use any decision problems you will encounter in a theoretical CS class, it will provide you with the general blueprint that we will be following to reduce one decision problem to another. More "realistic" reductions can be found in the exercises below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Z4ecnEMZd40?si=9N8LI-8G6KeXTEgl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Exercises

{% include_relative exercise1.html %}

{% include_relative exercise2.html %}

{% include_relative exercise3.html %}

{% include_relative exercise4.html %}

[^1]: I never explicitly say it in these videos, but all the reductions we see in this section fall under the term Turing reductions. **Mapping** reductions, which are a special type of Turing reduction, are not discussed here.