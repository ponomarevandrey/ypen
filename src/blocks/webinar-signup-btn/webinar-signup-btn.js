import { modal } from '../modal/modal.js';

class WebinarSignupBtn {
  constructor(config) {
    this._config = config;

    this._webinarSignupBtn = document.querySelector(`#${config.btnID}`);
    this._webinarSignupBtn.addEventListener('click', e => this.onClick(e));
  }

  onClick(e) {
    this._webinarSignupBtn.textContent = 'Спасибо!';

    setTimeout(() => {
      modal.closeModal();
      this._webinarSignupBtn.textContent = 'Записаться на вебинар';
    }, this._config.timeoutBeforeBtnTextChange);
  }
}

const config = {
  btnID: 'webinar-sign-up-btn',
  timeoutBeforeBtnTextChange: 1200,
};

const webinarSignupBtn = new WebinarSignupBtn(config);
