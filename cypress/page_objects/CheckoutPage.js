
class CheckoutPage {
  elements = {
    firstNameField: () => cy.get("#first-name"),
    lastNameField: () => cy.get("#last-name"),
    zipCodeField: () => cy.get("#postal-code"),
    continueBtn: () => cy.get("#continue"),
    finishBtn: () => cy.get("#finish"),
    checkoutCompleteMsg: () => cy.contains("Thank you for your order!")
  }

  enterFirstName(firstName) {
    this.elements.firstNameField().type(firstName)
  }

  enterLastName(lastName) {
    this.elements.lastNameField().type(lastName)
  }

  enterZipCode(zip) {
    this.elements.zipCodeField().type(zip)
  }

  clickContinue() {
    this.elements.continueBtn().click()
  }

  clickFinish() {
    this.elements.finishBtn().click()
  }
}

export default new CheckoutPage()