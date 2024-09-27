const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
/*
* Конфигурация бота
***/
const bot = new TelegramBot(process.env.API_KEY_BOT, {
   polling: {
      interval: 500,
      autoStart: true
    }
});
/*
* Слушаем входящие сообщения
***/
bot.on("polling_error", err => console.log(err.data.error.message));
bot.on('text', async msg => {
   const msgWait = await bot.sendMessage(msg.chat.id, `Бот генерирует ответ...`);
   setTimeout(async () => {
       await bot.deleteMessage(msgWait.chat.id, msgWait.message_id);
       await bot.sendMessage(msg.chat.id, msg.text);
   }, 5000);
})