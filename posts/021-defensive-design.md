---
title: 021 — Destructive actions should be secondary
date: 2023-05-02T16:03:16
tags:
  - UI
---

Sometimes people use interfaces automatically, without paying too much attention
to the copies in the interface. Especially heavy users that only want to get
things done as soon as possible, so they press Enter and accept all steps
without thinking.

<!-- more -->

Destructive actions (those actions that cannot be undone) should be designed
keeping in mind this automatic mode, to prevent losing things accidentally. We
can call this mode _defensive design_.

In defensive design, the destructive actions should require some extra attention
from the user. For example, let's see the following confirmation:

<figure>
  <p>
    Are you sure you want to delete this item?
  </p>

<button class="button is-primary">Yes, delete</button>
<button class="button is-secondary">No, keep it</button>

</figure>

Here, the primary button is to delete the item. If the user press Enter, this
item will be removed and there's no way to undo this action.

In a defensive design, the default action should be to keep the item:

<figure>
  <p>
    Are you sure you want to delete this item?
  </p>

<button class="button is-primary">No, keep it</button>
<button class="button is-secondary">Yes, delete</button>

</figure>

Now the primary button is to maintain the item, so the worst thing that would
happen to the user if pressing Enter without thinking about the consequences is
to don't delete the item.
