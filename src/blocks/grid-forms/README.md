# How to use

To arrange forms across the grid put all `form-group`-blocks you need in parent `grid-forms`-block. Thus, all `form-group` blocks become grid items. Here is an example:

```pug
form(class='grid-forms' action='' method='')
  div(class='form-group')
    //- ...
  div(class='form-group')
    //- ...
  div(class='form-group')
    //- ...
  div(class='form-group')
    //- ...

  //- ...
```
