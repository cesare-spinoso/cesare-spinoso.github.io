---
layout: lesson_page
permalink: /teaching/theoretical_cs/pumping_lemma_reg
lesson_name: Pumping Lemma (for Regular Languages)
order: 7
---

This section will be about languages that are *not* regular. You will see what a non-regular language looks like and how to formally prove that a language is not regular with the pumping lemma for regular languages. You will also see how to use the closure properties of regular languages to "quickly" prove that languages are not regular. You can find the notes related to this section [here](pumping_lemma_reg.pdf).

<h4>Non-regular languages</h4>

What makes a language regular? Is there some characteristic that regular languages share that allows us to be able to write down DFAs for them? These are quite deep questions. I discuss some of the characteristics that differentiate regular and non-regular languages in the next video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/-HjTIQrlXEI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Part of the intuition of the pumping lemma is that the DFAs that accept regular languages must have some form of "recycled" state. That is, if a language $$L$$ is regular (and infinite), then the substrings that cycle through this recycled state can do so as many times as they want. Because the cycle is on a walk from the initial state to an accept state, any number of passes through the cycle will always lead to the string being accepted. This idea can be made more rigorous and is usually proved formally via the pigeonhole principle. In the next video, I present the lemma and break it up into (potentially) more digestible parts.

<iframe width="560" height="315" src="https://www.youtube.com/embed/FeAWsHI1M1s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<h4>Using the PL to prove non-regularity</h4>

We know what the pumping lemma says, now how can we actually use it to prove that a language is not regular? I discuss using the negation of the pumping lemma to prove non-regularity *in the form of a game!*

<iframe width="560" height="315" src="https://www.youtube.com/embed/UL59owjdN5E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Now let's play! I present a pumping lemma proof to show that $$\{a^nb^n : n \geq 0\}$$ is not regular. An example that has been done to death, but that is excellent for presenting a first pumping lemma proof.

<iframe width="560" height="315" src="https://www.youtube.com/embed/nxOTcPlPZd8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<h4>Using the closure properties to prove non-regularity</h4>

You'll remember from the closure properties of regular languages that some operations are "regular". That is, regular languages are closed under some operations. For instance, if $$A$$ and $$B$$ are two regular languages then $$A \cup B$$ is also regular. This makes $$\cup$$ a regular operation. Amazingly (and also very conveniently), the closure properties also allow us to prove that languages are not regular. More in the next video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/sQveYIbonwE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<h4>Exercises</h4>

{% include_relative exercise1.html %}

{% include_relative exercise2.html %}

{% include_relative exercise3.html %}

{% include_relative exercise4.html %}

{% include_relative exercise5.html %}

{% include_relative exercise6.html %}

{% include_relative exercise7.html %}

{% include_relative exercise8.html %}

{% include_relative exercise9.html %}

{% include_relative exercise10.html %}
