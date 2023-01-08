---
layout: lesson_page
permalink: /teaching/theoretical_cs/closure_properties_reg
lesson_name: Closure Properties of Regular Languages
order: 5
---

This section will be about closure properties of regular languages i.e., understanding under which operations regular languages are closed. You can find the notes related to this section [here](closure_properties_reg.pdf).

<h4>What do we mean by closure properties of regular languages?</h4>

What do I actually mean by closure properties of regular languages? If I have a regular language $$L$$ and apply some operation $$\texttt{op}$$ to it, how can I prove that $$\texttt{op}(L)$$ remains regular (if this is actually true)? What about for binary operations like the union and the concatenation? Do these language operations *always* preserve regularity or are there cases for which taking the union of two regular languages can create a non-regular language (it's OK if you don't know what a non-regular language looks like at this point). The "preservation of regularity" is what I mean by closure properties which I discuss in the following video. I also present the general motivation of closure properties and how to prove that regular languages are closed under certain operations.

<h4>Examples of closure property proofs</h4>

There are some "classic" closure property proofs that I am "obligated" to discuss here for completeness. I start by giving an in-depth proof for the union operation and slowly convert most of the proofs to sketches for simplicity.

- Regular languages are closed under the union.

- Regular languages are closed under language concatenation.

- Regular languages are closed under the $$L^*$$ operation.

- Regular languages are closed under the complement.

Closure property proofs may at first seem more difficult than simply creating DFAs or NFAs to accept languages. That's probably because they are! But they are also a lot more fun once you get the hang of general flow of the proof. See the exercises for additional practice.

<h4>Using closure properties to prove that languages are regular</h4>

If you recognize that a language $$L$$ consists of sub-languages which are combined together via language operations (e.g. the union, intersection), then closure properties tell us that if each of these sub-languages are regular that $$L$$ is also regular. Therefore, there may be situations where direct complicated proofs (constructing a DFA or an NFA) can be substituted with the use of closure properties. More in the next video.



### Exercises

{% include_relative exercise1.html %}

{% include_relative exercise2.html %}

{% include_relative exercise7.html %}

{% include_relative exercise3.html %}

{% include_relative exercise4.html %}

{% include_relative exercise5.html %}

{% include_relative exercise6.html %}

{% include_relative exercise_adiffb.html %}