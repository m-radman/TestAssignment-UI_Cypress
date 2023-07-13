class InventoryPage {
  elements = {
    backpackAddToCart: () => cy.get("#add-to-cart-sauce-labs-backpack"),
    jacketAddToCart: () => cy.get("#add-to-cart-sauce-labs-fleece-jacket"),
  }

  addItemToCart(element) {
    element.click()
  }

  goToProductPage(productLink) {
    productLink.click()
  }
}

export default new InventoryPage()