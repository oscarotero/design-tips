---
title: 010 — Don't rely on color to convey the error message
date: 2023-02-21T19:10:07
tags:
  - UI
  - color
  - accessibility
---

Nobody can refuse that the color for errors is red. It's a universal code that
everybody understands. Well, not everybody. Relying only on colors to transmit
an error is an accessibility issue because color blink people won't see it.

<!-- more -->

In the following example, the input to insert the email is in red, to indicate
that the value is not valid:

<figure>
  <p>
    <label for="user">User:</label>
    <input id="user" type="text" value="misteroom">
  </p>
  <p>
    <label for="email">Email:</label>
    <input id="email" type="email" value="invalid email" style="color:red;border-color:red">
  </p>
</figure>

People that can't perceive correctly the red color won't notice where's the
error because will see the form like this:

<figure style="filter:saturate(0)">
  <p>
    <label for="user-1">User:</label>
    <input id="user-1" type="text" value="misteroom">
  </p>
  <p>
    <label for="email-1">Email:</label>
    <input id="email-1" type="email" value="invalid email" style="color:red;border-color:red">
  </p>
</figure>

Always include a text and/or an icon to indicate where's the error:

<figure>
  <p>
    <label for="user-2">User:</label>
    <input id="user-2" type="text" value="misteroom">
  </p>
  <p>
    <label for="email-2">Email:</label>
    <input id="email-2" type="email" value="invalid email" style="color:red;border-color:red">
    <span style="color:red;display:flex;align-items:center;gap:.5em;margin-top:.25em">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M236.7,188,148.8,36a24,24,0,0,0-41.6,0h0L19.3,188A23.9,23.9,0,0,0,40,224H216a23.9,23.9,0,0,0,20.7-36ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z"></path></svg>
      This value is not correct
    </span>
  </p>
</figure>

## More info

- [We Can’t Rely on Color](https://www.sitepoint.com/cant-rely-color/)
- [Usability Tip: Don’t Rely on Color to Convey Your Message](https://uxmag.com/articles/usability-tip-dont-rely-on-color-to-convey-your-message)
