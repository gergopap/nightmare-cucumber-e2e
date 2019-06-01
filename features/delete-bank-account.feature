Feature: Delete bank account

   User wants to delete one of his bank account from the app.

   Scenario: Delete bank account
   Given user opens the app
   When user logs in to the app
   And user clicks on bank account options
   And user selects to delete the account
   Then the account should be deleted from the app
