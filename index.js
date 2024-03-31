const nodemailer = require("nodemailer");

const html = `
<h1>Welcome to our website!</h1>
<p>Thank you for your interest in our services. We would like to provide you with more information.</p>
<p>Please let us know if you have any questions or if there is anything else we can assist you with.</p>
<p>Best regards,<br>
N I Brands</p>
`;

async function sendMail(email) {
  try {
    const testAccount = await nodemailer.createTestAccount();
    // Create a transporter for sending email
    const transporter = nodemailer.createTransport({
      //   service: "gmail",

      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const info = await transporter.sendMail({
      from: '"N I Brands" <nirimonpc@gmail.com>',
      to: email,
      subject: "Welcome to our website!",
      html: html,
    });

    console.log(
      "Mail sended successfully:",
      nodemailer.getTestMessageUrl(info)
    );
    console.log(info.accepted);
    console.log(info.rejected);
  } catch (err) {
    console.error("Error sending email:", err);
  }
}

sendMail("nurulislamrimon@gmail.com");
