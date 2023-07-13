class NavBar {
  elements = {
    shoppingCartLink: () => cy.get("#shopping_cart_container>a"),
    shoppingCartBadge: () => cy.get("#shopping_cart_container span")
  }

  goToCart() {
    this.elements.shoppingCartLink().click()
  }
}

export default new NavBar()