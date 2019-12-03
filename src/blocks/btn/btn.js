import { webinarSignupModal } from '../webinar-signup-modal/webinar-signup-modal';
import { videoModal } from '../video-modal/video-modal';

class Btn {
  constructor(config) {
    this._config = config;

    this.modal = this._config.modalInstance;
    this._btn = this.findElByID(this._config.IDs.btn);
    //this._modal = this.findElByClass(this._config.classes.modal);

    this._btn.addEventListener('click', e =>
      this.onClick(e, this.modal.dialog)
    );
  }

  onClick(e, dialog) {
    const btn = e.target;

    if (btn.dataset.modal) {
      e.preventDefault();
      this.modal.openModal(dialog);
      console.log('onclick Btn');
    }
  }

  findElByID(id) {
    return document.querySelector(`#${id}`);
  }

  findElByClass(className) {
    return document.querySelector(`.${className}`);
  }
}

const webinarSignupTriggerBtn = new Btn({
  IDs: {
    btn: 'webinar-signup-trigger-btn',
    dialog: 'webinar-sign-up-dialog',
  },
  classes: {
    modal: 'modal_webinar-signup', // modal bg
  },
  modalInstance: webinarSignupModal,
});

const videoTrigger = new Btn({
  IDs: {
    btn: 'video-trigger-btn',
    dialog: 'video-dialog',
  },
  classes: {
    modal: 'modal_video', // modal bg
  },
  modalInstance: videoModal,
});

const orderBtn = new Btn({
  IDs: {
    btn: 'order-trigger-btn',
    dialog: 'confirm-order-dialog',
  },
  classes: {
    modal: 'modal_confirm-order', // modal bg
  },
  modalInstance: videoModal,
});

export { Btn };
