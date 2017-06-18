# List

> This is the list of all usable classes for styling ul, ol, li elements.

```css
.list

.list--horizontal

.list__header

.list__item /* Append on list item <li> */
```

### List - Building blocks

> Pug syntax

```pug
//- Vertical list with header

ul.list
  li.list__header Join our community
  li.list__item Comunity
  li.list__item Blog
  li.list__item Forum
  li.list__item Meetups

//- Horizontal list

ul.list--horizontal
  li.list__item About
  li.list__item Careers
  li.list__item Privacy Policy
```

> HTML syntax

```html
<!-- Vertical list with header -->

<ul class="list">
  <li class="list__header">Join our community</li>
  <li class="list__item">Comunity</li>
  <li class="list__item">Blog</li>
  <li class="list__item">Forum</li>
  <li class="list__item">Meetups</li>
</ul>

<!-- Horizontal list -->

<ul class="list--horizontal">
  <li class="list__item">About</li>
  <li class="list__item">Careers</li>
  <li class="list__item">Privacy Policy</li>
</ul>

```
