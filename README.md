# Twilio

## Setup
To set up, copy the `.env.sample` and rename to `.env`.  Fill in the environment variables in the file.  Create a [Twilio](https://twilio.com/) account if you haven't already.  Your SID and Twilio AUTH Token are on your Twilio Console.  Buy a phone number in Twilio, then set than number as the `FROM_PHONE` environment variable.  Set your cell phone as the `TO_PHONE`.  Run `npm install` to install dependencies.

## Webhook Server
To run the webserver to respond to incoming texts, download and install [Ngrok](https://ngrok.com/).  Expose port 8081 with Ngrok, `ngrok http 8081`, then copy Ngrok's forwarding URL and add `/sms` (e.g., `https://47d4fd2c.ngrok.io/sms`).  In your Twilio console for your phone number, under messaging, select `Webhook` for when `A message comes in`, and paste your Ngrok URL.  Then run `npm run server`, and send a text message to your Twilio phone number.

## Send SMS Script
To send an automated sms to your cell phone, run `npm run send`.

## Send Bulk SMS Script
To send a bulk automated sms, create a Twilio Messaging Service and a linked Notify Service in your Twilio Console, following the instructions here: https://www.twilio.com/blog/2017/12/send-bulk-sms-twilio-node-js.html.  Copy your Notify Service SID to the `TWILIO_NOTIFY_SERVICE_SID` variable in the `.env` file.  In the Twilio console page for your phone number, set it to use the messaging service you created for SMS.  Fill in the array of phone numbers in `bulk-send.js` and run `npm run bulk-send`.
