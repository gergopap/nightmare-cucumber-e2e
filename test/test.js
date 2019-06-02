const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true, waitTimeout: 180000 });

nightmare
  .goto('https://demoapp.sandbox.aggreg8.hu')
  .wait('#share-account-button')
  .click('#share-account-button')
  .wait('#username')
  .type('#username', ['istvan.kadar.js@gmail.com'])
  .type('#password', ['asdf1234'])
  .click('#kc_input_button')
  .wait('#mat-select-0')
  .click('#mat-select-0')
  .click('#mat-option-7')
  .click('.mat-button-wrapper')
  .wait('#mainAccountNumber')
  .type('#mainAccountNumber', ['11034-20034278'])
  .type('#username', ['3535419'])
  .type('#password', ['London12'])
  .click('.mat-button-wrapper')
  .wait('.mat-button-wrapper')
  .click('.mat-button-wrapper')
  .wait('#account-list')
  .check('.mat-checkbox-inner-container')
  .wait('.mat-button-wrapper')
  .click('.mat-button-wrapper')
  .wait('#mat-dialog-0 > app-info-sharing-confirm-ui-dialog > app-info-sharing-confirm-component > div > div.isc-confirm-block > div.isc-confirm-button-container.ng-star-inserted > button > span')
  .click('#mat-dialog-0 > app-info-sharing-confirm-ui-dialog > app-info-sharing-confirm-component > div > div.isc-confirm-block > div.isc-confirm-button-container.ng-star-inserted > button > span')
  .wait('.striped')
  .end()
  .catch(error => {
    console.error('Error:', error);
  });
