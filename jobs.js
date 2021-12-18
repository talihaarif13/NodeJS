const cron = require('node-cron');
const nodemailer = require('nodemailer');
console.log('start');
// cron.schedule('* * * * *', () => {
//     console.log("task is running every minute " + new Date())
// });


const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'carlo.treutel70@ethereal.email',
        pass: '4UWHaJrtY5TVsnDtk2'
    }
});

var mailOptions = {
    from : 'carlo.treutel70@ethereal.email',
    to : "carlo.treutel70@ethereal.email",
    subject : "Email Node",
    text : "my first email"
}
console.log('k');

cron.schedule('* * * * *', () => {
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
});
