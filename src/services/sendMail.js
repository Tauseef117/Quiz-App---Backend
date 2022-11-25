const nodemailer = require('nodemailer');

async function sendMail(email) {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.MAIL_USER,
        to: email,
        subject: 'QUIZ BEE - Test Link',
        html: `
        <p>Dear Candidate,</p>
        <p>You have successfully registered to give the test on Quiz Bee platform.</p>
        <p>Please click on the link <a href="http://127.0.0.1:5500/views/LoginPage.html">here</a>, to start your assessment.</p>
        <p>Thank you & All the Best!</p>
        `
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            throw error;
        } else {
            console.log('Email sent to candidate Successfully: ' + info.response);
        }
    });
}

module.exports = sendMail;