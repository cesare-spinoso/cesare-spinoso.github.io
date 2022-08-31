---
layout: lesson_page
permalink: /teaching/comp_330/fall_2022/dfa
lesson_name: Deterministic Finite Automata (DFA)
order: 3
---

These notes will be about Deterministic Finite Automata (DFA). A DFA is the most "primitive" computational machine that we will see in the course. This machine performs a sequence of deterministic operations given an input - a string - which leads to it either outputting "accept" or "reject". The language recognized or accepted by a DFA is the set of strings that the DFA accepts. A DFA also has a finite amount of memory. We will see that this will prove to be its major limitation in accepting more complex languages. Let's remind ourselves of the formal definition of a DFA.

**Definition.** A **deterministic finite automata (DFA)** $$M$$ is a 5 element tuple $$M = (Q, \Sigma, \delta, q_0, F)$$ where
- $$Q$$ is the set of states of $$M$$
- $$\Sigma$$ is the alphabet of the strings inputted into $$M$$
- $$\delta: Q \times \Sigma \rightarrow Q$$ is the transition function of $$M$$
	- This can be represented graphically as we will see shortly or in a table.
- $$q_0$$ is the initial state, where computations begin
- $$F$$ is the set of accept or final states

**Example.** Here is an example of a DFA $$M_1 = (\{q_0, q_1, q_2\}, \{0,1\}, \delta, q_0, \{q_1\})$$ where we represent $$\delta$$ graphically as follows

{% include_relative dfa1.html %}

### Exercises
- (Sipser 1.35) Let $$A/B = \{ w : wx \in A \text{ for some } x \in B \}$$. Show that if $$A$$ is regular and $$B$$ is any language, then $$A/B$$ is regular.
	- Since A is regular we know that there exists a DFA $$M_A = (Q_A, \Sigma, \delta_A, q_0, F_A)$$ that accepts it. Next, we create a new and improved **extended** transition function $$\delta' : Q \times \Sigma^{*} \rightarrow Q$$. This transition function is **extended** because it accepts as input a state $$q \in Q_A$$ and a **string** $$w \in \Sigma^*$$. As its output, the transition function returns the state $$q'$$ that $$M_A$$ would be in had it read $$w$$ starting from $$q$$. The goal is to create a machine $$M$$ that accepts $$A/B$$. If $$y \in A/B$$ then we know that when we feed $$y$$ into $$M_A$$ we get to state $$q' = \delta'(q_0, w)$$. Once at state $$q'$$, we take some string $$x \in B$$ and feed it to $$M_A$$ but now starting from $$q'$$. It must be that $$\delta'(q', x) = q_f \in F_A$$ (by definition of $$A/B$$). Thus the machine $$M = (Q_A, \Sigma, \delta_A, q_0, F)$$ accepting $$A/B$$ is the same as the machine accepting $$A$$ except that \begin{align} F = \\{ q : \exists x \in B, \delta'(q, x) \in F \\} \\ \end{align}
	- **NOTE**: It doesn't matter here that $$B$$ is not regular. We are not using the fact that a machine does (or doesn't) accept $$B$$. We are simply using its contents to define a new $$F$$, a set of final **states**. All the computation, however, is done on $$M_A$$ which we know exists. So we aren't using anything that's more "powerful" than the class of regular languages.
