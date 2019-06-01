Feature: Bank account synchronization

   User wants to add and synchronize his bank account and share its transaction history with the app.

   Scenario: Sync account
   Given user opens the app
   When user logs in to the app
   And user adds a bank account
   And user shares the bank accounts history
   And user checks its synced correctly
   Then user should see the bank accounts history in the app
