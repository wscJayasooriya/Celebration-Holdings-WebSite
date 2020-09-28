const express = require('express');
const router = express.Router();
const app = express();
const nodemailer = require('nodemailer');



router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Express' });
});


app.post('/', function(req, res) {
    const output = `
      <p>You have a new contact request</p>
      <h3>contact details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;
  
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'mail.domain.com',
      port: 465,
      tls: {
        rejectUnauthorized: false, //NOTE: you only need to set rejectUnauthorized to false if you are running on a local server, you can remove it after testing
      }
    });
  
    let mailOptions = {
      from: `nodemailer contact ${req.body.email}`,
      to: 'saduchinthaka114@gmail.com',
      subject: `${req.body.subj}`,
      html: output
    };
  
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        return console.log(error);
      }
  
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
      res.send({
        msg: 'Email has been sent!'
      });
    });
  });



module.exports = router;