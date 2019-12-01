/*
 * Telegram API Doc:
 * https://core.telegram.org/bots/api#available-methods
 *
 * Bot for creating new bots:
 * https://telegram.me/botfather
 * How to use: https://core.telegram.org/bots
 *
 */

import { orderFormGroup } from '../order-form-group/order-form-group';
import { myTelegramBot, ypenTelegramBot } from '../telegram-bot/telegram-bot';
import { confirmOrderModal } from '../confirm-order-modal/confirm-order-modal';

class OrderBtn {
  constructor(config) {
    this._config = config;

    this._orderBtn = document.querySelector(`#${config.btnID}`);
    this._orderBtn.addEventListener('click', e => this.onClick(e));
  }

  onClick(e) {
    const isValid =
      orderFormGroup.validateName(orderFormGroup.name) &&
      orderFormGroup.validateEmail(orderFormGroup.email) &&
      orderFormGroup.validateTel(orderFormGroup.tel) &&
      orderFormGroup.validateAddress(orderFormGroup.address);

    if (true /*isValid*/) {
      const modal = document.querySelector('#modal-confirm-order');

      // orderFormGroup.disableAllInputs();
      // orderFormGroup.displayConfirmMsg();
      // confirmOrderModal.closeModal(modal);
      // this.disableBtn();
      this.sendInputTo(myTelegramBot);

      confirmOrderModal.openModal(modal);
      orderFormGroup.clearAllInputs(
        orderFormGroup.name,
        orderFormGroup.email,
        orderFormGroup.tel,
        orderFormGroup.address
      );
    } else console.log('error');
  }

  disableBtn() {
    this._orderBtn.setAttribute('disabled', '');
    this._orderBtn.classList.add('order-btn_disabled');
  }

  sendInputTo(bot) {
    console.log(bot.authToken, bot.chatID, bot.parseMode, bot.disableNotif);
    const url = `https://api.telegram.org/bot${
      bot.authToken
    }/sendMessage?chat_id=${bot.chatID}&text="${bot.createMsg(
      orderFormGroup.inputsData
    )}"&parse_mode=${bot.parseMode}&disable_notification=${bot.disableNotif}`;

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        throw new Error(error);
      });
  }
}

const config = {
  btnID: 'order-btn',
  timeoutBeforeBtnTextChange: 2000,
};

const orderBtn = new OrderBtn(config);
