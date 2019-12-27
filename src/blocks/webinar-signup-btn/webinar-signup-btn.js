/*
 * Telegram API Doc:
 * https://core.telegram.org/bots/api#available-methods
 *
 * Bot for creating new bots:
 * https://telegram.me/botfather
 * How to use: https://core.telegram.org/bots
 *
 */

import { Btn } from "../btn/btn";

import { webinarSignupModal } from "../webinar-signup-modal/webinar-signup-modal";
import { myTelegramBot, spaceSausageBot } from "../telegram-bot/telegram-bot";
import { webinarSignupFormGroup } from "../webinar-signup-form-group/webinar-signup-form-group";

class WebinarSignupBtn extends Btn {
  constructor(config) {
    super(config);
  }

  handleEvent(e) {
    if (e.type === "click") {
      const isValid =
        webinarSignupFormGroup.validateName(webinarSignupFormGroup.name) &&
        webinarSignupFormGroup.validateEmail(webinarSignupFormGroup.email) &&
        webinarSignupFormGroup.validateTel(webinarSignupFormGroup.tel);

      if (isValid) {
        this._config.bots.forEach(bot => {
          bot.sendMsg(webinarSignupFormGroup.inputsData);
        });

        this._config.btn.textContent = "Спасибо!";

        setTimeout(() => {
          webinarSignupModal.closeModal(this._config.modal.dialog);
          webinarSignupFormGroup.resetInputs(
            webinarSignupFormGroup.name,
            webinarSignupFormGroup.email,
            webinarSignupFormGroup.tel
          );

          this._config.btn.textContent = "Записаться на вебинар";
        }, this._config.timeoutBeforeBtnTextChange);
      } else throw new Error("Invalid input");
    }
  }

  sendInputTo(bots) {
    bots.forEach(bot => {
      // console.log(bot.authToken, bot.chatID, bot.parseMode, bot.disableNotif);

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
          console.log(
            `Response from bot: ${response.result.from.first_name} (${response.result.from.username}) `,
            response
          );
        })
        .catch(error => {
          throw new Error(error);
        });
    });
  }
}

//

const webinarSignupTriggerBtnEl = document.querySelector(
  "#webinar-signup-trigger-btn"
);

const webinarSignupTriggerBtn = new Btn({
  btn: webinarSignupTriggerBtnEl,
  modal: webinarSignupModal,
});

webinarSignupTriggerBtnEl.addEventListener("click", webinarSignupTriggerBtn);

//

const webinarSignupBtnEl = document.querySelector("#webinar-signup-btn");

const webinarSignupBtn = new WebinarSignupBtn({
  btn: webinarSignupBtnEl,
  modal: webinarSignupModal,
  timeoutBeforeBtnTextChange: 2000,
  bots: [myTelegramBot, spaceSausageBot],
});

webinarSignupBtnEl.addEventListener("click", webinarSignupBtn);
