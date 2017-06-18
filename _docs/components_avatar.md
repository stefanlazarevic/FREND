# Avatar image

> This is the list of all usable classes for styling avatar image on your comments, blog posts, chats, profiles etc.

```css
.avatar

.avatar--small

.avatar--large

.avatar--round

.avatar-small--round

.avatar-large--round
```

If your avatar image needs to be changeable for example profile image, add attribute tag ``data-avatar-upload="true"`` And include JS script in your app.js file.

```javascript
const { avatar, avatar_init } = require('./components/avatar.js');

if(avatar) avatar_init(avatar); /* Initialize upload avatar image. */
```

### Avatar - Building blocks

> Pug syntax

```pug
/- Static avatar image

.avatar
  img(src="img/avatar/avatar.jpg" alt="Stefan Lazarevic")

/- Avatar image with image uploader.

.avatar-large--round(data-avatar-upload="true")
  img(src="img/avatar/avatar.jpg" alt="Stefan Lazarevic")
```

> HTML syntax

```HTML
<!-- Static avatar image -->

<div class="avatar">
  <img src="img/avatar/avatar.jpg" alt="Stefan Lazarevic"/>
</div>

<!-- Avatar image with image uploader. -->

<div class="avatar-large--round" data-avatar-upload="true">
  <img src="img/avatar/avatar.jpg" alt="Stefan Lazarevic"/>
</div>
```
