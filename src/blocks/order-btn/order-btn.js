/*
 * Telegram API Doc:
 * https://core.telegram.org/bots/api#available-methods
 *
 * Bot for creating new bots:
 * https://telegram.me/botfather
 * How to use: https://core.telegram.org/bots
 *
 */
import { Btn } from '../btn/btn';

import { confirmOrderModal } from '../confirm-order-modal/confirm-order-modal';
import { myTelegramBot, ypenTelegramBot } from '../telegram-bot/telegram-bot';
import { orderFormGroup } from '../order-form-group/order-form-group';

class OrderBtn extends Btn {
  constructor(config) {
    super(config);
  }

  onClick(e, dialog) {
    const isValid =
      orderFormGroup.validateName(orderFormGroup.name) &&
      orderFormGroup.validateEmail(orderFormGroup.email) &&
      orderFormGroup.validateTel(orderFormGroup.tel) &&
      orderFormGroup.validateAddress(orderFormGroup.address);

    if (isValid) {
      this.sendInputTo(this._config.bot);

      confirmOrderModal.openModal(dialog);
      orderFormGroup.resetInputs(
        orderFormGroup.name,
        orderFormGroup.email,
        orderFormGroup.tel,
        orderFormGroup.address
      );
    } else throw new Error('Invalid input');
  }

  disableBtn() {
    this._orderBtn.setAttribute('disabled', '');
    this._orderBtn.classList.add('order-btn_disabled');
  }

  sendInputTo(bot) {
    console.log(bot.authToken, bot.chatID, bot.parseMode, bot.disableNotif);
    const url = `https://api.telegram.org/bot${
      bot.authToken
    }/sendMessage?chat_id=${bot.chatID}&text="${bot.createOrderMsg(
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
  IDs: {
    btn: 'order-trigger-btn',
    dialog: 'confirm-order-dialog',
  },
  classes: {
    // modal: 'modal_webinar-signup', // modal bg
  },
  modalInstance: confirmOrderModal,
  timeoutBeforeBtnTextChange: 2000,
  bot: myTelegramBot,
};

const orderBtn = new OrderBtn(config);
