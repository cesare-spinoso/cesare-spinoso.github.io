---
layout: page
permalink: /teaching/comp_330/fall_2022/
---

<h2>Comp 330 - Fall 2022</h2>

Welcome to Comp 330! My name is Cesare (Pronounced Chez-array or just Chez) and I am excited to be one of your TAs for the Fall 2022 semester. 

<h3>Office hours</h3>

To be announced soon! Stay tuned :)

<h3>Navigating this site</h3>

You will find additional resources related to the course that I hope will help in solidifying your understanding of the course material. I've organized each page to contain notes, exercises and additional recordings I think might be useful if you're looking for additional material.

<ul>
  {% assign mypages = site.pages | sort: "order" %}
    {% for page in mypages %}
        {% if page.lesson_name %}
        <li><a href="{{ page.url | absolute_url }}">{{ page.lesson_name }}</a></li>
        {% endif %}
    {% endfor %}
</ul>



<h3>Some thoughts about this course</h3>

Some of the concepts that you will learn in this course will be very different from any kind of material you've seen before. As such, it will require time and practice to fully digest. It will be absolutely normal to feel lost after a lecture. However, once any kind of confusion or doubt appears it is important you immediately address it with Prof. Panangaden, the TAs or even fellow classmates. In fact, I have found study groups to be one of the most insightful and rewarding ways of ironing out any conceptual doubts in this course. My tip is to take the lecture as a mere introduction/warm-up to the material. You can only get more familiar with it by reviewing it, asking (easy and hard) questions along the way, and, most crucially, solving problems!

In teaching this material over the last few years, I have noticed that students take in concepts at very different paces. This means that some of you will have no problem solving assignment questions easily, with not much practice. Others will struggle more. For those of you in the latter group (which I wholeheartedly admit I was part of), do not despair! Remember that you're not alone in this journey - trust me. Come see us at office hours and we'll work on dispelling any doubts together.

In my opinion, the topics you will come across in this course are some of the most fun and rewarding ones you'll see in computer science. I hope this has gotten you pumped and ready to learn!