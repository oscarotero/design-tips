---
title: 017 — When to use radio buttons or selects
tags:
  - UI
  - forms
---

Select and radio buttons are two interchangeable components to select one of the
available options. The `select` components allow the inclusion of several
options in the same space, while `radio` buttons take more space but all options
are visible.

## When there are a few options

The drawback of using selects is the available options are hidden, so the user
must open the selector to discover what options can choose. If the number of
options is low (2 to 4 for example), it's much better to use radio buttons. This
is an example of a `select` with only 2 options:

<figure>
<label>
  <p>Where do you want to receive the package?</p>
  <select>
    <option selected>At home</option>
    <option>At the office</option>
  </select>
</label>
</figure>

`radio` buttons make more sense here because the available options are visible
to the user:

<figure>
  <p>Where do you want to receive the package?</p>
  <label><input type="radio" name="package" value="home" checked> At home</label><br>
  <label><input type="radio" name="package" value="office"> At the office</label>
</figure>

## When an option is highly recommended

If an option is recommended for most users and it's unlikely to change, it's
better to use a `select` with this option selected. In the following example,
the default option is the most appropriate for most users while the other
options are only reserved for advanced users. `radio` buttons give a lot of
visibility to options that most users don't use or understand.

<figure>
  <p>Save changes automatically?</p>
  <label><input type="radio" name="changes" value="auto" checked> Yes (recommended)</label><br>
  <label><input type="radio" name="changes" value="manual"> No, save manually</label><br>
  <label><input type="radio" name="changes" value="none"> Never save changes</label>
</figure>

Using a `select`, even for only 3 options, will hide the advanced options
(preventing accidentally data lost due to not saving the changes) and save space
in the interface:

<figure>
  <label>
    <p>Save changes automatically?</p>
    <select>
      <option selected>Yes (recommended)</option>
      <option>No, save manually</option>
      <option>Never save changes</option>
    </select>
  </label>
</figure>
