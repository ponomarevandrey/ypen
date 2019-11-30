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

class OrderBtn {
  constructor(config) {
    this._config = config;

    this._orderBtn = document.querySelector(`#${btnConfig.btnID}`);
    this._orderBtn.addEventListener('click', e => this.onClick(e));
  }

  onClick(e) {
    // this.sendInputToTeleg();
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

  sendInputToTeleg() {
    const msg = this.createMsg(order.inputsData);
    console.log(msg);

    const url = `https://api.telegram.org/bot${telegConfig.authToken}/sendMessage?chat_id=${telegConfig.botChatID}&text="${msg}"&parse_mode=${telegConfig.parseModde}&disable_notification=${telegConfig.disableNotification}`;

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

  createMsg({ name, email, tel, address }) {
    return `ЗАКАЗ РУЧКИ %0A %0A
    Имя: ${name} %0A
    E-mail: ${email} %0A
    Телефон: ${tel} %0A
    Адрес: ${address}`;
  }
}

//

const btnConfig = {
  btnID: 'order-btn',
  timeoutBeforeBtnTextChange: 2000,
};

const telegConfig = {
  authToken:
    /*Ev Pay: '882907516:AAGrseLPtW0TvCaB5a1yk_MxiZVRvQjhXRQ',*/ '906724281:AAHXgqvLA_iKEZozDg3yML0InQBPg4nHfng',
  botChatID: /* Ev Pay: '935966517',*/ '338459496',
  // send message in Markdown format:
  parseModde: 'Markdown',
  // Sends the message silently. Users will receive a notification
  // with no sound:
  disableNotification: true,

  // helper function to find out chatID when you create a new bot;
  // before calling this function, open Telegram and send any message to your
  // bot, otherwise the function won't be able to retrieve chatID
  retrieveBotChatID(authToken = telegConfig.authToken) {
    const url = `https://api.telegram.org/bot${authToken}/getUpdates`;

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(response => {
        // Telegram chat ID is the same for all messages:
        const chatID = response.result[0].message.chat.id;
        console.log(chatID);
      })
      .catch(error => {
        throw new Error(error);
      });
  },
};

const orderBtn = new OrderBtn(btnConfig);
