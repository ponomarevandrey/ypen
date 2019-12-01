/*
 * Telegram API Doc:
 * https://core.telegram.org/bots/api#available-methods
 *
 * Bot for creating new bots:
 * https://telegram.me/botfather
 * How to use: https://core.telegram.org/bots
 *
 */

import { webinarSignupModal } from '../webinar-signup-modal/webinar-signup-modal';
import { myTelegramBot, ypenTelegramBot } from '../telegram-bot/telegram-bot';
import { orderFormGroup } from '../order-form-group/order-form-group';

class WebinarSignupBtn {
  constructor(config) {
    this._config = config;

    this._webinarSignupBtn = document.querySelector(`#${config.btnID}`);
    this._webinarSignupBtn.addEventListener('click', e => this.onClick(e));
  }

  onClick(e) {
    const isValid =
      orderFormGroup.validateName(orderFormGroup.name) &&
      orderFormGroup.validateEmail(orderFormGroup.email) &&
      orderFormGroup.validateTel(orderFormGroup.tel) &&
      orderFormGroup.validateAddress(orderFormGroup.address);

    if (isValid) {
      this.sendInputTo(myTelegramBot);
      this._webinarSignupBtn.textContent = 'Спасибо!';
      setTimeout(() => {
        orderFormGroup.clearAllInputs(
          // create new component from FormGroup- webinarSignupFormGroup.
          // webinarSignupFormGroup.name

          orderFormGroup.name,
          orderFormGroup.email,
          orderFormGroup.tel,
          orderFormGroup.address
        );
        webinarSignupModal.closeModal();
        //this._webinarSignupBtn.textContent = 'Записаться на вебинар';
        this.textContent = 'Записаться на вебинар';
      }, this._config.timeoutBeforeBtnTextChange);
    } else throw new Error('Input is not valid');
  }
}

function createMsg({ name, email, tel }) {
  return `ЗАПИСЬ НА ВЕБИНАР %0A %0A 
    Имя: ${name} %0A 
    E-mail: ${email} %0A 
    Телефон: ${tel}`;
}

function sendInputToTeleg(e) {
  const msg = createMsg(webinarSignupModal.inputsData);
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

//

const btnConfig = {
  btnID: 'webinar-sign-up-btn',
  timeoutBeforeBtnTextChange: 2000,
};
/*
const telegConfig = {
  authToken: '882907516:AAGrseLPtW0TvCaB5a1yk_MxiZVRvQjhXRQ', // '906724281:AAHXgqvLA_iKEZozDg3yML0InQBPg4nHfng',
  botChatID: '935966517', // '338459496',
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
};*/

const webinarSignupBtn = new WebinarSignupBtn(btnConfig);
const webinarSignupBtnEl = document.querySelector(`#${btnConfig.btnID}`);

webinarSignupBtnEl.addEventListener('click', sendInputToTeleg);