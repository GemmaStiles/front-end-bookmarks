---
title: "display: contents"
short_desc: "An element doesn't generate any boxes, but its children still do."
tags:
  - css
  - properties
  - entry
permalink: css/properties/{{ title | slug }}/index.html
definition:
  text: "The element itself does not generate any boxes, but its children and pseudo-elements still generate boxes and text runs as normal. "
  cite:
    text: "2.5. Box Generation: the none and contents keywords"
    url: https://www.w3.org/TR/css-display-3/#box-generation
links: "displaycontents"
---

<h3><span>Code sample</span></h3>

```css
ul {
  display: contents;
}
```
