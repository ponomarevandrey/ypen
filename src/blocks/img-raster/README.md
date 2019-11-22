# How to use

```pug
figure(class='img-raster')
  picture(class='img-raster__wrapper')
    img(
      class='img-raster__img'

      src="./../img/animals_landscape_lg.jpg"

      sizes="(min-width: 1800px) 100vw, (min-width: 1200px) 100vw, (min-width: 992px) 100vw, (min-width: 768px) 100vw, (min-width: 480px) 100vw, (min-width: 0) 100vw, 100vw"

      srcset="./../img/animals_landscape_sm.jpg 480w, ./../img/animals_landscape_md.jpg 768w, ./../img/animals_landscape_lg.jpg 992w, ./../img/animals_landscape_xl.jpg 1200w, ./../img/animals_landscape_xxl.jpg 1800w, ./../img/animals_landscape_xxxl.jpg 2000w"

      alt='Ships in the Field')
  figcaption(class='img-raster__caption').
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
```

In the code above:

- `srcset` and `sizes` in `<img>` element traditionally solve resolution switching problem

- `src` is a fallback value for browsers which doesn't support `sizes` and `srcset` attributes

- `sizes` attribute lists the widths of the image that would best fit the layout under different media conditions: the very last value (`100vw`) is default width, it applies when none of the media conditions match. In a nutshell, `sizes = [media querie] [display the image chosen from 'srcset' at this size]`

- The order of sizes in media queries (in `sizes` attribute) does matter!

  If your media queries use only `min-width`, then start from the largest media query and move down to the smallest. Otherwise, the first-mentioned media query (`media-width: 0;`) will be applied in ANY situation, making any following media queries senseless

- All `100vw` values mentioned below in `sizes` attribute can be safely removed and it won't affect anything, cause if the value is omitted, it implicitly defaults to the same `100vw`. I defined `100vw` explicitly just for the sake of showing the possibility to change this value. But again: do this only if you REALLY NEED it. Otherwise, for changing image width, edit `max-width` property of `.image` class in SCSS file, it will change not only the width of the image but the width of the whole container (with `figcaption` block)

- Note: although we set every media quiery in `sizes` to `100vw`, the image width is not actually 100% of viewport width cause it is constrained by CSS property `max-width: 100%;`, set on `'image__img'` element. Also the width can be constrained even further by the parent block's (`.image`) width
