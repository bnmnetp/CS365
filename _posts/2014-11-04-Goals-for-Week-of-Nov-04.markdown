---
layout: post
title:  "Goals for Week of Nov 04"
date:   2014-11-04 07:21:49.325098
categories:
---

### Tuesday

* Finish Presentations
* Start on CGI Programming

### Thursday

* Build simple example forms processing program
* Cookies
* The XKCD Password Program

<p class="p1"><img height="601" src="http://imgs.xkcd.com/comics/password_strength.png" width="740" /> </p>
<p class="p1">Since we all need to change our passwords due to the Heartbleed incident anyway, we are going to take the xkcd idea and put it to work to get some practice using Flask.  You are to select four words to put together as a passphrase that is long yet easy to remember.  Words in the passphrase should not be duplicated.</p>
<p>This app will have two pages.  The first page will be a form with the appropriate elements to choose from the following options:</p>
<p class="p1"> </p>
<ul class="ul1">
<li class="li2">limit length of longest and shortest word</li>
<li class="li2">limit length of overall password</li>
<li class="li2">optimize for typing speed -- maximize use of words that have a high degree of left-right hand alternating characters between letters that are adjacent. This Should be a simple checkbox style option.</li>
<li class="li2">Incorporate common number/letter substitutions and use of capital letters to make LIS happy.     Not all possible substitutions should be used just 2 or 3. So give the user some checkboxes to check.
<ul class="ul2">
<li class="li2">3 == e</li>
<li class="li2">0 == o</li>
<li class="li2">1 == l</li>
<li class="li2">5 == s</li>
<li class="li2">4 == a</li>
<li class="li2">You probably know of others</li>
<li class="li2">Capitalize first word</li>
<li class="li2">Capitalize second word</li>
<li class="li2">Capitalize third word</li>
<li class="li2">Capitalize fourth word</li>
</ul>
</li>
</ul>
<p>The second page should be a table of 10 possible passwords that satisfy the options you specified on the first page.</p>


<p>There are many sources of words on the internet, or you can use the linux dictionary file /usr/share/dict/words.</p>



