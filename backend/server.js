const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

//init app
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(bodyParser.json());
app.use(cors());

app.post('/send', async (req, res) => {
const { name, email, message, 'g-recaptcha-response' : recaptchaResponse } = req.body;


//verify response
const recaptchaSecret = process.env.RECAPTCHA_SECRET;
const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaResponse}`;

const recaptchaRes = await fetch(recaptchaUrl, { method: 'POST' });
const recaptchaData = await recaptchaRes.json();

if (!recaptchaData.success) {
  return res.status(400).json({ message: 'reCaptcha verification failed!' });
}

//create transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

//email options
const mailOptions = {
    from: email, // from sender
    to: process.env.EMAIL,
    subject: `Contact Form Submission from ${name}`,
    text: message,   
};

//sending the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent successfully" + info.response);
    });
});


//start server
app.listen(port, () => console.log(`Server running on port ${port}`));