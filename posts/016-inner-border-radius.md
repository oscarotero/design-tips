---
title: 016 — Adjust the rounded corners of inner elements
tags:
  - UI
---

The radius of the rounded corners (also known as `border-radius` in CSS) of
elements inside other elements with also rounded corners should be adjusted
taking into account the gap.

<!--more -->

In the following example, we have a pink element containing 3 purple elements.
All elements have `border-radius: 20px`. Note how the inner elements don't fit
well with the corners of the container.

<figure>
  <div style="border-radius:20px;padding:10px;background-color:pink;display:flex;gap:10px;">
  <div style="border-radius:20px;padding:20px;background-color:purple;color:white;flex:1">One</div>
  <div style="border-radius:20px;padding:20px;background-color:purple;color:white;flex:1">Two</div>
  <div style="border-radius:20px;padding:20px;background-color:purple;color:white;flex:1">Three</div>
  </div>
</figure>

The radius depends on the existing gap between the outer and inner elements and
the formula is `Container radius - Gap`.

In this example the gap is `10px`, so we have to do `20px - 10px = 10px`.

<figure>
  <div style="border-radius:20px;padding:10px;background-color:pink;display:flex;gap:10px;">
    <div style="border-radius:10px;padding:20px;background-color:purple;color:white;flex:1">One</div>
    <div style="border-radius:10px;padding:20px;background-color:purple;color:white;flex:1">Two</div>
    <div style="border-radius:10px;padding:20px;background-color:purple;color:white;flex:1">Three</div>
  </div>
</figure>

The `10px` of corner radius fits much better with the corners of the containers.

Sometimes is fine to adjust this value to correct some optical effects. For
example, after adding `2px` more, the corners look better.

<figure>
  <div style="border-radius:20px;padding:10px;background-color:pink;display:flex;gap:10px;">
    <div style="border-radius:12px;padding:20px;background-color:purple;color:white;flex:1">One</div>
    <div style="border-radius:12px;padding:20px;background-color:purple;color:white;flex:1">Two</div>
    <div style="border-radius:12px;padding:20px;background-color:purple;color:white;flex:1">Three</div>
  </div>
</figure>
