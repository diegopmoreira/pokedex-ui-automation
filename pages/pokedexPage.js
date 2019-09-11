import { Selector, t } from "testcafe";

class pokedexPage {
  constructor() {
    this.searchInput = Selector("#searchInput");
    this.searchButton = Selector("#search");
    this.resultsList = Selector(".results > li");
    this.pokemonNameResult = Selector(".results li .pokemon-info h5");
    this.pokemonIDResult = Selector(".results li .pokemon-info .id");
    this.loginAnchor = Selector("p > a").withText("Log In");
  }

  async loginClick() {
    await t.click(this.loginAnchor);
  }

  async searchPokemonNameOrID(idName) {
    await t.typeText(this.searchInput, idName).click(this.searchButton);
  }
}

export default new pokedexPage();
