import IndexPage from "../page_objects/IndexPage"
import InventoryPage from "../page_objects/InventoryPage"
import SingleProductPage from "../page_objects/SingleProductPage"
import NavBar from "../page_objects/common/NavBar"
import Products from "../page_objects/common/Products"
import CartPage from "../page_objects/CartPage"

describe('template spec', () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/", {timeout: 30000})
  })

  it('login', () => {
    IndexPage.enterUsername("standard_user")
    IndexPage.enterPassword("secret_sauce")
    IndexPage.clickLoginBtn()

    InventoryPage.addItemToCart(InventoryPage.elements.backpackAddToCart())
    InventoryPage.goToProductPage(Products.elements.jacketLink())
    SingleProductPage.addItemToCart()

    NavBar.elements.shoppingCartBadge().should("have.text", "2")

    NavBar.goToCart()
    Products.elements.jacketLink().should("exist")
    
    CartPage.removeItemFromCart(CartPage.elements.removeJacket())
    Products.elements.jacketLink().should("not.exist")

    CartPage.goToCheckout()
  })
})