const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

const htmlSummary = fs.readFileSync(path.join(__dirname, 'reporters', 'custom-report.html'), 'utf-8');

const allureReportLink = 'https://Prathyusha-vemparala.github.io/monday/';

const htmlEmailBody = `
  ${htmlSummary}
  <br><br>
  <p>📊 <strong>Full Allure Report:</strong> <a href="${allureReportLink}">View allure report</a></p>
`;
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
   html: htmlEmailBody,
};
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.error('Email sending failed:', error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
 