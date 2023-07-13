import { faker } from '@faker-js/faker';

class CheckoutPage {
  elements = {
    firstNameField: () => cy.get("#first-name"),
    lastNameField: () => cy.get("#last-name"),
    zipCodeField: () => cy.get("#postal-code"),
    continueBtn: () => cy.get("#continue"),
    finishBtn: () => cy.get("#finish"),
    checkoutCompleteMsg: () => cy.contains("Thank you for your order!")
  }

  enterFirstName() {
    this.elements.firstNameField().type(faker.person.firstName())
  }

  enterLastName() {
    this.elements.lastNameField().type(faker.person.lastName())
  }

  enterZipCode() {
    this.elements.zipCodeField().type(faker.location.zipCode())
  }

  clickContinue() {
    this.elements.continueBtn().click()
  }

  clickFinish() {
    this.elements.finishBtn().click()
  }
}

export default new CheckoutPage()