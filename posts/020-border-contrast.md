---
title: 020 — Use enough contrast for the boundaries of interactive elements
date: 2023-04-18T16:07:08
tags:
  - UI
  - button
  - input
  - accessibility
---

The WCAG specifies the
[minimum contrast ratio for text to 4.5:1 for regular text and 3:1 for large-scale text](https://www.w3.org/TR/WCAG/#contrast-minimum).
This is something that most web designers and developers know.

But it's also important to know the criterion for non-text contrast, especially
for user interface components that provide information about their boundaries or
state.

<!-- more -->

Interactive components like buttons, inputs or selectors should be easily
identifiable by users. The
[minimum non-text contrast for UI elements is 3:1](https://www.w3.org/TR/WCAG/#non-text-contrast),
so a way to define the boundaries of these elements is by using a border with
enough contrast.

In the following example, we have an input and a button with low contrast.

<figure>
  <p>
    <label>
      Type your name:
      <input type="text" style="border-color:#bbb">
    </label>
  </p>
  <button style="border-color:#bbb">
    Submit
  </button>
</figure>

This can look enough for many users, but a person with a vision impairment may
find it hard to differentiate the interactive components from plain text. This
is a simulation:

<figure style="filter:brightness(133%)">
  <p>
    <label>
      Type your name:
      <input type="text" style="border-color:#bbb">
    </label>
  </p>
  <button style="border-color:#bbb">
    Submit
  </button>
</figure>

A minimum contrast of `3:1` will ensure the elements are correctly identified by
most users:

<figure>
  <p>
    <label>
      Type your name:
      <input type="text" style="border-color:#8d8d8d">
    </label>
  </p>
  <button style="border-color:#8d8d8d">
    Submit
  </button>
</figure>

With the vision impairment simulated:

<figure style="filter:brightness(133%)">
  <p>
    <label>
      Type your name:
      <input type="text" style="border-color:#8d8d8d">
    </label>
  </p>
  <button style="border-color:#8d8d8d">
    Submit
  </button>
</figure>

## More info

- [WCAG: Specification for non-text contrast](https://www.w3.org/TR/WCAG/#non-text-contrast)
- [Fix Color Contrast – Web Accessibility for Text & UI Design](https://pimpmytype.com/color-contrast/)
