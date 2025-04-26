---
layout: page
title: Research
permalink: /research/
order: 2
---

Here is a list of my most recent publications.

<h3>Does This Summary Answer My Question? Modeling Query-Focused Summary Readers with Rational Speech Acts</h3>
<b>Cesare Spinoso-Di Piano</b>, and Jackie Chi Kit Cheung. <a href="https://arxiv.org/abs/2411.06524">Does This Summary Answer My Question? Modeling Query-Focused Summary Readers with Rational Speech Acts</a> <i>arXiv:2411.06524 (2024).</i> <i>Workshop on Customizable NLP (CustomNLP4U) @ EMNLP 2024</i>

<button onclick="HideShowElement('qfs')">More details</button>
<div id="qfs" style="display: none;">

This paper which was presented as a poster at the CustomNLP4U Workshop proposed to model the <i>readers</i> of query-focused summaries using LLMs in order to <i>re-rank</i> candidate summaries based on information needs. We found that using likelihood-based (e.g., LLM-induced conditional likelihoods) methods to score candidate summaries can perform <i>worse than random</i> and that our method mitigates this through a reader-based re-ranking procedure based on the Rational Speech Acts framework.

</div>

<h3>Identifying and Analyzing Task-Encoding Tokens in Large Language Models (2024)</h3>
Yu Bai, Heyan Huang, <b>Cesare Spinoso-Di Piano</b>, Marc-Antoine Rondeau, Sanxing Chen, Yang Gao, and Jackie Chi Kit Cheung. <a href="https://arxiv.org/abs/2401.11323">Analyzing Task-Encoding Tokens in Large Language Models.</a> <i>arXiv:2401.11323 (2024).</i>

<button onclick="HideShowElement('tek')">More details</button>
<div id="tek" style="display: none;">

This preprint was the result of a project led by the wonderful <a href="https://ybai-nlp.github.io/">Yu Bai</a> who worked to analyze the behaviour of large language models (LLMs) while performing in-context learning. We found that LLMs are quite sensitive to <i>task-encoding tokens</i> (e.g., tokens making up the prompt template) in terms of donwstream performance. For example, we observe that the performance of models drops to <b>0%</b> (yes, worse than random) when provided a prompt with input-output demonstrations but <i>no</i> template tokens.
</div>

<h3>Qualitative Code Suggestion: A Human-Centric Approach to Qualitative Coding (2023)</h3>

<b>Cesare Spinoso-Di Piano</b>, Samira Rahimi, and Jackie Cheung. 2023. <a href="https://aclanthology.org/2023.findings-emnlp.993/">Qualitative Code Suggestion: A Human-Centric Approach to Qualitative Coding.</a> In <i>Findings of the Association for Computational Linguistics</i>: EMNLP 2023, pages 14887–14909, Singapore. Association for Computational Linguistics.

<button onclick="HideShowElement('qcs')">More details</button>
<div id="qcs" style="display: none;">

This publication was the result of the work I carried out during my Master's at McGill with my wonderful advisors <a href="https://www.cs.mcgill.ca/~jcheung/index.html">Jackie Cheung</a> and <a href="https://rahimislab.ca/">Samira Rahimi</a>. We showed that qualitative coding, a qualitative research technique, can be <b>partially</b> automated in a way which better aligns with the desires of scientists which frequently conduct these analyses.
</div>

<h3>McGill BabyLM Shared Task Submission: The Effects of Data Formatting and Structural Biases (2023)</h3>

Ziling Cheng, Rahul Aralikatte, Ian Porada, <b>Cesare Spinoso-Di Piano</b>, and Jackie CK Cheung. 2023. <a href="https://aclanthology.org/2023.conll-babylm.18/">McGill BabyLM Shared Task Submission: The Effects of Data Formatting and Structural Biases.</a> In <i>Proceedings of the BabyLM Challenge at the 27th Conference on Computational Natural Language Learning</i>, pages 179–192, Singapore. Association for Computational Linguistics.

<button onclick="HideShowElement('details_babylm')">More details</button>
<div id="details_babylm" style="display: none;">

This publication was the result of a project lead by the brilliant and tremendously hard-working <a href="https://scholar.google.com/citations?user=_2W8Ai4AAAAJ&hl=en">Ziling Cheng</a> in the context of the <a href="https://babylm.github.io/">BabyLM Challenge</a>. Through our experiments, we showed that more careful data preprocessing decisions can lead to performance increases of language models trained on very little amounts of data.
</div>


<h3>Mental Health–Related Emergency Department Visits in Adolescents Before and During the COVID-19 Pandemic: A Multicentric Retrospective Study (2021)</h3>

Nicholas Chadi, <b>Cesare Spinoso-Di Piano</b>, Esli Osmanlliu, Jocelyn Gravel, Olivier Drouin, <a href="https://www.sciencedirect.com/science/article/pii/S1054139X21003931">"Mental Health–Related Emergency Department Visits in Adolescents Before and During the COVID-19 Pandemic: A Multicentric Retrospective Study"</a>, <i>Journal of Adolescent Health</i>, Volume 69, Issue 5, 2021, doi:10.1016/j.jadohealth.2021.07.036

<button onclick="HideShowElement('details_covid_teens')">More details</button>
<div id="details_covid_teens" style="display: none;">

This publication was the result of work conducted with <a href="https://nicholaschadi.com/">Dr. Nicholas Chadi</a> and <a href="https://recherche.umontreal.ca/english/our-researchers/professors-directory/researcher/is/in31525/">Dr. Olivier Drouin</a> while I was a data analyst at the <a href="https://research.chusj.org/en/Home">Research Centre of Sainte-Justine University Hospital</a>. Through our analyses, we showed a significant increase in adolescent eating-disorder-related emergency department visits between 2018-2019 (pre-pandemic) and 2020 (at the peak of the pandemic). 
</div>