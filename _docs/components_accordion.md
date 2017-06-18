# Accordion

> This is the list of all usable classes for styling accordions for categories, FAQ etc.

```css
.accordion /* Main accordion wrapper */

.accordion__header /* Visible part of accordion. */

.accordion__content /* Hidden part of accordion. All of the content goes in here. */
```

> To make your accordion fully functional put data attribute on accordion wrapper.
  There are two types of accordion included with template. Multiple items opened at the same time and single item opened. Give your accordion a functionality using one of two available attributes.
  ``data-accordion="single"`` or ``data-accordion="multiple"``
  In your JS file include script for initializing all accordions on page.

```javascript
const { accordion__single, accordion__multiple, accordion__init } = require('./components/accordion.js');

if(accordion__single) accordion__init(accordion__single);
if(accordion__multiple) accordion__init(accordion__multiple, 'multiple');
```

### Accordion - Building blocks

> Pug syntax

```pug
//- Single item accordion.

.accordion(data-accordion="single")
  .accordion__header Click me
    .accordion__content
      p Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
        | piece of classical Latin literature from 45 BC, making it over 2000 years old.
  .accordion__header Click me 2
    .accordion__content
      p Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
        | piece of classical Latin literature from 45 BC, making it over 2000 years old.

//- Multiple items accordion.

.accordion(data-accordion="multiple")
  .accordion__header Click me
    .accordion__content
      p Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
        | piece of classical Latin literature from 45 BC, making it over 2000 years old.
  .accordion__header Click me 2
    .accordion__content
      p Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
        | piece of classical Latin literature from 45 BC, making it over 2000 years old.
```

> HTML syntax

```html
<!-- Single item accordion. -->

<div class="accordion" data-accordion="single">
  <div class="accordion__header">Click me
    <div class="accordion__content">
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in apiece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
    </div>
  </div>
  <div class="accordion__header">Click me 2
    <div class="accordion__content">
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in apiece of classical Latin literature from 45 BC, making it over 2000 years old.   </p>
    </div>
  </div>
</div>

<!-- Multiple items accordion. -->

<div class="accordion" data-accordion="multiple">
  <div class="accordion__header">Click me
    <div class="accordion__content">
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in apiece of classical Latin literature from 45 BC, making it over 2000 years old.
      </p>
    </div>
  </div>
  <div class="accordion__header">Click me 2
    <div class="accordion__content">
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in apiece of classical Latin literature from 45 BC, making it over 2000 years old.
      </p>
    </div>
  </div>
</div>

```
