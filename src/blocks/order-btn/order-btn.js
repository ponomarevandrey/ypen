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

  handleEvent(e) {
    if (e.type === 'click') {
      const isValid =
        orderFormGroup.validateName(orderFormGroup.name) &&
        orderFormGroup.validateEmail(orderFormGroup.email) &&
        orderFormGroup.validateTel(orderFormGroup.tel) &&
        orderFormGroup.validateAddress(orderFormGroup.address);

      if (isValid) {
        this.sendInputTo(this._config.bots);

        confirmOrderModal.openModal(this._config.modal.dialog);
        orderFormGroup.resetInputs(
          orderFormGroup.name,
          orderFormGroup.email,
          orderFormGroup.tel,
          orderFormGroup.address
        );
      } else throw new Error('Invalid input');
    }
  }

  sendInputTo(bots) {
    console.log('run');
    bots.forEach(bot => {
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
    });
  }
}

//
/*
const orderTriggerBtnEl = document.querySelector('#order-trigger-btn');

const orderTriggerBtn = new Btn({
  btn: orderTriggerBtnEl,
  modal: confirmOrderModal,
});

orderTriggerBtnEl.addEventListener('click', orderTriggerBtn);
*/
//

const orderBtnEl = document.querySelector('#order-trigger-btn');

const orderBtn = new OrderBtn({
  btn: orderBtnEl,
  modal: confirmOrderModal,
  timeoutBeforeBtnTextChange: 2000,
  bots: [myTelegramBot, ypenTelegramBot],
});

orderBtnEl.addEventListener('click', orderBtn);
