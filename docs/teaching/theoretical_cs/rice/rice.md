---
layout: lesson_page
permalink: /teaching/theoretical_cs/rice_thm
lesson_name: Rice's Theorem 🍚
order: 19
---

We've seen in the previous section that there are two main ways to show that a decision problem is undecidable: 1. Using a diagonalization-type argument like we did for the halting problem or 2. Reducing one known undecidable problem to another. Unfortunately diagonalization-type arguments cannot always be made and reductions are sometimes, well, hard 🥲. Is it ever possible to more quickly and more easily show that a problem is undecidable? The answer is a resounding "Rice!", err, I mean "Yes!". In this section, we see how [Rice's theorem](https://www.ams.org/journals/tran/1953-074-02/S0002-9947-1953-0053041-6/) can be used for just that.

<h4>What is Rice's Theorem?</h4>

Rice's theorem was originally discovered and proved by Henry Gordon Rice in 1951. Note that the only (known) connection between the theorem and the indispensable carb is its discoverer's name. But what does Rice's theorem say concretely? Details in the following video!

<iframe width="560" height="315" src="https://www.youtube.com/embed/bQtNXP41XBc?si=_xyRfMCfsrJGOlQw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<h4>How do we use Rice's theorem to show undecidability?</h4>

OK so Rice's theorem tells us that decision problems about *non-trivial* properties *of languages* are undecidable. But what does that mean, really? In the next video, I cover a few different decision problems where I walk you through how to determine whether Rice's theorem can be used to show that a problem is undecidable.

<iframe width="560" height="315" src="https://www.youtube.com/embed/2e6bNC1fxNI?si=UEtxOf1GNcINdtNX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Exercises

{% include_relative exercise1.html %}

