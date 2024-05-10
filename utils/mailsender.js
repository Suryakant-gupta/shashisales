const nodemailer = require('nodemailer');

// Create a reusable transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bgmilelomujhse@gmail.com', // Replace with your Gmail email
    pass: 'zxyt vaqy qqqt loze' // Replace with your Gmail password
  }
});

// Function to send email notification
const sendEmail = (formData, recipient) => {
  const mailOptions = {
    from: 'bgmilelomujhse@gmail.com', // Replace with your Gmail email
    to: recipient,
    subject: 'New Form Submission',
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