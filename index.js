const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const html = `
<h1>Welcome to our website!</h1>
<p>Thank you for your interest in our services. We would like to provide you with more information.</p>
<p>Please let us know if you have any questions or if there is anything else we can assist you with.</p>
<p>Best regards,<br>
N I Brands</p>
`;

console.log(process.env.EMAIL_USER);
async function sendMail(email) {
  try {
    // Create a transporter for sending email
    const transporter = nodemailer.createTransport({
      service: "gmail",

      // host: "smtp.ethereal.email",
      // port: 587,
      // secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: '"N I Brands" <nurulislamrimon@gmail.com>',
      to: email,
      subject: "Welcome to our website!",
      html: html,
    });

    console.log("Mail sended successfully:", info);
    console.log(info.accepted);
    console.log(info.rejected);
  } catch (err) {
    console.error("Error sending email:", err);
  }
}

sendMail("nirimonpc@gmail.com");
