---
layout: default
permalink: /teaching/comp330/fall2023
title: ""
---

# Comp 330 - Theory of Computation - Fall 2023

This is the archived website of the Comp 330 - Theory of Computation class which was taught at McGill in the Fall 2023 semester.[^1] It contains some logistical information as well as lecture notes and other class material. Assignments can be found at the very end of this webpage. In case you are curious, I also wrote a blog post about my experience teaching this course which you can find [here]({{ "2023/12/14/my_experience_teaching.html" | relative_url }}).

**Instructors**: Cesare Spinoso-Di Piano and Claude Crépeau <br>
**TAs**: Hillary Tao, Yuyan Chen, Yao Chen, Leo Shi, Ben Cheung, Morgan Chapados <br>
**Lecture time**: Tuesdays and Thursdays, 8:35 AM to 9:55 AM <br>
**Class location**: Stewart Biology S1/4 <br>


## Schedule, lectures notes and supplementary material

| Lecture | Date | Topic | Lecture Video | Lecture Notes | Extra Notes |
| --- | --- | --- | --- | --- | --- |
| 1 | Aug 31 | Intro, Maths review | No video. See [Tutorial Series]({% link teaching/theoretical_cs/index.md %}) for related content. | [Notes](./lecture_notes/lecture1_annotated.pdf) | [Supplementary: Partial orders and the principle of induction](./lecture_notes/supplementary_prakash.pdf) |
| 2 | Sept 5 | Formal language theory | [Recording](https://youtu.be/Hotf9eZo1_A) | [Notes](./lecture_notes/lecture2_annotated.pdf) | |
| 3 | Sept 7 | Deterministic finite automata (DFA) | [Recording](https://youtu.be/YuK6sEvfP-g) + Extra recordings [here](https://youtu.be/uxeJ0L9ng7Q), [here](https://youtu.be/NsgwSwp1JFs) and [here](https://youtu.be/CPAOCgijuPA) | [Notes](./lecture_notes/lecture3_annotated.pdf) | [Supplementary: Completing induction argument](./lecture_notes/lecture3_induction.pdf) |
| 4 | Sept 12 | Minimal DFA, Non-deterministic finite automata (NFA) | [Recording](https://youtu.be/8HwxerHzrt8) | [Notes](./lecture_notes/lecture4_annotated.pdf) |  |
| 5 | Sept 14 | NFA=DFA, NFA+$$ \varepsilon $$ | [Recording](https://youtu.be/umlVRpkfAHw) | [Notes](./lecture_notes/lecture5_annotated.pdf) | [Supplementary: Formal proof of equivalence](./lecture_notes/lecture5_supplementary.pdf) |
| 6 | Sept 19 | Closure properties of regular languages | [Recording](https://youtu.be/85qWDf3-xYw) | [Notes](./lecture_notes/lecture6_annotated.pdf) |  |
| 7 | Sept 21 | Regular expressions | [Recording (Part 1 of 6)](https://youtu.be/Otzzg1aMlGU) - See the Youtube playlist for the other parts | [Notes](./lecture_notes/lecture7_annotated.pdf) | [Supplementary: Expanded discussion of conversion algorithm](./lecture_notes/lecture7_supplementary.pdf) |
| 8 | Sept 26 | DFA minimization | [Recording](https://youtu.be/JdMshEUOQJc) | [Notes](./lecture_notes/lecture8_annotated.pdf) |  |
| 9 | Sept 28 | The Myhill-Nerode theorem | [Recording](https://youtu.be/VWWFwXemCSc) | [Notes](./lecture_notes/lecture9_annotated.pdf) |  |
| 10 | Oct 3 | Non-regular languages, The Pumping lemma | [M-N to show non-regularity](https://www.youtube.com/watch?feature=shared&v=7E7pCcK1wy0) + [Non-regular language intuitions](https://www.youtube.com/watch?v=-HjTIQrlXEI) | [Notes](./lecture_notes/lecture10_cesare_notes.pdf) |  |
| 11 | Oct 5 | Proving languages are not regular | [Recording](https://youtu.be/vkQMnNGlMXM) | [Notes](./lecture_notes/lecture11_annotated.pdf) |  |
| 12 | Oct 10 | Midterm review | No video. | [Notes](./lecture_notes/lecture12_annotated.pdf) |  |
| - | Oct 12 | **Midterm exam** | | |
| 13 | Oct 17 | Intro to context-free languages (CFLs) and the Chomsky hierarchy | [Recording](https://youtu.be/F4rC0lPLCdg) | [Notes](./lecture_notes/lecture13_annotated.pdf) |  |
| 14 | Oct 19 | CFLs: Proof of correctness and closure properties | [Recording](https://youtu.be/nFfqzhGeQ7M) | [Notes](./lecture_notes/lecture14_annotated.pdf) | [Supplementary: Completing induction argument](./lecture_notes/lecture14_induction.pdf) |
| 15 | Oct 24 | CFLs: Ambiguity and CFL-related decision procedures  | No video. | [Notes](./lecture_notes/lecture15_annotated.pdf) | [Supplementary: Formal definitions](./lecture_notes/lecture15_extra_handwritten.pdf) |
| 16 | Oct 26 | Pushdown automata | [Recording](https://youtu.be/1F54LwMgZ_o) | [Notes](./lecture_notes/lecture16_annotated.pdf) |  |
| 17 | Oct 31 | Pumping lemma for CFLs | [Recording](https://youtu.be/4hL3N6zLKco) | [Notes](./lecture_notes/lecture17_annotated.pdf) |  |
| 18 | Nov 5 | Turing machines (TMs) | [Recording](https://youtu.be/TR5UXdS4aFs) | [Notes](./lecture_notes/lecture18_annotated.pdf) | [Supplementary: Completing TM definition](./lecture_notes/lecture18_extra.pdf) |
| 19 | Nov 7 | The halting problem | No video. | [Notes](./lecture_notes/lecture19_annotated.pdf) | *Guest lecture by [Prof. Prakash Panangaden](https://www.cs.mcgill.ca/~prakash/)* |
| 20 | Nov 12 | Intro to reductions | [Recording](https://youtu.be/4GOH6CaTfsQ?feature=shared) | [Notes](./lecture_notes/lecture20_annotated.pdf) | [Supplementary: $$HP \leq_m AP$$ argument](./lecture_notes/lecture18_extra.pdf) |
| 21 | Nov 14 | More reductions! | [Recording](https://youtu.be/2UgtvZGHCIw?feature=shared) | [Notes](./lecture_notes/lecture21_annotated.pdf) |  |
| 22 | Nov 19 | Characterizing undecidability | [Recording](https://youtu.be/COjfUs0_A7w?feature=shared) | [Notes](./lecture_notes/lecture22_annotated.pdf) | [Supplementary: Extra proofs](./lecture_notes/lecture22_extra_proofs.pdf) |
| 23 | Nov 21 | Rice's theorem | [Recording](https://youtu.be/uMRwweUcUuQ?feature=shared) + [Clarification on notation](https://youtu.be/RqQA3F2zjsY?feature=shared) | [Notes](./lecture_notes/lecture23_annotated.pdf) |  |
| 24 | Nov 26 | Undecidable problems about CFLs | [Recordings (Part 1 of 9)](https://youtu.be/rWtq9JPoHBA?feature=shared) | [Notes](./lecture_notes/lecture24_recorded.pdf) |  |
| 25 | Nov 28 | The Post correspondence problem | [Recording](https://youtu.be/fFgiNY4WjlM?feature=shared) | [Notes](./lecture_notes/lecture25_annotated.pdf) | |
| 26 | Dec 5 | Review of reductions and Turing reductions | [Recording - Consult notes at the same time.](https://youtu.be/aCIoF3Z12LA?feature=shared) | [Notes](./lecture_notes/lecture26_annotated.pdf) | |

## Assignments

- Assignment 1: [Handout](./assignments/hw1.pdf)
- Assignment 2: [Handout](./assignments/hw2.pdf)
- Assignment 3: [Handout](./assignments/hw3.pdf)
- Assignment 4: [Handout](./assignments/hw4.pdf)
- Assignment 5: [Handout](./assignments/hw5.pdf)
- Assignment 6: [Handout](./assignments/hw6.pdf)

<br>

---

<br>

[^1]: In fact, the students did not have access to this website during the semester and instead used myCourses. However, I have decided to make most of the contents of the course publicly accessible via this webpage.
