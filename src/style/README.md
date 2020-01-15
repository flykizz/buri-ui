# Built-in Style

### Intro

Buri contains some common styles that can be used directly by the className.

### Text ellipsis

When the text content length exceeds the maximum container width, the excess text is automatically omitted.

```html
<div class="buriellipsis">
  This is a paragraph that displays up to one line of text, and the rest of the text will be omitted.
</div>

<div class="burimulti-ellipsis--l2">
  This is a paragraph that displays up to two lines of text, and the rest of the text will be omitted.
</div>

<div class="burimulti-ellipsis--l3">
  This is a paragraph that displays up to three lines of text, and the rest of the text will be omitted.
</div>
```

### Hairline

Add 1px border under the Retina screen for the element, based on a pseudo element.

```html
<!-- border top -->
<div class="burihairline--top"></div>

<!-- border bottom -->
<div class="burihairline--bottom"></div>

<!-- border left -->
<div class="burihairline--left"></div>

<!-- border right -->
<div class="burihairline--right"></div>

<!-- border top & bottom -->
<div class="burihairline--top-bottom"></div>

<!-- full border -->
<div class="burihairline--surround"></div>
```

### Animation

```html
<!-- fade in  -->
<transition name="burifade">
  <div v-show="visible">Fade</div>
</transition>

<!-- slide up -->
<transition name="burislide-up">
  <div v-show="visible">Slide Up</div>
</transition>

<!-- slide down -->
<transition name="burislide-down">
  <div v-show="visible">Slide Down</div>
</transition>

<!-- slide left -->
<transition name="burislide-left">
  <div v-show="visible">Slide Left</div>
</transition>

<!-- slide right -->
<transition name="burislide-right">
  <div v-show="visible">Slide Right</div>
</transition>
```
