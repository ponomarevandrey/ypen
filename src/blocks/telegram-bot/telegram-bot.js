class TelegramBot {
  constructor({ name, authToken, chatID, parseMode, disableNotif }) {
    this.name = name;
    this.authToken = authToken;
    this.chatID = chatID;
    this.parseMode = parseMode;
    this.disableNotif = disableNotif;
  }

  get chadID() {}

  sendMsg(msg) {}

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

class TelegramBotManager {
  constructor(name, authToken, chatID, parseMode, disableNotif) {
    this.name = name;
    this.authToken = authToken;
    this.chatID = chatID;
    this.parseMode = parseMode;
    this.disableNotif = disableNotif;
  }

  createBot(config) {
    return new TelegramBot(config);
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
          const chatID = response.result[0].message.chat.id;
          console.log(chatID);
        } else {
          throw new Error('Telegram bot: ');
        }
      })
      .catch(error => {
        throw new Error(error);
      });
  }
}

const userConfigs = [
  {
    name: 'Andrey Ponomarev',
    authToken: '906724281:AAHXgqvLA_iKEZozDg3yML0InQBPg4nHfng',
    chatID: '338459496',
    parseMode: 'Markdown',
    disableNotif: true,
  },
  {
    name: 'Evgeniy Paykachev',
    authToken: '882907516:AAGrseLPtW0TvCaB5a1yk_MxiZVRvQjhXRQ',
    chatID: '935966517',
    parseMode: 'Markdown',
    disableNotif: true,
  },
];

const myTelegramBot = new TelegramBot(userConfigs[0]);
const ypenTelegramBot = new TelegramBot(userConfigs[1]);

myTelegramBot.retrieveChatID(userConfigs[0].authToken);

export { myTelegramBot, ypenTelegramBot };
