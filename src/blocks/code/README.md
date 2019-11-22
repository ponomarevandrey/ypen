# How to use

- inline code:

```pug
code(class='code code_display_inline text text_size_sm code_theme_gray') console.log( a ) !!!;
```

- block code:

```pug
pre(class='code code_display_block text text_size_sm code_theme_gray')
  code.
    window.addEventListener( 'load', => {
      console.log('Ready');
    })}
```
