# How to use

```pug
//- checkbox:

//- checkbox default:
div(class='control')
  input(
    class='control__system-control'
    type='checkbox'
    id='lastname1')
  label(
    class='control__label control__label_checkbox'
    for='lastname1') Milk
  div(class='control__tip text text_line-height_lg text_color_gray-light text_size_sm') Text text text

//- checkbox _validation modifier:
div(class='control')
  input(
    class='control__system-control control__system-control_validation'
    type='checkbox'
    id='lastname2')
  label(
    class='control__label control__label_checkbox'
    for='lastname2') Milk
  div(class='control__tip text text_line-height_lg text_color_danger text_size_sm') Teip text Made in the interiors of collapsing stars star stuff harvesting star light venture billions upon billions Drake Equation brain is the seed of intelligence?

//- checkbox _disabled modifier:
div(class='control')
  input(
    class='control__system-control control__system-control_disabled'
    type='checkbox'
    id='lastname3' disabled)
  label(
    class='control__label control__label_checkbox'
    for='lastname3') Milk
  div(class='control__tip text text_line-height_lg text_color_disabled text_size_sm') Teip text Made in the interiors of collapsing stars star stuff harvesting star light venture billions upon billions Drake Equation brain is the seed of intelligence?




//- radio:

//- default checked:
div(class='control')
  input(
    class='control__system-control'
    id='radio1'
    type='radio'
    name='radio'
    value=''
    checked='checked')
  label(
    class='control__label control__label_radio'
    for='radio1') Milk
  div(class='control__tip  text text_line-height_lg text_color_gray-light text_size_sm') Text text text

//- validation modifier
div(class='control')
  input(
    class='control__system-control control__system-control_validation'
    type='radio'
    id='radio2'
    name='radio')
  label(
    class='control__label control__label_radio'
    for='radio2') Milk
  div(class='control__tip text text_line-height_lg text_color_gray-light text_size_sm') It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

//- disabled modifier
div(class='control')
  input(
    class='control__system-control control__system-control_disabled'
    id='radio3'
    type='radio'
    name='radio'
    disabled)
  label(
    class='control__label control__label_radio'
    for='radio3') Milk
  div(class='control__tip text text_line-height_lg text_color_gray-light text_size_sm') Text text text






//- switch:

div(class='control control_switch')
  input(
    class='control__system-control'
    id='switch1'
    type='checkbox'
    name='switch')
  label(
    class='control__label control__label_switch'
    for='switch1') Milk
  div(class='control__tip text text_line-height_lg text_color_gray-light text_size_sm') Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book

//- switch validation modifier
div(class='control control_switch')
  input(
    class='control__system-control control__system-control_validation'
    id='switch2'
    type='checkbox'
    name='switch')
  label(
    class='control__label control__label_switch'
    for='switch2') Milk
  div(class='control__tip text text_line-height_lg text_color_gray-light text_size_sm') Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book

//- switch validation modifier
div(class='control control_switch')
  input(
    class='control__system-control control__system-control_disabled'
    id='switch3'
    type='checkbox'
    name='switch'
    disabled)
  label(
    class='control__label control__label_switch'
    for='switch3') Milk
  div(class='control__tip text text_line-height_lg text_color_gray-light text_size_sm') Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
```
