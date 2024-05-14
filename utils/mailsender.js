const nodemailer = require('nodemailer');
const dotenv = require('dotenv');


// Load environment variables if using .env
dotenv.config();

const fromUser = process.env.FROM_EMAIL;
const password = process.env.EMAIL_PASS;


// Create a reusable transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: fromUser, 
    pass: password
  }
});

// Function to send email notification
const sendEmail = (formData, recipient) => {
  const mailOptions = {
    from: fromUser, // Replace with your Gmail email
    to: recipient,
    subject: 'New Lead generated',
    text: `Form Data: ${JSON.stringify(formData)}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

module.exports = sendEmail;