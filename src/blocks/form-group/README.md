# How to use

- `<input>` form:

  ```pug
  div(class='form-group')
    label(
      class='form-group__label'
      for='name') A long sentence you're forced to read to understand what this stupid form wants from you
    div(class='form-group__container')
      input(
        class='form-group__input'
        type='text'
        id='name'
        name='name'
        placeholder='Your name')
      div(class='form-group__tip text text_line-height_lg text_color_gray-light text_size_sm') Help text Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle
  ```

- search form:

  ```pug
  div(class='form-group form-group_row' style='width: 100%;')
    label(
      class='form-group__label'
      for='name') Search
    div(class='form-group__container')
      input(
        class='form-group__input form-group__input_type_search'
        type='text'
        id='name'
        name='name'
        placeholder='Search...')
  ```

- grouped form controls with `<fieldset>` element (see notes in **Notes** section below):

  ```pug
  fieldset(class='form-group-wrapper')
  div(class='form-group form-group_row')
    legend(class='form-group__label') First name

    div
      div(class='form-group__container control')
        input(
          class='control__system-control'
          id='f1'
          type='radio'
          value='1'
          name='group1')
        label(
          class='control__label control__label_radio'
          for='f1') Help text Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing and typesetting !!!
        div(class='control__tip text text_line-height_lg text_color_gray-light text_size_sm') Text text text

      div(class='form-group__container control')
        input(
          class='control__system-control'
          id='f2'
          type='radio'
          value='2'
          name='group1')
        label(
          class='control__label control__label_radio'
          for='f2') Milk
        div(class='control__tip text text_line-height_lg text_color_gray-light text_size_sm') Help text Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing and typesetting

      div(class='form-group__container control')
        input(
          class='control__system-control'
          id='f3'
          type='radio'
          value='3'
          name='group1')
        label(
          class='control__label control__label_radio'
          for='f3') Milk
        div(class='control__tip text text_line-height_lg text_color_gray-light text_size_sm') Text text text
  ```

# Notes

If we use the `<fieldset>` tag, we need to assign it a special `form-group-wrapper` class, to fix the width problem. Then we wrap `form-group` block in `form-group-wrapper`.

```pug
.form-group-wrapper {
  width: 100%;
}
```

```pug
fieldset(class='form-group-wrapper')
  div(class='form-group form-group_row')
    legend(class='form-group__label') First name

    div
      div(class='form-group__container control')
        //- ...
      div(class='form-group__container control')
        //- ...
      div(class='form-group__container control')
        //- ...
      //- ...
```

This is the only case when the `form-group` block needs `form-group-wrapper`. In all other cases, we use `form-group` without this wrapper block.

Note that we also added a `<div>` without any class, this is another wrapper element we need to keep everything consistent
