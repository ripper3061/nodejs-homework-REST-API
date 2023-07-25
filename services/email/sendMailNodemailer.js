const nodemailer = require("nodemailer");
require("dotenv").config();
const { EMAIL_USER, EMAIL_PASS } = process.env;

async function sendMailNodemailer(data) {
  try {
    const email = { ...data, from: EMAIL_USER };

    const transport = nodemailer.createTransport({
      host: "smtp.meta.ua",
      port: 465,
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });
    const response = await transport.sendMail(email);
    console.log(response);
  } catch (error) {
    console.error("Application error", error);
  }
}

module.exports = {
  sendMailNodemailer,
};
