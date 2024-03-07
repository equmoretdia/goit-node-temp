const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY, MAIL_ADDRESS } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const email = {
  to: "tacof85903@hidelux.com", //created by temp-mail.org
  from: MAIL_ADDRESS,
  subject: "test email",
  html: "<p><strong>Test email</strong> from localhost:3000</p>", //use ejs to create nice mail
};

sgMail
  .send(email)
  .then(() => console.log("Email send success"))
  .catch((error) => console.log(`Email send failure: ${error.message}`));
