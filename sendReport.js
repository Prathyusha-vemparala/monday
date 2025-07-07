const nodemailer = require('nodemailer');
const path = require('path');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'automation.test.report21@gmail.com',
    pass: 'paotacgifeqnkfjy'
  }
});
const mailOptions = {
  from: '"Test Automation" <automation.reports.qa@gmail.com>',
  to: 'vemparala.prathyusha1999@gmail.com',
  subject: 'Playwright Test Execution Report',
   html: `
    <p>Hello,</p>
    <p>The latest automation test report is ready. You can view it here:</p>
    <p><a href="https://prathyusha-vemparala.github.io/Email_Integration" target="_blank"> View Allure Report</a></p>
    <p>Regards,<br/>Automation Team</p>
  `,
};
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.error('Email sending failed:', error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
 