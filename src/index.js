const { gigachatModel } = require('./models/gigachat');
const { telegramModel } = require('./models/telegram');
const express = require('express');

const app = express();
const port = process.env.PORT || 3500;

(async () => {
    await gigachatModel.createToken();
    await telegramModel.initBot();
})();

app.listen(port);

