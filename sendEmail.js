const nodemailer = require('nodemailer');

// Step 5: Set up a transporter with your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'benisam.prakash@gmail.com',
    pass: 'ortn tzjw lmsw lzfa'
  }
});

// Step 6: Set up the email options
const mailOptions = {
  from: 'benisam.prakash@gmail.com.com',
  to: 'bencheck22@gmail.com',
  subject: 'Test Email',
  text: 'Hello, this is a test email sent using nodemailer!'
};

// Step 7: Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error:', error);
  }
  console.log('Email sent:', info.response);
});
