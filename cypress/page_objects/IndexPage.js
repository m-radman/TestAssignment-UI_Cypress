class IndexPage {
  elements = {
    usernameInputField: () => cy.get("#user-name"),
    passwordInputField: () => cy.get("#password"),
    loginBtn: () => cy.get("#login-button")
  }

  enterUsername(username) {
    this.elements.usernameInputField().type(username)
  }

  enterPassword(password) {
    this.elements.passwordInputField().type(password)
  }

  clickLoginBtn() {
    this.elements.loginBtn().click()
  }
}

export default new IndexPage()