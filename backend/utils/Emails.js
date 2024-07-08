const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
      user: "sahilabcd60@gmail.com", // Your email address
      pass: "zRpVZw2LBYN0xC36", // Your Master Password
  },
});

exports.sendMail = async(receiverEmail,subject,body) => {
    await transporter.sendMail({
    from: "sahilabcd60@gmail.com",
    to: receiverEmail,
    subject: subject,
    html: body
  });
};
