# Form

> This is the list of all usable classes for styling form elements.

```css
.form

.form--error /* Append class on form group with error or complete form. */

.form__validation /* Append class on span or div that contains error message. */

.form__group /* Block wrapper */

.form__group-icon--left /* Block wrapper with icon inside positioned left. */

.form__group-icon--right /* Block wrapper with icon inside positioned right. */

.form__label

.form__label--inline

.form__input

.form__input--password

.form__textarea

.form__select

.form-select__arrow

.form__checkbox

.form__radio

.form__switch
```

### Form - Building blocks

> Pug syntax

```pug
/* Simple form */

.form__group
  label.form__label First name
  input.form__input

/* Form input with icon inside. */

.form__group-icon--left
  span.icon.icon-mail
  input.form__input

/* Form group with validation message. */

.form__group-icon--left.form--error
  span.icon.icon-lock
  input.form__input--password(type="password" placeholder="Password")
  span.form__validation Password field is required

/* Select */

.form__group
  select.form__select
    option Option 1
    option Option 2
    option Option 3

/* Checkbox. */

.form__group
  input(type="checkbox" id="checkbox").form__checkbox
  label(for="checkbox") Remember me

/* Radio button */

.form__group
  input(type="radio" id="radio1" name="radio").form__radio
  label(for="radio1") Item 1
  input(type="radio" id="radio2" name="radio").form__radio
  label(for="radio2") Item 2

/* Switch button */

.form__group
  input(type="checkbox" id="switch").form__switch
  label(for="switch")

```

> HTML syntax

```HTML
<!-- Simple form -->

<div class="form__group">
  <label class="form__label">First name</label>
  <input class="form__input"/>
</div>

<!-- Form input with icon inside -->

<div class="form__group-icon--left">
  <span class="icon icon-mail"></span>
  <input class="form__input"/>
</div>

<!--  Form group with validation message -->

<div class="form__group-icon--left form--error">
  <div class="icon icon-lock"></div>
  <input class="form__input--password" type="password" placeholder="Password"/>
  <span class="form__validation">Password field is required</span>
</div>

<!-- Select -->

<div class="form__group">
  <select class="form__select">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</div>

<!--  Checkbox -->

<div class="form__group">
  <input class="form__checkbox" type="checkbox" id="checkbox"/>
  <label for="checkbox">Remember me</label>
</div>

<!-- Radio button -->

<div class="form__group">
  <input class="form__radio" type="radio" id="radio1" name="radio"/>
  <label for="radio1">Item 1</label>
  <input class="form__radio" type="radio" id="radio2" name="radio"/>
  <label for="radio2">Item 2</label>
</div>

<!-- Switch button -->

<div class="form__group">
  <input class="form__switch" type="checkbox" id="switch"/>
  <label for="switch"></label>
</div>
```
