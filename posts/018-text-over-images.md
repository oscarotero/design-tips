---
title: 018 — Text over images
tags:
  - UI
---

When designing headers with background images, is important to ensure a minimum contrast between the text and the image. A common way to achieve that is by using a gradient.

<!-- more -->

In the following example, the text is hard to read, especially when the white text matches the foam of the water:

<figure style="padding:0;position:relative;">
  <img src="/img/thilak-mohan-_LfLA5Nqfko-unsplash.jpg" style="display:block;width:100%">

  <figcaption style="position:absolute;bottom:0;padding:2em;font-weight:bold;color:white;font-size:2rem;line-height:1.1">
    <a href="https://unsplash.com/es/fotos/_LfLA5Nqfko" style="color:inherit;text-decoration:none">Nusa Penida, Klungkung Regency, Bali.</a>
  </figcaption>
</figure>

We can use a linear gradient behind the text to ensure a minimum contrast:

<figure style="padding:0;position:relative;">
  <img src="/img/thilak-mohan-_LfLA5Nqfko-unsplash.jpg" style="display:block;width:100%">

  <figcaption style="position:absolute;bottom:0;padding:3em 2em 2em;font-weight:bold;color:white;font-size:2rem;line-height:1.1;background:linear-gradient(to bottom,transparent,#000a 2.5em)">
    <a href="https://unsplash.com/es/fotos/_LfLA5Nqfko" style="color:inherit;text-decoration:none">Nusa Penida, Klungkung Regency, Bali.</a>
  </figcaption>
</figure>
