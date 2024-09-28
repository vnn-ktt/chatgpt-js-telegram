const { GigaChat } = require("gigachat-node");
require("dotenv").config();

class GigachatModel {
  #client;

  async createToken() {
    this.#client = new GigaChat(process.env.AUTH_GIGACHAT);
    await this.#client.createToken();
  }

  async getMessage(userMessage) {
    const { choices: [{ message }] } = await this.#client.completion({
      model: 'GigaChat:latest',
      messages: [
        {
          role: 'user',
          content: userMessage,
        },
      ],
    });

    return message;
  }
}

module.exports = new GigachatModel();
