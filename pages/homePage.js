import { Selector, t } from "testcafe";

class homePage {
  constructor() {
    this.pokedexTab = Selector(".explore");
  }

  async accessPokedex() {
    await t.click(this.pokedexTab);
  }
}

export default new homePage();
