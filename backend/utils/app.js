
// const nodemailer = require('nodemailer');
// const { google } = require('googleapis');

// const CLIENT_ID = '611303624707-oj4hkogktcr8lbt3r6dtro42se0kbmuo.apps.googleusercontent.com';
// const CLIENT_SECRET = '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';
// const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
// const REFRESH_TOKEN = '1//04mzgBnYRyWXtCgYIARAAGAQSNwF-L9IreA_i1qyUQ14UMQ4J6-SabPYzfy1tqEX6Jh77ZXRQ-D1CoOy3C4VeRDDNU3dddIptmd0';

// const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI);

// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

//  async function sendMail(email, token) {
//   try {
//     const accessToken = await oAuth2Client.getAccessToken();

//     const transport = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         type: 'OAuth2',
//         user: 'patildhanshrees6112@gmail.com',
//         clientId: CLIENT_ID,
//         clientSecret: CLIENT_SECRET,
//         refreshToken: REFRESH_TOKEN,
//         accessToken: accessToken,
//       },
//     });

//     const mailOptions = {
//       from: 'Dhanshree Patil <patildhanshrees6112@gmail.com>',
//       to: email,
//       subject: 'Hello from gmail using API',
//       text: 'Hello from dhanshree email using API',
//       html: `<h1>Hello,<br><br>Click on given link to reset your password!</h1><br><h1>Link:><a href="http://localhost:${process.env.APP_PORT}/${token}">click here</a></h1>`,
//     };

//     const result = await transport.sendMail(mailOptions);
//     return result;
//   } catch (error) {
//     return error;
//   }
// }

//    async function sendMailToRegisteredUser(email,name) {
//   try {
//       const accessToken = await oAuth2Client.getAccessToken();

//       const transport = nodemailer.createTransport({
//           service: 'gmail',
//           auth: {
//               type: 'OAuth2',
//               user: 'patildhanshrees6112@gmail.com',
//               clientId: CLIENT_ID,
//               clientSecret: CLIENT_SECRET,
//               refreshToken: REFRESH_TOKEN,
//               accessToken: accessToken
//           }
//       });

//       const mailOptions = {
//           from: 'Dhanshree Patil <patildhanshrees6112@gmail.com',
//           to: email,
//           subject: 'Welcome',
//           text: `Hi....${name}`,
//       };

//       const result = await transport.sendMail(mailOptions)
//       //console.log('=========>>>>', result);
//       return result;

//   } catch (error) {
//       return error;

//   }
// }