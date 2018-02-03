var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ryanpatel0106@gmail.com',
    pass: 'Rads1443'
  }
});

var mailOptions = {
  from: 'ryanpatel0106@gmail.com',
  to: 'rajanpatel1011@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
