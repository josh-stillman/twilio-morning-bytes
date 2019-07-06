const dotenv = require('dotenv');
dotenv.config();

const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

client.messages
  .create({
    body: `Greetings! The current time is: ${new Date()}`,
    from: process.env.FROM_PHONE,
    to: process.env.TO_PHONE,
  })
  .then(message => console.log('message sent', message, message.sid))
  .catch(e => console.log('e is', e));
