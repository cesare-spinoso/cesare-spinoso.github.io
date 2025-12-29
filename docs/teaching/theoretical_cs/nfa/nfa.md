---
layout: lesson_page
permalink: /teaching/theoretical_cs/nfa
lesson_name: Nondeterministic Finite Automata (NFA)
order: 4
---

This section will be about Nondeterministic Finite Automata (NFA) and their connection to DFAs. You will see what an NFA is, how to walk through the computation of an NFA, and how NFAs and DFAs are related. You can find the notes related to this section [here](nfa.pdf).

<h4>What's an NFA?</h4>

We've seen what DFAs are. Now, what is are NFAs? NFAs and DFAs share much of the same structure. Where they differ is in the choices that their transition function provides. DFAs are deterministic. This means that for each symbol the machine reads, there is exactly one possible transition it can take. Instead, NFAs *allow* for multiple possible transitions from a state when reading a letter. In fact, its transition function returns a __set__ of states rather than a single state. The other nifty thing about NFAs is that they provide the possibility of $$\lambda$$-transitions. These are "for free" transitions that allow the machine to transition without reading a symbol on the input tape. All of this is described more formally in the next video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/myAaGi0aFAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy" allowfullscreen></iframe>

<h4>How does an NFA work?</h4>

Ok so now you that you have an idea of *what* an NFA is, we'll next see *how* an NFA runs through its computations.

<iframe width="560" height="315" src="https://www.youtube.com/embed/3VRWlbjJDqY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy" allowfullscreen></iframe>


<h4>Building NFAs to accept languages</h4>

We've looked at many examples and exercises where we create a DFA that accepts a given language. We can of course use some of the same ideas for building NFAs. In addition, however, we can also use the convenience of nondeterminism to create much more compact and elegant machines.

<iframe width="560" height="315" src="https://www.youtube.com/embed/j__g34aJ0gA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy" allowfullscreen></iframe>

<h4>NFAs and DFAs</h4>

At this point, you might be thinking "Woah NFAs are pretty cool and this nondeterminism thing makes writing machines a lot easier!". Some of you might even think that NFAs are more *powerful* that DFAs. That is, that NFAs can accept more languages than DFAs. In fact, although very convenient, NFAs and DFAs accept __exactly__ the same set of languages! This has some important implications on regular languages. Namely, if DFAs and NFAs accept the same family of languages, then to prove that a language is regular we can either create a DFA **or** an NFA that accepts it. This surprised me at first because it really seemed like NFAs were doing something "more" than DFAs, but like the next video will show you that is simply not true!

<iframe width="560" height="315" src="https://www.youtube.com/embed/2LlBXMICatA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy" allowfullscreen></iframe>

The above video should have given you the intuition behind how any NFA can be converted to a DFA. In the next video, I formally present the conversion algorithm and walk through an example.

<iframe width="560" height="315" src="https://www.youtube.com/embed/COjimVieDZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy" allowfullscreen></iframe>

<h4>Equivalence between NFAs and DFAs</h4>

We are now equipped with an algorithm that converts any NFA to an equivalent DFA. What does this imply about the computational power of NFAs and DFAs? Does this help us at all in proving that a language is regular? The following video answers these questions and also gives you a high-level idea of what the proof of correctness for the conversion algorithm would look like.

<iframe width="560" height="315" src="https://www.youtube.com/embed/XbwwE6owODo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy" allowfullscreen></iframe>

<h4>Exercises</h4>

{% include_relative exercise1.html %}

{% include_relative exercise3.html %}

{% include_relative exercise4.html %}

{% include_relative exercise2.html %}

{% include_relative exercise5.html %}

{% include_relative exercise6.html %}
