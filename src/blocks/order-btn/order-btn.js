import { modal } from '../modal/modal';

class OrderBtn {
  constructor(config) {
    this._config = config;

    this._orderBtn = document.querySelector(`#${config.btnID}`);
    this._orderBtn.addEventListener('click', e => this.onClick(e));
  }

  onClick(e) {
    this._orderBtn.textContent = 'Спасибо!';

    setTimeout(() => {
      // if (verifyForms)
      // ...
      modal.clearAllInputs();
      this._orderBtn.textContent = 'Заказать';
    }, this._config.timeoutBeforeBtnTextChange);
  }
}

const config = {
  btnID: 'order-btn',
  timeoutBeforeBtnTextChange: 1200,
};

const orderBtn = new OrderBtn(config);
