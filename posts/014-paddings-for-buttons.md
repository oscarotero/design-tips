---
title: 014 — Paddings for buttons
date: 2023-03-10T15:34:57
tags:
  - UI
  - button
---

Texts always have extra space above and below, which depends on the ascenders
and descenders of the font face and the line height. Buttons with text need more
horizontal padding than vertical padding to visually compensate for this extra
space.

<!-- more -->

The following button looks like there's a bit more space between the text and
the border vertically (above and below) than horizontally (left and right).

<figure style="text-align:center;">
  <button style="padding:10px;display:inline-block;min-height:0;">
    Hello world
  </button>
</figure>

Although "technically" the space is the same (`10px`), visually the extra space
of the text gives the impression of incorrect padding. Here we can see the space
occupied by the text:

<figure style="text-align:center;">
  <button style="padding:10px;display:inline-block;min-height:0;">
    <div style="background:gray">Hello world</div>
  </button>
</figure>

The same button with more horizontal padding (`15px`) than vertical (`10px`)
looks more equilibrated:

<figure style="text-align:center;">
  <button style="padding:10px 15px;display:inline-block;min-height:0;">
    Hello world
  </button>
</figure>
