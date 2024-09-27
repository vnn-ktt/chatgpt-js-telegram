const GigaChat = require('gigachat-node').GigaChat;
require('dotenv').config();

const client = new GigaChat(
   clientSecretKey=process.env.CLIENT_KEY_GIGACHAT,
   CredentialsFile=process.env.API_KEY_GIGACHAT, 
   isIgnoreTSL=true,
   isPersonal=true,
   autoRefreshToken=true
);

client.createToken().then(async () => {
   const stream = await client.completionStream({
      "model":"GigaChat:latest",
      "messages": [
          {
              role:"user",
              content:"Привет! Напиши текст на 20 слов про историю часов."
          }
      ]
   });
   
   let str = '';
   
   stream.on('data', async (data) => {
      const decodedData = await data.toString('utf-8');
      const jsonData = await JSON.parse(decodedData.substring(6));
      str += jsonData.choices[0].delta.content;
   })
   
   stream.on('end', () => {
      console.log('Поток завершился.')
   })
   
});
