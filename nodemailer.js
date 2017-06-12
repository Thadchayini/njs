var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'thadchayini95@gmail.com',
    pass: 'gmail.95'
  }
});

var mailOptions = {
  from: 'thadchayini95@gmail.com',
  to: 'info@uki.life',
  subject: 'Testing my nodemailar module',
  text: 'This is easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
