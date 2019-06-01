Feature: Bank account synchronization

   I want to add and synchronize my bank account and share its transaction history with the app.

   Scenario: Sync account
   When user opens the app
   And user logs in to the app
   And user adds a bank account
   And user shares the bank accounts history
   And user checks its synced correctly
   Then user should see the bank accounts history in the app
