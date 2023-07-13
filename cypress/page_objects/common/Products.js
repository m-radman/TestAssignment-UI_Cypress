class Products {
  elements = {
    backpackLink: () => cy.contains("Backpack"),
    jacketLink: () => cy.contains("Sauce Labs Fleece Jacket"),
  }
}

export default new Products()