const nodemailer = require("nodemailer");

async function sendEmail({ name, email, text }) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "oks_goit@outlook.com", // generated ethereal user
      pass: "ячсм1234", // generated ethereal password
    },
  });

  // console.log(transporter);

  const emailBody = `<h2>Ви отримали листа</h2>
    <p>Вам написав ${name}</p>
    <p>Його контактний ${email}</p>
    <p>${text}</p>`;

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "oks_goit@outlook.com", // sender address
    to: "komoks255@gmail.com", // list of receivers
    subject:
      "This article is about the Sun and its planetary system. For other uses, see Solar System (disambiguation).", // Subject line
    text: text, // plain text body
    html: emailBody, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //   return true;
}

module.exports = sendEmail;
