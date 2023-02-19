---
title: 008 - When use switch and checkbox?
tags:
  - UI
  - forms
---

Switches and checkboxes are form controls to enable or disable options. The main
difference is the expected behavior after changing the state:

<!-- more -->

- The checkbox, like any other form input, requires a button to submit the
  selection, so it should be used to select/unselect different options.
- The switch must have an immediate effect, so it suits better to enable/disable
  features. Technically it's not an input but a button because the new state is
  submitted on clicking it.

In the following example, we use checkboxes to select different options. We need
a button to submit the selection:

<figure style="display:grid;gap:1em;justify-items:start;">
  <label><input type="checkbox"> Filloas</label>
  <label><input type="checkbox"> Potatoes</label>
  <label><input type="checkbox"> Tortilla</label>
  <label><input type="checkbox"> Cheescake</label>
  <button class="button is-primary">Submit selection</button>
</figure>

This is an example to enable/disable some features and the effect is immediate,
so we don't have a button to submit. We use switches:

<figure style="display:grid;gap:1em;justify-items:start;">
  <button role="switch" onclick="this.setAttribute('aria-checked', this.getAttribute('aria-checked') === 'true' ? 'false' : 'true')">Enable WIFI</button>
  <button role="switch" onclick="this.setAttribute('aria-checked', this.getAttribute('aria-checked') === 'true' ? 'false' : 'true')">Enable alarm</button>
  <button role="switch" onclick="this.setAttribute('aria-checked', this.getAttribute('aria-checked') === 'true' ? 'false' : 'true')">Superuser mode</button>
</figure>

## More info

[¿Checkboxes o interruptores en formularios para móvil?](https://www.torresburriel.com/weblog/2018/07/27/checkboxes-o-interruptores-en-movil/)
