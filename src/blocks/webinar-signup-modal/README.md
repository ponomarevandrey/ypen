# How to use

In `.pug`
```pug

  button(data-modal='modal-order') Order a pen
  button(data-modal='modal-webinar-sign-up') Webinar sign up
  button(data-modal='modal-video') Video

  div(class='modal')
    span(class='modal__close-btn') &times;

    div(class='modal__dialog' id='modal-order')
      //- modal content

    div(class='modal__dialog modal__dialog_video' id='modal-video')
      //- modal content

    div(class='modal__dialog' id='modal-webinar-sign-up')
      //- modal content
```

In `.js` (in webpack entry point, `index.js`):
```javascript
import './blocks/modal/_modal.scss';
import { Modal } from './blocks/modal/modal.js';
new Modal();
```

# Config

Default config object `Modal.config`:

```pug
{
  /* all class names used in HTML related to modal window component: */
  classes: {
    backdrop: 'modal',
    backdropStateModifier: 'modal_visible',
    dialogStateModifier: 'modal__dialog_visible',
    closeBtn: 'modal__close-btn',
    video: 'embed',
  },
};

If you decide to change class names in HTML, you also need to change values in configuration object and in CSS. Here is how you should do it:

```pug
// .js
Modal.config.classes.closeBtn = 'modal__close';
// .pug
span(class='modal__close') &times;
// .scss
&__close { ...
```

# Notes

`id` attributes of triggering buttons and `data-modal` attributes of modal windows should always be assigned the same value:
  ```pug
  button(data-modal='modal-[your modal window name]') Button text
  ...
         div(... id='modal-[your modal window name]')
  ```