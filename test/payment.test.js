/* global describe it */

const Nightmare = require('nightmare');

describe('bank account sync e2e test', function () {
  describe('bank account sync test', function () {
    it('should sync the bank account with the app', function (done) {
      const nightmare = Nightmare({ show: true, waitTimeout: 180000 });
      nightmare
        .goto('https://demoapp.sandbox.aggreg8.hu')
        .wait('#share-account-button')
        .click('#share-account-button')
        .wait('#username')
        .type('#username', ['istvan.kadar.js@gmail.com'])
        .type('#password', ['asdf1234'])
        .click('#kc_input_button')
        .wait(1000)
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
        .wait(3000)
        .end(done)
        .catch(error => {
          console.error('Error:', error);
        });
    });
  });
  describe('bank account removing test', function () {
    it('should remove the account from the app', function (done) {
      const nightmare = Nightmare({ show: true });
      nightmare
        .goto('https://ui.sandbox.aggreg8.hu')
        .wait('#username')
        .type('#username', ['istvan.kadar.js@gmail.com'])
        .type('#password', ['asdf1234'])
        .click('#kc_input_button')
        .wait(1000)
        .wait('#mat-tab-content-0-0 > div > app-bank-access-consent-list-component > div > div.consent-list > div > div > div:nth-child(1) > div > mat-card > mat-card-content > div.subtitle > button > span > i')
        .click('#mat-tab-content-0-0 > div > app-bank-access-consent-list-component > div > div.consent-list > div > div > div:nth-child(1) > div > mat-card > mat-card-content > div.subtitle > button > span > i')
        .wait('#mat-tab-content-0-0 > div > app-edit-bank-access-consent-component > div > div > button.right.mat-raised-button > span')
        .click('#mat-tab-content-0-0 > div > app-edit-bank-access-consent-component > div > div > button.right.mat-raised-button > span')
        .wait('#revokeBtn > span')
        .click('#revokeBtn > span')
        .wait(1000)
        .end(done)
        .catch(error => {
          console.error('Error:', error);
        });
    });
  });
});
