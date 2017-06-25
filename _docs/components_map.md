# Google Map

> Explanation how to quickly integrate google map in your application.

There are two available classes for styling your map.

```css
.map

.map--grey
```

> Pug syntax

To create your google map first create pug / HTML element using following snippet.

```pug
div(class="map" data-map="google")
```

> HTML syntax

```HTML
<div class="map--grey" data-map="google"></div>
```

Google map creates using Google API script. To include API script inside your page add following snippet to your ``scriptBefore`` block.

```pug

//- Replace [your API key] with your key from: https://developers.google.com/maps/documentation/javascript/

script(src="https://maps.googleapis.com/maps/api/js?key=[your API key]&callback=initMap" async="async" defer="defer")

//- Working example

block scriptBefore
  script(src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDc2TAdhkc9WhIBZ5dO_FAeoetPsiGOqFE&amp&callback=initMap" async="async" defer="defer")
```

To make google map functional include script in your ``scriptAfter`` block

```pug
block scriptAfter
  +gmap__script
```
