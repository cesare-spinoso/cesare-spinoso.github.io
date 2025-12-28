---
layout: lesson_page
permalink: /teaching/theoretical_cs/grammar_normal_forms
lesson_name: Normal Forms of CFGs
order: 12
---

This section will be about context-free grammar simplification and normal forms. I will present all the steps necessary to simplify a grammar. I will then discuss the important Chomsky normal form (CNF) and the Greibach normal form (GNF). I will show how you can convert any context-free grammar into an equivalent grammar in CNF. The simplification of CFGs and the conversion of a CFG to CNF are slightly tedious processes. Nonetheless, they are crucial because they convert grammars into a form that can be accepted by *a very important algorithm* which we will discuss in the next section. Sneak peak, I am talking about the CYK**S** algorithm. You can find the notes related to this section [here](grammar_normal_forms.pdf).

<h3>Grammar simplification</h3>

The simplification of a context-free grammar $$G$$ involves converting its production rules so that they have a consistent form. The term simplification is somewhat misleading because, as you will see, grammar simplification algorithms can cause an initial grammar $$G$$ to become, in some sense, "more messy". Simplifications are typically the first step in converting a grammar to some normal form such as Chomsky normal form or Greibach normal form. I introduce these ideas at a high-level in the next video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/U4g7qdVX0mg?si=hPcdDDMLztHI6s5q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

The process of simplifying a grammar consists of three fundamental steps:

1. Removing nullable variables
2. Removing unit productions
3. Removing useless productions. This last step is done into two subparts:
    - Removing non-generating variables
    - Removing unreachable variables

I discuss each of these steps in detail.

<h4>Removing nullable variables</h4>

<iframe width="560" height="315" src="https://www.youtube.com/embed/yCqco5AQ_Os?si=OFPJnyt-rY1N6mNK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<h4>Removing unit productions</h4>

<iframe width="560" height="315" src="https://www.youtube.com/embed/yC6kDAdb0F0?si=3TD64nmpg3sEglCj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<h4>Removing useless productions</h4>

**Extremely important note:** In the next video, I discuss useless productions in the **wrong order**. Useless productions should always be removed by first removing non-generating variables and *then* unreachable variables. Why? Because removing non-generating variables may introduce unreachbility. Please keep this in mind for the exercises below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Gj2ls520Xyg?si=juS4CmrIhizJeTKK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<h3>Normal forms</h3>

Now that we know how to simplify context-free grammars, we will discuss their conversion to normal forms. Normal forms are everywhere in mathematics: Orthonormal vectors, normal matrices, etc. In general, a normal form simply restricts a mathematical object to respect a certain structure. This typically allows theorems and results to be stated much more cleanly, without having to deal with additional edge cases. In our case, context-free grammar normal forms will be useful as they will allow us to create simple parsing algorithms, algorithms which check whether $$w \in L(G)$$.

In the next video I discuss in more detail the Chomsky normal form (CNF). I show how any context-free grammar can converted to an equivalent grammar in CNF. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/I-oHqTkbwnQ?si=WD0CuVPNuDxVU8N0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<h3>Exercises</h3>

{% include_relative exercise3.html %}

{% include_relative exercise1.html %}

{% include_relative exercise2.html %}

