import { Selector, t } from "testcafe";

class loginPage {
  constructor() {
    this.usernameField = Selector("#username");
    this.passwordField = Selector("#password");
    this.signInButton = Selector("#btnLogin");
    this.logoutButton = Selector("#sidebar-logout-button");
  }

  async signIn(username, password) {
    await t
      .typeText(this.usernameField, username)
      .typeText(this.passwordField, password)
      .click(this.signInButton);
  }
}

export default new loginPage();
