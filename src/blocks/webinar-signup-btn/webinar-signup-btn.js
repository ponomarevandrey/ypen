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

import { webinarSignupModal } from '../webinar-signup-modal/webinar-signup-modal';
import { myTelegramBot, ypenTelegramBot } from '../telegram-bot/telegram-bot';
import { webinarSignupFormGroup } from '../webinar-signup-form-group/webinar-signup-form-group';

class WebinarSignupBtn extends Btn {
  constructor(config) {
    super(config);

    this._btn = this.findElByID(this._config.IDs.btn);
    this._btn.addEventListener('click', e => this.nClick(e, this.modal.dialog));
  }

  nClick(e, dialog) {
    const isValid =
      webinarSignupFormGroup.validateName(webinarSignupFormGroup.name) &&
      webinarSignupFormGroup.validateEmail(webinarSignupFormGroup.email) &&
      webinarSignupFormGroup.validateTel(webinarSignupFormGroup.tel);

    if (isValid) {
      this.sendInputTo(this._config.bot);
      this._btn.textContent = 'Спасибо!';
      setTimeout(() => {
        webinarSignupModal.closeModal(dialog);
        webinarSignupFormGroup.resetInputs(
          webinarSignupFormGroup.name,
          webinarSignupFormGroup.email,
          webinarSignupFormGroup.tel
        );

        this._btn.textContent = 'Записаться на вебинар';
      }, this._config.timeoutBeforeBtnTextChange);
    } else throw new Error('Input is not valid');
  }

  sendInputTo(bot) {
    console.log(bot.authToken, bot.chatID, bot.parseMode, bot.disableNotif);
    // const msg = createMsg(webinarSignupModal.inputsData);
    const url = `https://api.telegram.org/bot${
      bot.authToken
    }/sendMessage?chat_id=${bot.chatID}&text="${bot.createWebinarSignupMsg(
      webinarSignupFormGroup.inputsData
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
    btn: 'webinar-signup-btn',
    dialog: 'webinar-sign-up-dialog',
  },
  classes: {
    // modal: 'modal_webinar-signup', // modal bg
  },
  modalInstance: webinarSignupModal,
  timeoutBeforeBtnTextChange: 2000,
  bot: myTelegramBot,
};

const webinarSignupBtn = new WebinarSignupBtn(config);
