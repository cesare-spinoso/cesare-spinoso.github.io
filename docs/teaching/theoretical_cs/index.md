---
layout: page
permalink: /teaching/theoretical_cs
---

<h2>Theoretical Computer Science</h2>

Welcome to this Theoretical Computer Science resource page!

<iframe width="560" height="315" src="https://www.youtube.com/embed/OMkP9E62774" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

(Sorry about the audio on this video!)

<h3>Navigating this site</h3>

You will find additional resources related to the topic of theoretical CS that I hope will help in solidifying your understanding of the material. I've organized each page to contain notes, exercises and recordings I think might be useful if you're looking for a deepening of your understanding.

<ul>
  {% assign mypages = site.pages | sort: "order" %}
    {% for page in mypages %}
        {% if page.lesson_name %}
        <li><a href="{{ page.url | absolute_url }}">{{ page.lesson_name }}</a></li>
        {% endif %}
    {% endfor %}
</ul>



<h3>Some thoughts about this topic</h3>

Some of the concepts that you will learn here will be very different from any kind of material you've seen before. As such, it will require time and practice to fully digest. It will be absolutely normal to feel lost after a lecture. However, once any kind of confusion or doubt appears it is important you immediately address it with your instructor, the TAs or even fellow classmates. In fact, I have found study groups to be one of the most insightful and rewarding ways of ironing out any conceptual doubts in this course. My tip is to take the lecture as a mere introduction/warm-up to the material. You can only get more familiar with it by reviewing it, asking (easy and hard) questions along the way, and, most crucially, solving problems!

In teaching this material over the last few years, I have noticed that students take in concepts at very different paces. This means that some of you will have no problem solving assignment questions easily, with not much practice. Others will struggle more. For those of you in the latter group (which I wholeheartedly admit I was part of), do not despair! Remember that you're not alone in this journey - trust me.

In my opinion, the topics you will come across in a theoretical CS course are some of the most fun and rewarding ones you'll see in computer science. I hope this has gotten you pumped and ready to learn!