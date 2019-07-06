const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const parser = require('body-parser');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('hello world'));

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
  console.log("Incoming Message Body is:", req.body);

  twiml.message(
    `Hi! It looks like your phone number was born in ${req.body.FromCountry}`,
  );

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

const server = app.listen(8081, () => {
  const port = server.address().port;
  console.log('App started on port', port);
});
