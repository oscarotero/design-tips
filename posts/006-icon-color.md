---
title: 006 - Use different colors for text and icons
tags:
  - UI
  - icons
  - color
---

If you have icons following by texts, don't use the same color for both elements, because visually it's more difficult to distinguish.

<!-- more -->

In the following example, the icon and the text have the same color:

<figure>
  <p style="display:flex;align-items:center;gap:1em">
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 256 256"><path d="M160,112a24,24,0,1,1-24-24A24.1,24.1,0,0,1,160,112Zm64-72V216a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V196H32a8,8,0,0,1,0-16H48V156H32a8,8,0,0,1,0-16H48V116H32a8,8,0,0,1,0-16H48V76H32a8,8,0,0,1,0-16H48V40A16,16,0,0,1,64,24H208A16,16,0,0,1,224,40ZM190.4,163.2A67.8,67.8,0,0,0,163,141.5a40,40,0,1,0-54,0,67.8,67.8,0,0,0-27.4,21.7,8,8,0,0,0,1.6,11.2A7.7,7.7,0,0,0,88,176a8,8,0,0,0,6.4-3.2,52,52,0,0,1,83.2,0,8.1,8.1,0,0,0,11.2,1.6A8,8,0,0,0,190.4,163.2Z"></path></svg>
    <strong>Open the contacts book</strong>
  </p>
  <p style="display:flex;align-items:center;gap:1em">
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 256 256"><path d="M224,88a96.2,96.2,0,0,0-15.5-52.4,8.2,8.2,0,0,0-6.7-3.6H54.2a8.2,8.2,0,0,0-6.7,3.6A96.1,96.1,0,0,0,120,183.7V216H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V183.7A96.2,96.2,0,0,0,224,88ZM58.7,48H197.3a78.8,78.8,0,0,1,10.3,32H48.4A78.8,78.8,0,0,1,58.7,48Z"></path></svg>
    <strong>Drink a glass of wine</strong>
  </p>
  <p style="display:flex;align-items:center;gap:1em">
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 256 256"><path d="M132.2,25.2a7.9,7.9,0,0,0-8.4,0A153.5,153.5,0,0,0,96.2,48C77.8,67.1,68,87.9,68,108a60,60,0,0,0,120,0C188,60.1,134.5,26.6,132.2,25.2ZM128,152a23.9,23.9,0,0,1-24-24c0-24,24-40,24-40s24,16,24,40A23.9,23.9,0,0,1,128,152Zm95.6,74.4A8,8,0,0,1,216,232a6.7,6.7,0,0,1-2.4-.4L128,204.4,42.4,231.6a6.7,6.7,0,0,1-2.4.4,8,8,0,0,1-7.6-5.6,7.9,7.9,0,0,1,5.2-10l64-20.4-64-20.4a8,8,0,1,1,4.8-15.2L128,187.6l85.6-27.2a8,8,0,1,1,4.8,15.2l-64,20.4,64,20.4A7.9,7.9,0,0,1,223.6,226.4Z"></path></svg>
    <strong>Light a bonfire</strong>
  </p>
</figure>

This is the same example, but the icons are a bit lighter, so it's easier for the eye to scan the icons and the text separately:

<figure>
  <p style="display:flex;align-items:center;gap:1em">
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#678" viewBox="0 0 256 256"><path d="M160,112a24,24,0,1,1-24-24A24.1,24.1,0,0,1,160,112Zm64-72V216a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V196H32a8,8,0,0,1,0-16H48V156H32a8,8,0,0,1,0-16H48V116H32a8,8,0,0,1,0-16H48V76H32a8,8,0,0,1,0-16H48V40A16,16,0,0,1,64,24H208A16,16,0,0,1,224,40ZM190.4,163.2A67.8,67.8,0,0,0,163,141.5a40,40,0,1,0-54,0,67.8,67.8,0,0,0-27.4,21.7,8,8,0,0,0,1.6,11.2A7.7,7.7,0,0,0,88,176a8,8,0,0,0,6.4-3.2,52,52,0,0,1,83.2,0,8.1,8.1,0,0,0,11.2,1.6A8,8,0,0,0,190.4,163.2Z"></path></svg>
    <strong>Open the contacts book</strong>
  </p>
  <p style="display:flex;align-items:center;gap:1em">
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#678" viewBox="0 0 256 256"><path d="M224,88a96.2,96.2,0,0,0-15.5-52.4,8.2,8.2,0,0,0-6.7-3.6H54.2a8.2,8.2,0,0,0-6.7,3.6A96.1,96.1,0,0,0,120,183.7V216H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V183.7A96.2,96.2,0,0,0,224,88ZM58.7,48H197.3a78.8,78.8,0,0,1,10.3,32H48.4A78.8,78.8,0,0,1,58.7,48Z"></path></svg>
    <strong>Drink a glass of wine</strong>
  </p>
  <p style="display:flex;align-items:center;gap:1em">
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#678" viewBox="0 0 256 256"><path d="M132.2,25.2a7.9,7.9,0,0,0-8.4,0A153.5,153.5,0,0,0,96.2,48C77.8,67.1,68,87.9,68,108a60,60,0,0,0,120,0C188,60.1,134.5,26.6,132.2,25.2ZM128,152a23.9,23.9,0,0,1-24-24c0-24,24-40,24-40s24,16,24,40A23.9,23.9,0,0,1,128,152Zm95.6,74.4A8,8,0,0,1,216,232a6.7,6.7,0,0,1-2.4-.4L128,204.4,42.4,231.6a6.7,6.7,0,0,1-2.4.4,8,8,0,0,1-7.6-5.6,7.9,7.9,0,0,1,5.2-10l64-20.4-64-20.4a8,8,0,1,1,4.8-15.2L128,187.6l85.6-27.2a8,8,0,1,1,4.8,15.2l-64,20.4,64,20.4A7.9,7.9,0,0,1,223.6,226.4Z"></path></svg>
    <strong>Light a bonfire</strong>
  </p>
</figure>