import { FormGroup } from '../form-group/form-group';
import { orderBtn } from '../order-btn/order-btn';

class ConfirmOrderModal {
  constructor(config) {
    this._config = config;

    this._backdrop = document.querySelector(
      `.${this._config.classes.backdrop}`
    );

    this._closeBtn = document.querySelector(
      `.${this._config.classes.closeBtn}`
    );
  }

  onClick(e) {
    const clickedEl = e.target;

    if (clickedEl === this._backdrop || clickedEl === this._closeBtn) {
      this.closeModal();
    }

    if (clickedEl.dataset.modal) {
      e.preventDefault();
      this.openModal(clickedEl);
    }
  }

  showDialog(dialog) {
    dialog.classList.add(this._config.classes.dialogStateModifier);
  }

  hideDialog(dialog) {
    dialog.classList.remove(this._config.classes.dialogStateModifier);
    console.log('runs');
  }

  toggleBackdrop() {
    this._backdrop.classList.toggle(this._config.classes.backdropStateModifier);
  }

  openModal(el) {
    this.toggleBackdrop();

    this.showDialog(el);
    document.body.style.overflow = 'hidden';
  }

  closeModal(el) {
    this.toggleBackdrop();

    this.hideDialog(el);
    document.body.style.overflow = '';
    return;
  }
}

const config = {
  /* all class names used in HTML related to modal window component: */
  classes: {
    backdrop: 'webinar-signup-modal',
    backdropStateModifier: 'webinar-signup-modal_visible',
    dialogStateModifier: 'confirm-order-modal__dialog_visible',
    closeBtn: 'webinar-signup-modal__close-btn',
  },
};

const confirmOrderModal = new ConfirmOrderModal(config);

export { confirmOrderModal };
