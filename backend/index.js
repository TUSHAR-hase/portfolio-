// index.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());                         // allow all origins (for dev)
app.use(express.json());                 // parse JSON bodies

// Health check
app.get('/', (req, res) => res.send('Contact API is running'));

// Contact endpoint
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing fields.' });
  }

  try {
    // 1. Create transporter
     const transporter = nodemailer.createTransport({
              service: "gmail", // You can also use SMTP server details directly
              auth: {
                user: process.env.SMTP_USER, // your email address
                pass: process.env.SMTP_PASSWORD, // your email password (use app-specific password for Gmail)
              },
            });
        
    // 2. Send mail
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr/>
        <p>${message}</p>
      `,
    });

    // 3. Respond success
    res.json({ ok: true });
  } catch (err) {
    console.error('Mail error:', err);
    res.status(500).json({ ok: false, error: 'Failed to send email.' });
  }
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
