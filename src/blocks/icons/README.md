# How to use

The path inside `<use>` element should be relative to webpack `build` folder, not to `icons` component folder

- github

```pug
a(
  href='https://github.com/ponomarevandrey'
  class='icons'
  aria-hidden='true'
  focusable='false'
  title='Github'
)
  span(class='icons__access-label') Github
  svg(class=`icons__img icons__img_size_md icons__img_color_black`)
    use(xlink:href='./img/sprite.svg#github')
```

- facebook

```pug
a(
href=`https://github.com/ponomarevandrey`
class='icons'
aria-hidden='true'
focusable='false'
title='Facebook'
)
span(class='icons__access-label') Facebook
svg(class=`icons__img icons__img_size_md icons__img_color_black`)
  use(xlink:href='./img/sprite.svg#facebook')
```

- instagram

```pug
a(
  href=`https://github.com/ponomarevandrey`
  class='icons'
  aria-hidden='true'
  focusable='false'
  title='Instagram'
)
  span(class='icons__access-label') Instagram
  svg(class=`icons__img icons__img_size_md icons__img_color_black`)
    use(xlink:href='./img/sprite.svg#instagram')
```

- odnoklassniki

```pug
a(
  href=`https://github.com/ponomarevandrey`
  class='icons'
  aria-hidden='true'
  focusable='false'
  title='Odnoklassniki'
)
  span(class='icons__access-label') Odnoklassniki
  svg(class=`icons__img icons__img_size_md icons__img_color_black`)
    use(xlink:href='./img/sprite.svg#odnoklassniki')
```

- telegram

```pug
a(
  href=`https://github.com/ponomarevandrey`
  class='icons'
  aria-hidden='true'
  focusable='false'
  title='Telegram'
)
  span(class='icons__access-label') Telegram
  svg(class=`icons__img icons__img_size_md icons__img_color_black`)
    use(xlink:href='./img/sprite.svg#telegram')
```

- twitter

```pug
a(
  href=`https://github.com/ponomarevandrey`
  class='icons'
  aria-hidden='true'
  focusable='false'
  title='Twitter'
)
  span(class='icons__access-label') Twitter
  svg(class=`icons__img icons__img_size_md icons__img_color_black`)
    use(xlink:href='./img/sprite.svg#twitter')
```

- youtube

```pug
a(
  href=`https://github.com/ponomarevandrey`
  class='icons'
  aria-hidden='true'
  focusable='false'
  title='YouTube'
)
  span(class='icons__access-label') YouTube
  svg(class=`icons__img icons__img_size_md icons__img_color_black`)
    use(xlink:href='./img/sprite.svg#youtube')
```

- vkontakte

```pug
a(
  href=`https://github.com/ponomarevandrey`
  class='icons'
  aria-hidden='true'
  focusable='false'
  title='VKontakte'
)
  span(class='icons__access-label') VKontakte
  svg(class=`icons__img icons__img_size_md icons__img_color_black`)
    use(xlink:href='./img/sprite.svg#vkontakte')
```
