---
layout: lesson_page
permalink: /teaching/theoretical_cs/pumping_lemma_cfl
lesson_name: Pumping Lemma (for Context-Free Languages)
order: 16
---

In this section, we discuss the pumping lemma for context-free languages. This lemma is typically used to show that the language $$\{a^nb^nc^n : n \geq 0\}$$ is not context-free. This result shows that, despite their additional expressiveness, there are still languages which cannot be represented using the CFG and PDA formalisms.

# Showing that a language is not context-free via the pumping lemma

In this video, I discuss how one can use the pumping lemma for CFLs to show that the language $$\{a^ib^jc^k : i < j < k\}$$ is not context-free.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HnB1Fz7Mzec?si=DepttK6vg3kZvxtv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# Language classification exercise

You are now ready to solve what I call *language classification* exercises. In these exercises, you are given a language $$L$$ and asked to determine whether that language is 1. Regular, 2. Not regular, but context-free, or 3. Not context-free. If the answer is 1., then you must provide a construction which shows that $$L$$ is regular (e.g., DFA, NFA, regular expression). If the answer is 2., then you must first prove that the language is not regular (e.g., using the PL for regular languages, the Myhill-Nerode theorem, and/or the closure properties for regular languages) **and** provide a construction which shows that it is context-free (e.g., CFG or PDA). If the answer is 3., then you must show that $$L$$ is not context-free (e.g., using the PL for context-free languages and/or the closure properties of context-free languages). The following tutorial recording covers the language classification of three languages. The corresponding time bookmark is reproduced here for your convenience

[10:09](https://youtu.be/Ag6GbIoC_1E?si=UlplNFw4OBaya4bK&t=609): 
$$L_1 = \{ w \in \{a,b\}^* : \forall \text{ prefix $v$ of $w$ } |n_a(v) - n_b(v)| \leq 1 \}$$

[42:15](https://youtu.be/Ag6GbIoC_1E?si=dMjedcGt3dqgWXP9&t=2535):
$$L_2 = \{ w \in \{a,b\}^* : |n_a(w) - n_b(w)| \leq 1 \}$$

[1:25:00](https://youtu.be/Ag6GbIoC_1E?si=MaMk0rw83HzgWd-p&t=5100):
$$L_3 = \{ a^{n^2} : n \geq 0 \}$$

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ag6GbIoC_1E?si=A2ntbivVgHd91z_z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Exercises

{% include_relative exercise1.html %}

{% include_relative exercise2.html %}

{% include_relative exercise3.html %}