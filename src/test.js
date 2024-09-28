const axios = require('axios');
require("dotenv").config();

const url = 'https://gigachat.devices.sberbank.ru/api/v1/chat/completions';

const payload = {
  model: 'GigaChat',
  messages: [
    {
      role: 'user',
      content: 'Привет! Как дела?'
    }
  ],
  stream: false,
  repetition_penalty: 1
};

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': `Bearer ${process.env.AUTH_GIGACHAT}`
};

axios.post(url, payload, { headers })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });