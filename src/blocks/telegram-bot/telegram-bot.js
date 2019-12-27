class TelegramBot {
  constructor(config) {
    for (let prop in config) {
      this[`${prop}`] = config[prop];
    }
  }

  sendMsg(data) {
    //console.log(bot.authToken, bot.chatID, bot.parseMode, bot.disableNotif);
    const newMsg = this.createOrderMsg(data);
    const url = `https://api.telegram.org/bot${this.authToken}/sendMessage?chat_id=${this.chatID}&text="${newMsg}"&parse_mode=${this.parseMode}&disable_notification=${this.disableNotif}`;

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
  }

  createOrderMsg({ name, email, tel, address }) {
    return `ЗАКАЗ РУЧКИ %0A %0A
    Имя: ${name} %0A
    E-mail: ${email} %0A
    Телефон: ${tel} %0A
    Адрес: ${address}`;
  }

  createWebinarSignupMsg({ name, email, tel }) {
    return `ЗАПИСЬ НА ВЕБИНАР %0A %0A 
    Имя: ${name} %0A 
    E-mail: ${email} %0A 
    Телефон: ${tel}`;
  }
}

//

const BotManager = (function() {
  let instance;

  return class {
    constructor() {
      if (!instance) instance = this;
      return instance;
    }

    createBot(config) {
      const bot = (this[`${config.name}`] = new TelegramBot(config));
      return bot;
    }

    // Helper function to find out bot's chatID when you create a new bot.
    //
    // Before calling this function, open Telegram and send two messages
    // with any text to your bot, otherwise the function won't be able to
    // retrieve chatID:
    retrieveChatID(authToken) {
      const url = `https://api.telegram.org/bot${authToken}/getUpdates`;

      fetch(url)
        .then(response => {
          return response.json();
        })
        .then(response => {
          // Telegram chat ID is the same for all messages:
          if (response.result[0]) {
            console.log(
              `Your Telegram bot's chatID: ${response.result[0].message.chat.id}`
            );
          } else {
            throw new Error(
              "Can't retrieve chatID. Please, open your bot's chat in Telegram app and send him a few messages"
            );
          }
        })
        .catch(error => {
          throw new Error(error);
        });
    }
  };
})();

const botManager = new BotManager();

/*
 * use botManager.retrieveChatID(<authToken>) to find out your chatID
 */

const myTelegramBot = botManager.createBot({
  name: "Andrey Ponomarev",
  authToken: "906724281:AAHXgqvLA_iKEZozDg3yML0InQBPg4nHfng",
  chatID: "338459496",
  parseMode: "Markdown",
  disableNotif: true,
});

const spaceSausageBot = botManager.createBot({
  name: "Space Sausage",
  authToken: "1044567822:AAGPXUeLlAumoCzrzlnsPnN3yuxAXHqSN2o",
  chatID: "338459496",
  parseMode: "Markdown",
  disableNotif: true,
});

export { myTelegramBot, spaceSausageBot };
