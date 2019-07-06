const dotenv = require('dotenv');
dotenv.config();

const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

const service = client.notify.services(process.env.TWILIO_NOTIFY_SERVICE_SID);

const body = "Here's a bulk text!";

const numbers = [process.env.TO_PHONE];

const bindings = numbers.map(number => {
  return JSON.stringify({ binding_type: 'sms', address: number });
});

service.notifications
  .create({
        toBinding: bindings,
        body: body
  })
  .then((notification) => {
        console.log(notification);
  })
  .catch(err => {
        console.error('error is', err);
  });
