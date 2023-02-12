---
layout: lesson_page
permalink: /teaching/theoretical_cs/normal_forms
lesson_name: Normal Forms of CFGs
order: 12
---

<!-- CFG simplification, CFG CNF -->

This section will be about context-free grammar simplification and normal forms. I will present all the steps necessary to simplify a grammar. I will then discuss two important normal forms of context-free grammars: Chomsky normal form (CNF) and Greibach normal form (GNF). I will show how you can convert any context-free grammar into an equivalent grammar in CNF. The simplification of CFGs and the conversion of a CFG to CNF are slightly tedious processes. Nonetheless, they are crucial because they convert grammars into a form that can be accepted by *a very important algorithm* which we will discuss in the next section. Sneak peak, I am talking about the CYK algorithm. You can find the notes related to this section [here](grammar_normal_forms.pdf).

<h3>Grammar simplification</h3>

The simplification of a context-free grammar $$G$$ involves converting its production rules so that they have a consistent form. The term simplification is somewhat misleading because, as you will see, grammar simplification algorithms can cause an initial grammar $$G$$ to become, in some sense, "more messy".

The process of simplifying a grammar consists of three fundamental steps:

1. Removing $$\lambda$$-productions and nullable variables
2. Removing unit productions
3. Removing useless productions

I discuss each of these steps in detail.

<h4>Removing \(lambda\)-productions and nullable variables</h4>

`Video on the way! Refer to slides for now.`

<h4>Removing unit productions</h4>

`Video on the way! Refer to slides for now.`

<h4>Removing useless productions</h4>

`Video on the way! Refer to slides for now.`

<h3>Normal forms</h3>

Now that we know how to simplify context-free grammars, we will discuss their conversion to normal forms. Normal forms are everywhere in mathematics: Orthonormal vectors, normal matrices, etc. In general, a normal form simply restricts a mathematical object to respect a certain structure. This typically allows theorems and results to be stated much more cleanly, without having to deal with additional edge cases. In our case, context-free grammar normal forms will be useful as they will allow us to create simple parsing algorithms, algorithms which check whether $$w \in L(G)$$.

In the next video I introduce two normal forms: Chomsky Normal Forma and Greibach Normal Form. I show how any context-free grammar can converted to an equivalent grammar in CNF. I leave the details of the algorithm for GNF as an exercise.

`Video on the way! Refer to slides for now.`

<h3>Exercises</h3>

{% include_relative exercise1.html %}

{% include_relative exercise2.html %}