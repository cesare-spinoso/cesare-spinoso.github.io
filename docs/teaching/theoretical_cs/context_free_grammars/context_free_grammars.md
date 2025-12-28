---
layout: lesson_page
permalink: /teaching/theoretical_cs/context_free_grammars
lesson_name: Context-Free Grammars (CFGs) and Context-Free Languages (CFLs)
order: 11
---

This section will be about context-free grammars and languages. It will also feature the notion of ambiguous context-free grammars. I will present the definition of context-free grammars and languages. I will also discuss what it means for them to be ambiguous. Lots of exercises about creating CFGs to generate languages can be found at the end of this section. You can find some notes related to this section [here](context_free_grammars.pdf). Please note that I don't follow these notes as closely as previous sections, but you might still want to refer to them as an extra resource.

<h3>What is a context-free grammar?</h3>

So far we have seen that FAs accept or recognize languages and that regular expressions denote or describe them. What about generation? Is there a mechanism that generates strings, rather than accepting them? Yes, absolutely! These objects are known as grammars and I introduce a special type of grammar, *context-free grammars*, in the next video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/dpwR8Ij3AWU?si=EAi4s0tW9rk8ysXm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<h3>Derivation order and ambiguity</h3>

You might have noticed that there are grammars $$G$$ that can generate the same string $$w$$ in multiple different ways. This notion of having multiple ways of generating strings is formalized by introducing the concepts of derivation order and ambiguity. Another closely related concept is that of parse trees.

<iframe width="560" height="315" src="https://www.youtube.com/embed/OI6izfQFrJY?si=W95UznvRmglMnNZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<h3>Inherently ambiguous languages</h3>

Ambiguity is a property of **grammars** because, in many cases, it's possible to disambiguate a grammar by eliminating its alternate paths to generating the same string. Is this always possible? No! In some cases, it's the **languages** which are inherently ambiguous, i.e. regardless of what context-free grammar $$G$$ we create to generate $$L$$, $$G$$ will be ambiguous. More in the following video!

<iframe width="560" height="315" src="https://www.youtube.com/embed/afs2UiWE0Z8?si=4rHSGfxhWKJr03jN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<h3>Exercises</h3>

{% include_relative exercise3.html %}

{% include_relative exercise1.html %}

{% include_relative exercise2.html %}

{% include_relative exercise9.html %}

{% include_relative exercise4.html %}

{% include_relative exercise5.html %}

{% include_relative exercise6.html %}

{% include_relative exercise7.html %}
