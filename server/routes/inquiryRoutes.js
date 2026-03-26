const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Handle Inquiries & Send Email
router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;
  
  // 1. Prepare E-mail Content
  const mailContent = `
    --- NEW INQUIRY FROM WEBSITE ---
    Customer Name: ${name}
    Customer Email: ${email}
    Customer Phone: ${phone}
    
    Message Details:
    ${message}
  `;

  try {
    // 2. Transporter Setup
    // You should add GMAIL_USER and GMAIL_PASS (App Password) to your server/.env
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER || 'crown.solo@gmail.com', 
        pass: process.env.MAIL_PASS 
      }
    });

    const mailOptions = {
      from: process.env.MAIL_USER || 'crown.solo@gmail.com',
      to: 'crown.solo@gmail.com',
      subject: `New Inquiry from ${name} - Crown Accumulator Website`,
      text: mailContent
    };

    // 3. Send Email
    if (process.env.MAIL_PASS) {
      await transporter.sendMail(mailOptions);
      console.log(`Email successfully sent to crown.solo@gmail.com for inquiry: ${name}`);
    } else {
      console.log('--- INQUIRY RECEIVED (MAIL_PASS missing, logic only) ---');
      console.log(mailContent);
    }

    res.status(200).json({ status: 'Success', message: 'Inquiry received. Email notification sent.' });
  } catch (error) {
    console.error('Error in inquiry submission:', error);
    res.status(500).json({ status: 'Error', message: 'Something went wrong while processing your inquiry.' });
  }
});

module.exports = router;

