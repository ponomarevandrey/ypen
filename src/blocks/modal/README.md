# How to use

```pug
  //- button(class='trigger') Click here to trigger the modal

  div(class='modal')
    span(class='modal__close-btn') &times;

    div(id='modal-order' class='modal__content')
      //- modal content

```

`id='modal-order'` is just an example, you can assign any id you like, as long as it is unique. Ids are for JavaScript only, SCSS doesn't rely on them