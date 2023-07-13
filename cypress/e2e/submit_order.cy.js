import IndexPage from "../page_objects/IndexPage"
import InventoryPage from "../page_objects/InventoryPage"
import SingleProductPage from "../page_objects/SingleProductPage"
import NavBar from "../page_objects/common/NavBar"
import Products from "../page_objects/common/Products"
import CartPage from "../page_objects/CartPage"
import CheckoutPage from "../page_objects/CheckoutPage"

describe('template spec', () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/")
  })

  it('login', () => {
    IndexPage.enterUsername("standard_user")
    IndexPage.enterPassword("secret_sauce")
    IndexPage.clickLoginBtn()

    InventoryPage.addItemToCart(InventoryPage.elements.jacketAddToCart())
    NavBar.elements.shoppingCartBadge().should("have.text", "1")

    InventoryPage.goToProductPage(Products.elements.backpackLink())
    SingleProductPage.addItemToCart()
    NavBar.elements.shoppingCartBadge().should("have.text", "2")

    NavBar.goToCart()
    Products.elements.jacketLink().should("exist")
    Products.elements.backpackLink().should("exist")

    
    CartPage.removeItemFromCart(CartPage.elements.removeJacket())
    NavBar.elements.shoppingCartBadge().should("have.text", "1")
    Products.elements.jacketLink().should("not.exist")
    Products.elements.backpackLink().should("exist")

    CartPage.goToCheckout()
    CheckoutPage.enterFirstName()
    CheckoutPage.enterLastName()
    CheckoutPage.enterZipCode()
    CheckoutPage.clickContinue()
    CheckoutPage.clickFinish()
    CheckoutPage.elements.checkoutCompleteMsg().should("be.visible")
  })
})