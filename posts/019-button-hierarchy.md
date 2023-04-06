---
title: 019 — Use only one primary button per screen.
tags:
  - UI
  - button
---

The primary button is the most important in the interface. You have to
prioritize the CTAs to have only one primary button at the same time.

<!-- more -->

<figure>
  <button class="button is-primary">
    Primary button
  </button>
  <button class="button is-secondary">
    Secondary button
  </button>
  <button class="button is-tertiary">
    Tertiary button
  </button>
</figure>

The prioritization can be done according to different criteria:

## The main action of the screen

The main action of a login screen is (surprise) to log in. So the submit button
should be the primary action.

<figure>
<p>
  <label>
    Name:<br>
    <input type="text">
  </label>
</p>
<p>
  <label>
    Password:<br>
    <input type="text">
  </label>
</p>
<p>
  <button class="button is-primary">
    Log in
  </button>
  <button class="button is-secondary">
    Cancel
  </button>
</p>
</figure>

## The most common action

If we have different actions at the same level, choose the most common action or
the one that you are most interested in promoting. For example, if most of the
users have an account, the most common action is to log in to the app:

<figure>
<p>
  <button class="button is-primary">
    Log in
  </button>
  <button class="button is-secondary">
    Create account
  </button>
</p>
</figure>

But if your product is new or has only a few users and you want to improve this,
you can promote the user registration:

<figure>
<p>
  <button class="button is-primary">
    Create account
  </button>
  <button class="button is-secondary">
    Log in
  </button>
</p>
</figure>
