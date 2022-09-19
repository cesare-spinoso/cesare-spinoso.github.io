---
layout: lesson_page
permalink: /teaching/theoretical_cs/nfa
lesson_name: Non-Deterministic Finite Automata (NFA)
order: 5
---

This section will be about Non-Deterministic Finite Automata (NFA) and their connection to DFAs. You will see what an NFA is, how to walk through the computation of an NFA, and how NFAs and DFAs are related. You can find the notes related to this section [here](nfa.pdf).

<h4>What's an NFA?</h4>

We've seen what DFAs are. Now, what the heck is an NFA!? NFAs and DFAs share much of the same structure. Where they differ is in the choices that their transition function provides. DFAs are deterministic. This means that for each symbol the machine reads, there is exactly one possible transition it can take. Instead, NFAs *allow* for multiple possible transitions from a state when reading a symbol. In fact, its transition function returns a __set__ of states rather than a single state. The other nifty thing about NFAs is that they provide the possible of add $$\lambda$$-transitions. These are "for free" transitions that allow the machine to transition without reading a symbol on the input tape. All of this is described more formally in the next video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/gAd36FPq1Ow" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<h4>Examples of NFAs</h4>

Ok so now you that you have an idea of *what* an NFA is, we'll next see *how* an NFA runs through its computations.

<iframe width="560" height="315" src="https://www.youtube.com/embed/dlyZlFbigxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<h4>NFAs and DFAs</h4>

At this point, you might be thinking "Woah NFAs are pretty cool and this non-determinism thing makes writing machines a lot easier!". Some of you might even think that NFAs are more *powerful* that DFAs. That is, that NFAs can accept more languages than DFAs. In fact, although very convenient, NFAs and DFAs accept __exactly__ the same set of languages! This has some important implications on regular languages. Namely, if DFAs and NFAs accept the same family of languages, then to prove that a language is regular we can either create a DFA **or** an NFA that accepts it. This surprised me at first because it really seemed like NFAs were doing something "more" than DFAs, but like the next video will show that is simply not true!

<iframe width="560" height="315" src="https://www.youtube.com/embed/kCI5_Sb7y5o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<h4>Exercises</h4>

{% include_relative exercise1.html %}

{% include_relative exercise2.html %}
