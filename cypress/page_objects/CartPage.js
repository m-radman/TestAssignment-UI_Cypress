class CartPage {
  elements = {
    removeBackpack: () => cy.get("#remove-sauce-labs-backpack"),
    removeJacket: () => cy.get("#remove-sauce-labs-fleece-jacket"),
    checkoutBtn: () => cy.get("#checkout")
  }

  removeItemFromCart(element) {
    element.click()
  }

  goToCheckout() {
    this.elements.checkoutBtn().click()
  }
}

export default new CartPage()