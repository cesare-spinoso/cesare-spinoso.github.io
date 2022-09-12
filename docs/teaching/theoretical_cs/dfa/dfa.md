---
layout: lesson_page
permalink: /teaching/theoretical_cs/dfa
lesson_name: Deterministic Finite Automata (DFA)
order: 3
---

This section will be about Deterministic Finite Automata (DFA) and regular languages, a family of languages that are tightly connected to DFAs. You can find the notes related to this section (also partially transcribed on this page) [here](dfa.pdf).

<h4>What's a DFA?</h4>

<iframe width="560" height="315" src="https://www.youtube.com/embed/O1u3JiM6YKg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


A DFA is the most "primitive" computational machine that we will see in the course. This machine performs a sequence of deterministic operations given an input - a string - which leads to it either outputting "accept" or "reject". The language recognized or accepted by a DFA is the set of strings that the DFA accepts. A DFA also has a finite amount of memory. We will see that this will prove to be its major limitation in accepting more complex languages. The formal definition of a DFA is as follows

**Definition.** A **deterministic finite automata (DFA)** $$M$$ is a 5 element tuple $$M = (Q, \Sigma, \delta, q_0, F)$$ where
- $$Q$$ is the set of states of $$M$$
- $$\Sigma$$ is the alphabet of the strings inputted into $$M$$
- $$\delta: Q \times \Sigma \rightarrow Q$$ is the transition function of $$M$$
	- This can be represented graphically as we will see shortly or in a table.
- $$q_0$$ is the initial state, where computations begin
- $$F$$ is the set of accept or final states

<h4>An example DFA</h4>

<iframe width="560" height="315" src="https://www.youtube.com/embed/i5jqe-4-VRU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


**Example.** Here is an example of a DFA $$M_1 = (\{q_0, q_1, q_2\}, \{0,1\}, \delta, q_0, \{q_1\})$$ where we represent $$\delta$$ graphically as follows

{% include_relative dfa1.html %}

What happens when this machine receives $$ 010 $$ as an input? What about $$ 101 $$?

<h4>Regular languages</h4>

We know DFAs as language acceptors or recognizers. In fact, languages that can accepted by DFAs belong to the family of **regular languages**. You can think of this family as containing languages that are "simple enough" to be recognized by a DFA. We have thus already begun creating a hierarchy of computational power with the DFA at the bottom of this hierarchy. In other words, there appears to be a relationship between the "complexity" of a language and the "power" required for a DFA to accept it. This should give you the idea that there are perhaps more complicated languages that cannot be accepted by a DFA. Can you think of any?

<iframe width="560" height="315" src="https://www.youtube.com/embed/Qz7auCVtsis" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### Exercises
- (Sipser 1.35) Let $$A/B = \{ w : wx \in A \text{ for some } x \in B \}$$. Show that if $$A$$ is regular and $$B$$ is any language, then $$A/B$$ is regular.
	- Since A is regular we know that there exists a DFA $$M_A = (Q_A, \Sigma, \delta_A, q_0, F_A)$$ that accepts it. Next, we create a new and improved **extended** transition function $$\delta' : Q \times \Sigma^{*} \rightarrow Q$$. This transition function is **extended** because it accepts as input a state $$q \in Q_A$$ and a **string** $$w \in \Sigma^*$$. As its output, the transition function returns the state $$q'$$ that $$M_A$$ would be in had it read $$w$$ starting from $$q$$. The goal is to create a machine $$M$$ that accepts $$A/B$$. If $$y \in A/B$$ then we know that when we feed $$y$$ into $$M_A$$ we get to state $$q' = \delta'(q_0, w)$$. Once at state $$q'$$, we take some string $$x \in B$$ and feed it to $$M_A$$ but now starting from $$q'$$. It must be that $$\delta'(q', x) = q_f \in F_A$$ (by definition of $$A/B$$). Thus the machine $$M = (Q_A, \Sigma, \delta_A, q_0, F)$$ accepting $$A/B$$ is the same as the machine accepting $$A$$ except that \begin{align} F = \\{ q : \exists x \in B, \delta'(q, x) \in F \\} \\ \end{align}
	- **NOTE**: It doesn't matter here that $$B$$ is not regular. We are not using the fact that a machine does (or doesn't) accept $$B$$. We are simply using its contents to define a new $$F$$, a set of final **states**. All the computation, however, is done on $$M_A$$ which we know exists. So we aren't using anything that's more "powerful" than the class of regular languages.
