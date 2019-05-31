const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

nightmare
  .goto('ui.sandbox.aggreg8.hu')
  .wait('#username')
  .type('#username', 'istvan.kadar.js@gmail.com')
  .type('#password', 'asdf1234')
  .click('#kc_input_button')
  .wait('.right edit-mode-button mat-icon-button ng-star-inserted')
  .click('.right edit-mode-button mat-icon-button ng-star-inserted')
  .wait('.mat-button-wrapper')
  .click('.mat-button-wrapper')
  .wait('#revokeBtn')
  .click('#revokeBtn')
  .end();
