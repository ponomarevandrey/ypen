/*
 * Telegram API Doc:
 * https://core.telegram.org/bots/api#available-methods
 *
 * Bot for creating new bots:
 * https://telegram.me/botfather
 * How to use: https://core.telegram.org/bots
 *
 */

import { order } from '../order/order';
import { myTelegramBot, ypenTelegramBot } from '../telegram-bot/telegram-bot';

class OrderBtn {
  constructor(config) {
    this._config = config;

    this._orderBtn = document.querySelector(`#${config.btnID}`);
    this._orderBtn.addEventListener('click', e => this.onClick(e));
  }

  onClick(e) {
    this.sendInputToBot(myTelegramBot);
    // this._orderBtn.textContent = 'Спасибо!';

    order.validateName();
    /*
    if (order.validateName()) {
      console.log('valid name');
      order.disableAllInputs();
      order.displayConfirmMsg();
      this.disableBtn();
      this._orderBtn.textContent = 'Заказать';
    } else console.log('error');
    */
  }

  disableBtn() {
    this._orderBtn.setAttribute('disabled', '');
    this._orderBtn.classList.add('order-btn_disabled');
  }

  sendInputToBot(bot) {
    console.log(bot.authToken, bot.botChatID, bot.parseMode, bot.disableNotif);
    const url = `https://api.telegram.org/bot${
      bot.authToken
    }/sendMessage?chat_id=${bot.chatID}&text="${bot.createMsg(
      order.inputsData
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

//

const config = {
  btnID: 'order-btn',
  timeoutBeforeBtnTextChange: 2000,
};

const orderBtn = new OrderBtn(config);
