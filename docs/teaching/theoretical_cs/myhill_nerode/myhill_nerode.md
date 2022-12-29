---
layout: lesson_page
permalink: /teaching/theoretical_cs/myhill_nerode
lesson_name: Myhill-Nerode Theorem
order: 8
---

This section will explore the Myhill-Nerode Theorem due to John Myhill and Anil Nerode who proved this result in 1958 ([link to paper](https://www.ams.org/journals/proc/1958-009-04/S0002-9939-1958-0135681-9/)). It provides a necessary and sufficient condition for a language $$L$$ to be regular. As we will see, it can be used to prove that a language is regular or not regular which none of the techniques we've seen so far allow us to do. Furthermore, the M-N theorem can be used to prove the uniqueness of minimal DFAs. That is, we can use the M-N theorem to prove that the DFA $$M'$$ that results from the minimization algorithm is the unique minimal DFA that accepts the language $$L(M')$$. (This was something I claimed in a previous section without proof.) 

The videos in this section might "feel" somewhat different. This is because I prepared these for a guest lecture that I delivered at McGill University for the Theory of Computation class during the Fall 2022 semester. The class was taught by the exceptional [Prakash Panangaden](https://www.cs.mcgill.ca/~prakash/) to whom I will be forever grateful for having given me this opportunity. You can get the notes for these videos [here](myhill_nerode.pdf).

<h3>Mathematical Preliminaries</h3>

In this first video, I review some important notions needed to understand the M-N theorem and I also introduce 2 important equivalence classes that will be needed to state and prove the theorem. Important note: In this set of videos, I use $$\epsilon$$ to mean the empty string, but this is equivalent to using $$\lambda$$.

<iframe width="560" height="315" src="https://www.youtube.com/embed/gfiSSNOZ71k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<h3>The Myhill-Nerode Theorem</h3>

Now that I've presented the required definitions, I present the Myhill-Nerode Theorem and explain what it is saying.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZykNR_5t-U0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<h3>Proving the Myhill-Nerode Theorem</h3>

The M-N theorem claims that three things (statements $$(1)$$, $$(2)$$ and $$(3)$$) are equivalent. To prove this, I go in a cyclic fashion from $$(1) \implies (2)$$ to $$(2) \implies (3)$$ to $$(3) \implies (1)$$.

<h4>$$(1) \implies (2)$$</h4>

<iframe width="560" height="315" src="https://www.youtube.com/embed/lWf7Vct0zks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<h4>$$(2) \implies (3)$$</h4>

<iframe width="560" height="315" src="https://www.youtube.com/embed/ntwiNVk5Jns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<h4>$$(3) \implies (1)$$</h4>

<iframe width="560" height="315" src="https://www.youtube.com/embed/VHxBmAusMIk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

And we're done! This proves the M-N theorem, now how can we actually use it?

<h3>Using the Myhill-Nerode Theorem to show that a language is not regular</h3>

<iframe width="560" height="315" src="https://www.youtube.com/embed/EnOTNuY6YHw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<h3>Proving uniqueness of minimal DFAs</h3>

Using the M-N theorem to prove non-regularity when the pumping lemma can't is a pretty interesting result. However, even more interesting is what M-N tells us about minimal DFAs. When you run the minimization algorithm ([presented previously](../minimal_dfa)), is it possible to generate multiple different minimal DFAs? That is, if you run the minimization algorithm on all the DFAs that accept some regular language $$L$$, will you **always** get the same minimal DFA? Surprisingly (or not), the answer is "Yes!". We can use the statement in M-N to prove this indirectly. We do this by showing that for any regular language $$L$$ the DFA we constructed in the proof from $$(3) \implies (1)$$ (i.e. the DFA with state size equal to the index of $$\equiv_L$$) is the unique minimal DFA that accepts $$L$$. Therefore, if we use the minimization algorithm (whose correctness we can prove), it will land on this same minimal DFA.

<iframe width="560" height="315" src="https://www.youtube.com/embed/7E7pCcK1wy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Exercises

{% include_relative exercise_provenopl.html %}

{% include_relative exercise_provenotreg.html %}

{% include_relative exercise_provereg.html %}

{% include_relative exercise_eqalgo.html %}
