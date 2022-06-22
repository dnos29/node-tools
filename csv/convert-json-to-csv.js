const { log } = require('console');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const userFileJson = fs.readFileSync('./cognito-merchants-prod.json');
const users = JSON.parse(userFileJson)['Users'];
const transformUsers = users.map(user => {
  console.log(user.Username);
  return {
    Username: user.Username,
    Emailaddress: user.Attributes[user.Attributes.length - 1].Value,
    Emailverified: user.Attributes[1].Value,
    Confirmationstatus: user.UserStatus,
    Status: user.Enabled ? 'Enabled' : 'Disabled',
  }
});
// console.log('users: ', users);
const csvWriter = createCsvWriter({
  path: './cognito-merchants-prod.csv',
  header: [
    {
      id: 'Username', title: 'User name',
    },
    {
      id: 'Emailaddress', title: 'Email address',
    },
    {
      id: 'Emailverified', title: 'Email verified',
    },
    {
      id: 'Confirmationstatus', title: 'Confirmation status',
    },
    {
      id: 'Status', title: 'Status',
    },
  ]
});
csvWriter.writeRecords(transformUsers).then(() => {
  console.log(`Done...${transformUsers.length} users`);
})

