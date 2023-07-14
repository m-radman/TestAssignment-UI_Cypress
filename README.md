# Automation assignment UI testing task

Main objective of this task is to write e2e automation tests for the https://www.saucedemo.com/.
Steps to follow are:

- Go to https://www.saucedemo.com/
- Log in to the site
- Add an item from the list to the cart
- Verify that the cart badge is updated correctly
- Open another item’s details page
- Add the item to the cart
- Open the cart
- Verify that the correct items are present (2 different items)
- Remove the first item from the cart
- Verify that the correct item is present (1 item)
- Continue to the Checkout page
- Complete the checkout form
- Complete the order
- Verify that the order is completed successfully with the displayed message

Here is presented the solution for the task using Cypress automation framework.
You can see my solution using WebDriverIO here [link].

---

### How to run tests

For running tests you need to take next steps:

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`
3. Run tests using these commands:
   - To run tests headless use `npm run cypress:run`
   - To open Cypress and run tests from the browser use `npm run cypress:open`