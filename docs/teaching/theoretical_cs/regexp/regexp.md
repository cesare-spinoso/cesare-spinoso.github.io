---
layout: lesson_page
permalink: /teaching/theoretical_cs/regexp
lesson_name: Regular Expressions
order: 6
---

This section will be about Regular Expressions. You will first learn what regular expressions are and how they are different from DFAs and NFAs. We will go through examples where we find the language represented by a given regular expression and where we write down a regular expression to denote a certain language. Finally, we will see the equivalence between FAs and regular expressions. You can find the notes related to this section [here](regexp.pdf).

<h4>What are regular expressions?</h4>

What exactly is a regular expression? You may have already encountered them in the context of a programming class. They are a type of mathematical object that *denote* a certain language. They do this by establishing a "pattern" that all strings in the denoted language must obey. They are __not__ language acceptors (like DFAs and NFAs were) nor are they language generators (which we will see is a grammar's role). The rules for building regular expressions are recursive. This means that we determine whether a given expression is a valid regular expression by checking whether each of its sub-expressions are valid. Once we can distinguish between valid and invalid regular expressions, we can start talking about what language they describe (which I use interchangeably with denote). Given a regular expression $$r$$, we will refer to its described language as $$L(r)$$. To extract the language that $$r$$ describes, we will also do so in a recursive manner. I discuss this and an example in the following videos.

This is the introductory video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/s-hAXeFij9g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

And this video describes how to determine the language denoted by a certain regular expression. In this case, $$(a+bb)(ab)^*$$.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Cm1-78qWrSk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Okay, now that we have a basic understanding of regular expressions, let's look at an exercise where we try to find __a__ (why not the?) regular expression that denotes a particular language. In this exercise, we find a regular expression for the language $$L = \{ w \in \{0, 1\}^* : w \text{ contains the substring } 101\}$$.

<iframe width="560" height="315" src="https://www.youtube.com/embed/RbwkZA3xvws" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

More exercises for identifying the languages denoted by regular expressions as well as writing regular expressions to denote particular languages in the Exercises section.

<h4>Equivalence between regular expressions and regular languages</h4>

Now that we are a bit more familiar with regular expressions, you might be wondering what exactly is their connection to regular languages. After all, both of these terms have "regular" in them, is that just a wild coincidence? (I honestly don't know the exact answer to that, woops.) In turns out that regular expressions are exactly equivalent to DFAs and NFAs. That is, any language that is accepted by an FA can be described by a regular expression and vice-versa! This is quite an important result because it means that to prove that a language is regular you can now either 1. Create a DFA that accepts it, 2. Create an NFA that accepts or 3. Create a regular expression that denotes it. This is great because sometimes it is easier to design an FA for a particular language and other times a regular expression is more convenient. Now, how is it possible for the family of languages denoted by regular expressions, let's call this $$L_{REX}$$, to be exactly the same as the family of language, $$L_{NFA}$$, accepted by NFAs (and, by extension, DFAs)? Because every regular expression can be converted to an equivalent (N)FA and vice-versa! More in the following videos.

1. Converting regular expressions to NFAs.
    <iframe width="560" height="315" src="https://www.youtube.com/embed/o2sxCsAWviQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

2. Converting NFAs to regular expressions.
    <iframe width="560" height="315" src="https://www.youtube.com/embed/GUdjtZn9V_I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<h4>Exercises</h4>

{% include_relative exercise_1.html %}

{% include_relative exercise_2.html %}

{% include_relative exercise_3.html %}

{% include_relative exercise_4.html %}

{% include_relative exercise_5.html %}

{% include_relative exercise_6.html %}

{% include_relative exercise_7.html %}