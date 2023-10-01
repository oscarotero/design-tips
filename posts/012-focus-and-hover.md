---
title: 012 — Design focus and hover states independently
date: 2023-02-23T17:51:56
tags:
  - UI
  - button
---

Most interactive elements have at least two states: **focus** and **hover**.
These states are independent but can be combined, so they should have different
style properties that do not conflict.

<!-- more -->

The following button has an outline on **focus** and a different background
color on **hover**. Both styles don't overlap each other, so they can be
combined.

<figure>
  <button class="button is-primary" autofocus>Button</button>
</figure>
