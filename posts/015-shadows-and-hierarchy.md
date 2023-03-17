---
title: 015 — Shadows and hierarchy
tags:
  - UI
  - shadows
---

Shadows in an interface should behave like shadows in real life. Elements closer
to the user's point of view are more "elevated" so they should have a bigger and
blurry shadow than elements away from the user, that are closer to the interface
background.

<!--more -->

<figure style="display:grid;">
  <p style="padding:1em;background:white;grid-area:1/1/3/3;box-shadow:0 2px 4px #0004">
    This element is closer to the background, it has a smaller shadow.
  </p>
  <p style="padding:1em;background:white;grid-area:2/2/4/4;box-shadow:0 4px 16px #0004">
    This element is closer to the user, it's more elevated and has a bigger shadow.
  </p>
</figure>
