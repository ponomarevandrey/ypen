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
import { myTelegramBot, spaceSausageBot } from '../telegram-bot/telegram-bot';
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
        this._config.bots.forEach(bot => {
          bot.sendMsg(orderFormGroup.inputsData);
        });

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
}

const orderBtnEl = document.querySelector('#order-trigger-btn');

const orderBtn = new OrderBtn({
  btn: orderBtnEl,
  modal: confirmOrderModal,
  timeoutBeforeBtnTextChange: 2000,
  bots: [myTelegramBot, spaceSausageBot],
});

orderBtnEl.addEventListener('click', orderBtn);
