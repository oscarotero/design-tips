---
title: 009 - Placeholders are not labels
tags:
  - UI
  - forms
---

In HTML, the placeholders are small texts that are visible in empty inputs. They
are not an alternative to labels (the text used to describe the input), or hints
(an additional text to display instructions to aid the user with data entry).

<!--more -->

In the following example, we can see an input using the placeholder to describe
the data to introduce. This pattern has a lot of usability and accessibility
issues, for example when the user starts typing something, the placeholder
disappears. This is a usability issue because requires
[short-term memory for users with cognitive limitations](https://www.nngroup.com/articles/short-term-memory-and-web-usability/).

<figure>
  <input type="text" placeholder="What's your name?">
</figure>

In this other example, the placeholder is used to place a hint with instructions
about the expected data. We have the same problem as in the previous example:
the instructions are not visible when the user starts typing:

<figure>
  <label for="name">What's your name</label>
  <input type="text" id="name" placeholder="Only the first name, without spaces.">
</figure>

The only acceptable use case for placeholders is to provide an example of a
possible value. But always starts with "Example:" or something similar to make
it clear that it's not a real value (some users confuse the placeholder with a
filled input):

<figure>
  <label for="name-2">What's your name</label>
  <input type="text" id="name-2" placeholder="Example: Óscar">
  <p style="font-size:0.9rem;margin:.5em 0 0">Only the first name, without spaces.</p>
</figure>

## More info

- [Placeholders in Form Fields Are Harmful](https://www.nngroup.com/articles/form-design-placeholders/)
