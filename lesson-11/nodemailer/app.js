const nodemailer = require("nodemailer");
require("dotenv").config();

const { SMTP_HOST, SMTP_PORT, META_PASSWORD, MAIL_ADDRESS } = process.env;

const nodemailerConfig = {
  host: SMTP_HOST,
  port: SMTP_PORT, //available options: 25, 465, 2525 - 465 is secure one
  secure: true,
  auth: {
    user: MAIL_ADDRESS,
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const email = {
  to: "tacof85903@hidelux.com", //created by temp-mail.org
  from: MAIL_ADDRESS,
  subject: "test email",
  html: "<p><strong>Test email</strong> from localhost:3000</p>", //use ejs to create nice mail
};

transport
  .sendMail(email)
  .then(() => console.log("Email send success"))
  .catch((error) => console.log(`Email send failure: ${error.message}`));
