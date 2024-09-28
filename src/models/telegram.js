const { Telegraf } = require("telegraf");
const gigachatModel = require("./gigachat");

class TelegramModel {
  telegramBot;

  async init() {
    this.telegramBot = new Telegraf(process.env.API_KEY_TELEGRAM);
    this.telegramBot.launch();

    this.telegramBot.command("gigachat", async (ctx) => {
      const userMessage = ctx.message.text;
      const gigachatMessage = await gigachatModel.getMessage(userMessage);
      ctx.reply(gigachatMessage.content);
    });
  }
}

module.exports = new TelegramModel();
