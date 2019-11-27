# How to use

pug:
```pug

  button(data-modal='modal-order') Order a pen
  button(data-modal='modal-webinar-sign-up') Webinar sign up
  button(data-modal='modal-video') Video

  div(class='modal-overlay')
    span(class='modal-overlay__close-btn') &times;

    div(class='modal-overlay__window' id='modal-order')
      //- modal content

    div(class='modal-overlay__window modal-overlay__window_video' id='modal-video')
      //- modal content

    div(class='modal-overlay__window' id='modal-webinar-sign-up')
      //- modal content
```

js (in webpack entry point, `index.js`):
```javascript
import './blocks/modal/_modal.scss';
import './blocks/modal/modal.js';
import { config as modalConfig, Modal } from './blocks/modal/modal.js';
new Modal(modalConfig);
```

- button's `id` and modal window's `data-modal` attributes should always be assigned the same value:
  ```pug
  button(data-modal='modal-[your modal window name]') Button text
  ...
         div(... id='modal-[your modal window name]')
  ```

# Config

If you change class names in HTML, you also have to change values in configuration object:

```pug
const config = {
  /* all class names used in HTML related to modal window component: */
  classes: {
    overlay: 'modal-overlay',
    overlayStateModifier: 'modal-overlay_visible',
    modalStateModifier: 'modal-overlay__window_visible',
    closeBtn: 'modal-overlay__close-btn',
    video: 'embed',
  },
  /* clicking elements having this data-attribute will trigger a modal window: */
  trigger: 'data-modal'
};
```