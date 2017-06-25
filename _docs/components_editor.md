# Code Editor

```css
.editor__container

.editor

.code__line

/* Styling code inside editor */

.key /* keyword */

.comm /* comment */

.var /* variable */

.fun /* function */

.str /* string */
```

Editor comes with functionality of indentation using data attribute ``data-indent="n"`` where 'n' represent number of tabs to indent.

## Code markup for editor.

> Pug syntax

```pug
.editor__container
  table(class="editor" border="0" cellpadding="0" cellspacing="0")
    tbody
      tr
        td.code__line # Your code line.
      //- Indented line for 1 tab.
      tr
        td(data-indent="1").code__line # Your indented code line.
```

> HTML syntax

```html
<div class="editor__container">
  <table class="editor" border="0" cellpadding="0" cellspacing="0">
    <tbody>
      <tr>
        <td class="code__line"># Your code line.</td>
      </tr>
      <tr>
        <!-- Indented line for 1 tab. -->
        <td class="code__line" data-indent="1"># Your indented code line.</td>
      </tr>
    </tbody>
  </table>
</div>
```
