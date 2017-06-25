# Button

> This is the list of all usable classes for styling a and button elements.

```css
.btn

.btn--ghost

.btn-icon--left

.btn-icon--right

.btn__icon /* Icon inside button. */

.btn--icon /* Single icon button. ex social button. */

/* Button align */

.btn--left

.btn--center

.btn--right
```

## Code markup for button.

> Pug Syntax

```pug

/* Normal button. */
button(type="submit").btn Submit

/* or */

a(href="#").btn Submit

/* Button with icon left. */

.form__group  
  button(type="submit").btn-icon--left.btn--google Sign up with google
    .btn__icon.icon--google

/* Small buttons with icon. */

.form__group
  a(href="#").btn--icon.btn--facebook.icon--facebook
  a(href="#").btn--icon.btn--tumblr.icon--tumblr
  a(href="#").btn--icon.btn--pinterest.icon--pinterest

```

> HTML Syntax

```HTML

```
