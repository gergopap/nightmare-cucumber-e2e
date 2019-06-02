const { Given, When, Then, AfterAll } = require('cucumber');
const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

AfterAll(function (done) {
  nightmare.end().then(function () {
    done();
  });
});

Given('user opens the ui', function (done) {
  nightmare
    .goto('https://ui.sandbox.aggreg8.hu')
    .wait('#username')
    .then(result => {
      done();
    })
    .catch((err) => done(err));
});

When('user logs in to the ui', function (done) {
  nightmare
    .type('#username', ['istvan.kadar.js@gmail.com'])
    .type('#password', ['asdf1234'])
    .click('#kc_input_button')
    .wait('#mat-tab-content-0-0 > div > app-bank-access-consent-list-component > div > div.consent-list > div > div > div:nth-child(1) > div > mat-card > mat-card-content > div.subtitle > button')
    .then(result => {
      done();
    })
    .catch((err) => done(err));
});

When('user clicks on bank account options', function (done) {
  nightmare
    .click('#mat-tab-content-0-0 > div > app-bank-access-consent-list-component > div > div.consent-list > div > div > div:nth-child(1) > div > mat-card > mat-card-content > div.subtitle > button')
    .wait('#mat-tab-content-0-0 > div > app-edit-bank-access-consent-component > div > div > button.right.mat-raised-button > span')
    .then(result => {
      done();
    })
    .catch((err) => done(err));
});

When('user selects to delete the account', function (done) {
  nightmare
    .click('#mat-tab-content-0-0 > div > app-edit-bank-access-consent-component > div > div > button.right.mat-raised-button > span')
    .wait('#revokeBtn > span')
    .click('#revokeBtn > span')
    .then(result => {
      done();
    })
    .catch((err) => done(err));
});

Then('the account should be deleted from the app', function (done) {
  nightmare
    .goto('ui.sandbox.aggreg8.hu')
    .then(result => {
      done();
    })
    .catch((err) => done(err));
});
