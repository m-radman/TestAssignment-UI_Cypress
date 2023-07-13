import { faker } from '@faker-js/faker';

import IndexPage from "../page_objects/IndexPage"
import InventoryPage from "../page_objects/InventoryPage"
import SingleProductPage from "../page_objects/SingleProductPage"
import NavBar from "../page_objects/common/NavBar"
import Products from "../page_objects/common/Products"
import CartPage from "../page_objects/CartPage"
import CheckoutPage from "../page_objects/CheckoutPage"

describe("User can successfully submit order", () => {
  it("should successfully submit order", () => {
    cy.visit("https://www.saucedemo.com/")

    //Login user
    IndexPage.enterUsername("standard_user")
    IndexPage.enterPassword("secret_sauce")
    IndexPage.clickLoginBtn()

    //Add first item to the cart
    InventoryPage.addItemToCart(InventoryPage.elements.jacketAddToCart())
    NavBar.elements.shoppingCartBadge().should("have.text", "1")

    //Add second item to the cart
    InventoryPage.goToProductPage(Products.elements.backpackLink())
    SingleProductPage.addItemToCart()
    NavBar.elements.shoppingCartBadge().should("have.text", "2")

    //Verify the items are in the cart
    NavBar.goToCart()
    Products.elements.jacketLink().should("exist")
    Products.elements.backpackLink().should("exist")
    
    //Remove one item from the cart
    CartPage.removeItemFromCart(CartPage.elements.removeJacket())
    NavBar.elements.shoppingCartBadge().should("have.text", "1")

    //Verify right item is still in the cart
    Products.elements.jacketLink().should("not.exist")
    Products.elements.backpackLink().should("exist")

    //Go to the checkout page
    CartPage.goToCheckout()

    //Fill the checkout form
    CheckoutPage.enterFirstName(faker.person.firstName())
    CheckoutPage.enterLastName(faker.person.lastName())
    CheckoutPage.enterZipCode(faker.location.zipCode())
    CheckoutPage.clickContinue()

    //Finalize the order
    CheckoutPage.clickFinish()

    //Verify the order is successfully submited
    CheckoutPage.elements.checkoutCompleteMsg().should("be.visible")
  })
})