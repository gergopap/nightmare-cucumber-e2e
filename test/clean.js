const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

nightmare
  .goto('https://ui.sandbox.aggreg8.hu')
  .wait('#username')
  .type('#username', ['istvan.kadar.js@gmail.com'])
  .type('#password', ['asdf1234'])
  .click('#kc_input_button')
  .wait('#mat-tab-content-0-0 > div > app-bank-access-consent-list-component > div > div.consent-list > div > div > div:nth-child(1) > div > mat-card > mat-card-content > div.subtitle > button > span > i')
  .click('#mat-tab-content-0-0 > div > app-bank-access-consent-list-component > div > div.consent-list > div > div > div:nth-child(1) > div > mat-card > mat-card-content > div.subtitle > button > span > i')
  .wait('#mat-tab-content-0-0 > div > app-edit-bank-access-consent-component > div > div > button.right.mat-raised-button > span')
  .click('#mat-tab-content-0-0 > div > app-edit-bank-access-consent-component > div > div > button.right.mat-raised-button > span')
  .wait('#revokeBtn > span')
  .click('#revokeBtn > span')
  .wait(5000)
  .end()
  .catch(error => {
    console.error('Error:', error);
  });
