class SingleProductPage {
  elements = {
    addToCartButton: () => cy.contains("Add to cart")
  }

  addItemToCart() {
    this.elements.addToCartButton().click()
  }
}

export default new SingleProductPage()