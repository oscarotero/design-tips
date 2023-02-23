---
title: 011 — Order CTAs by importance
tags:
  - UI
  - button
---

If your design contains several CTAs, order them by importance. Only one must be
the primary action that must be in the first position.

<!-- more -->

<figure style="display:flex;gap:8px;background:white">
  <button class="button is-primary">Primary action</button>
  <button class="button is-secondary">Secondary action</button>
  <button class="button is-secondary">Other secondary</button>
</figure>

If the buttons are in reversed order, the primary action must be on the right
edge:

<figure style="display:flex;flex-flow:row-reverse;gap:8px;background:white">
  <button class="button is-primary">Primary action</button>
  <button class="button is-secondary">Secondary action</button>
  <button class="button is-secondary">Other secondary</button>
</figure>

Use `flex-flow: row` or `flex-flow: row-reverse` CSS properties to order
visually the buttons without affecting the real order in HTML, with the
additional benefit of keeping the focus order on pressing the `Tab` key.
