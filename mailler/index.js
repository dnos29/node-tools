const axios = require('axios');
const mailer = require('nodemailer');

const URL = 'https://racevietnam.com/longbien-marathon-2023-63/register';

axios.get(URL, {
  maxRedirects: 0
})
.then(res => {
  console.log(res);
})
.catch(async (err) => {
  const responseStatusCode = err.response.status;
  console.error(err.response.status);
  if(responseStatusCode === 302){
    const testAccount = await mailer.createTestAccount();
    const transporter = mailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'giftc.072022@gmail.com',
        pass: '601666455555',
      }
    });
    const info = await transporter.sendMail({
      from: 'auto@email.com',
      to: 'sondn.da@gmail.com',
      text: 'Open LBM',
      html: "Dang ky de"
    });
    console.log('Message sent: %s', info.messageId);
    console.log('Preview url', mailer.getTestMessageUrl(info));
  }
})