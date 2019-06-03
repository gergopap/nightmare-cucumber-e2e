const { Given, When, Then, AfterAll } = require('cucumber');
const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true, waitTimeout: 240000 });

const { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(240 * 1000);

AfterAll(function (done) {
  nightmare.end().then(function () {
    done();
  });
});

Given('user opens the app', function (done) {
  nightmare
    .goto('https://demoapp.sandbox.aggreg8.hu')
    .wait('#share-account-button')
    .click('#share-account-button')
    .then(result => {
      done();
    })
    .catch((err) => done(err));
});

When('user logs in to the app', function (done) {
  nightmare
    .wait('#username')
    .type('#username', ['istvan.kadar.js@gmail.com'])
    .type('#password', ['asdf1234'])
    .click('#kc_input_button')
    .wait(1000)
    .then(result => {
      done();
    })
    .catch((err) => done(err));
});

When('user adds a bank account', function (done) {
  nightmare
    .wait('#mat-select-0')
    .click('#mat-select-0')
    .click('#mat-option-7')
    .click('.mat-button-wrapper')
    .wait('#mainAccountNumber')
    .type('#mainAccountNumber', ['11034-20034278'])
    .type('#username', ['3535419'])
    .type('#password', ['London12'])
    .click('.mat-button-wrapper')
    .then(result => {
      done();
    })
    .catch((err) => done(err));
});

When('user shares the bank accounts history', function (done) {
  nightmare
    .wait('.mat-button-wrapper')
    .click('.mat-button-wrapper')
    .wait('#account-list')
    .check('.mat-checkbox-inner-container')
    .wait('.mat-button-wrapper')
    .click('.mat-button-wrapper')
    .wait('#mat-dialog-0 > app-info-sharing-confirm-ui-dialog > app-info-sharing-confirm-component > div > div.isc-confirm-block > div.isc-confirm-button-container.ng-star-inserted > button > span')
    .then(result => {
      done();
    })
    .catch((err) => done(err));
});

Then('user should see the bank accounts history in the app', function (done) {
  nightmare
    .click('#mat-dialog-0 > app-info-sharing-confirm-ui-dialog > app-info-sharing-confirm-component > div > div.isc-confirm-block > div.isc-confirm-button-container.ng-star-inserted > button > span')
    .wait(1000)
    .wait('body > div.container > div.transaction-list > div > table')
    .then(result => {
      done();
    })
    .catch((err) => done(err));
});
