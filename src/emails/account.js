const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "brad.m.goldsmith@gmail.com",
    subject: "Thanks for signing up for Task App",
    text: `Welcome to the app, ${name}.  Let me know how you get along with the app`
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "brad.m.goldsmith@gmail.com",
    subject: "You have cancelled your Task App account",
    text: `Hey ${name} sorry to see you leave but feel free to sign back up and start using again at anytime and if you have any feeback, positive or negative we'd like to hear from you.`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
};
