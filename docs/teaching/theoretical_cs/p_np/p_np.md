---
layout: lesson_page
permalink: /teaching/theoretical_cs/p_np
lesson_name: P, NP and NP-Complete Reductions
order: 20
---

In this section, we change the focus from "Is a decision problem decidable/solvable?" to "If a decision problem is decidable, is it *efficiently* decidable/solvable?" Where by *efficiently* decidable or solvable we mean that there exists an executable program (i.e., an implementable Turing machine) which decides the decision problem in **polynomial time**. (Don't worry if you're rusty on your Big O notation.)

<h4>The classes of P and NP</h4>

If we restrict ourselves to the set of *decidable* problems, then a natural question that arises is "How efficiently?" can we decide a decision problem. There are two major classes of *decidable* decision problems: 1. Decision problems which can be decided in polynomial time using a **deterministic** Turing machine, also known as **P** and 2. Decision problems which can be decided in polynomial time using a **non-deterministic** Turing machine, also known as **NP**.

If you recall from the previous sections on NFA and (N)PDA, non-determinism is a nifty feature that we sometimes give to computational models to allow them to **guess-and-verify**. This nifty feature comes in handy when you have a "difficult" decision problem that you want to decide in polynomial time. For example, consider the decision problem of determining whether a graph $$G$$ has a path of length $$k$$. One very slow - in fact exponential time - way of deciding this is to list all possible sequences of $$k + 1$$ vertices in $$G$$ and check whether any of them forms a path in $$G$$. Another much faster - in fact polynomial time - approach would be to **guess** the path of length $$k$$ and then **check** whether it's indeed in the graph $$G$$. The reason why this solution runs in polynomial is because the **guess-and-verify** feature allows the procedure to guess correctly if a correct guess does indeed exist. While the **guess-and-verify** feature is great for theoretical polynomial-time procedures, it is not an **implementable** procedure - there's no gadget or gizmo that lets you implement the step "Guess correctly" in an algorithm.[^1]

As a result, when we ask the question "If a decision problem is decidable, is it *efficiently* decidable/solvable?", the answer we are really asking is "Is the decision problem in P?" If the decision problem is in P, then we at least have a solution that does not blow up exponentially in time. If, instead, the answer is something like "It's certainly in NP, but there's no obvious way to show that it's in P."[^2], then it's unlikely that we can avoid a solution that blows up exponentially in time.

All of this is discussed in the next video!

<iframe width="560" height="315" src="https://www.youtube.com/embed/Nd-3UJ5n56c?si=-_1NREDaLamLCiin" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<h4>A concrete example showing the difference between P and NP</h4>

In the next video, I give a more concrete example based on the Post correspondence problem to illustrate the difference between P and NP.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZVQdG52nFAA?si=UyBS0POgBg8m_vBl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<h4>NP-Hardness and NP-Completeness</h4>

Now that you're hopefully a bit more comfortable with the notions of P and NP, we are ready to discuss the notions of NP-Hardness and NP-Completeness. A problem Q is NP-Hard if it is harder than every other problem in NP (i.e., every problem in NP reduces to Q). A problem is NP-Complete if 1. It is NP-Hard and 2. It is in NP. Thus, if a problem Q is shown to be NP-Complete, the answer to the question "Is Q an *efficiently* decidable/solvable problem?" is most likely "No!"

<iframe width="560" height="315" src="https://www.youtube.com/embed/INQ2g-0Wh58?si=LuXgGrbsevd8PiAm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<h4>Showing that a problem is NP-Complete via reductions</h4>

Now that we're aware of the definitions of NP-Hardness and NP-Completeness, we can start showing that a decision problem Q is NP-Complete. There are two common ways of doing this: 1. Showing that an arbitrary problem in NP reduces to the decision problem Q and 2. Reducing a known NP-Complete problem to the decision problem Q. Approach 1 is difficult as it prevents us from assuming anything about the structure we are reducing from. Approach 2 is more common and will be the one I present in the next video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/jSz3n2JcGaU?si=KF-AKeUyncwhcUmT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Exercises

{% include_relative exercise1.html %}

{% include_relative exercise2.html %}

{% include_relative exercise3.html %}

{% include_relative exercise4.html %}

[^1]: The fact that **guess-and-verify** seems like pure magic is *because it kind of is*. Unless P is indeed equal to NP, there is no general way to convert the **guess-and-verify** feature to a deterministic and implementable procedure which remains polynomial in time.

[^2]: This is my best attempt at calling a problem NP-Complete *without* actually using that term.


<!-- You might find that these notions overcomplicate the "Is it efficiently solvable?" question. Indeed, you might be wondering why we don't simply talk about decision problems as polynomial vs not-polynomial (like we did in computability theory). not, similar to what we did in the decidable vs. undecidable discussion,  why we need these notions and why, similar to what we did in the decidable vs undecidable discussion, we can't simply talk about a problem This uncertainty is why, in complexity theory, we don't talk about things as polynomial or not-polynomial as the decidable-undecidable  -->