import homePage from "../pages/homePage";
import pokedexPage from "../pages/pokedexPage";
import loginPage from "../pages/loginPage";

fixture`Pokedex Automation Test`.page`https://www.pokemon.com/us/pokedex/`;

test("Test Sign In", async t => {
  await pokedexPage.loginClick();
  await loginPage.signIn("diegomoreira123", "123456789Aa!");
  await t.expect(loginPage.logoutButton.exists).ok("The user is logged on");
});

test("Test Search Pokemon by Name", async t => {
  await pokedexPage.resultsList.with({
    visibilityCheck: true
  })();
  await pokedexPage.searchPokemonNameOrID("Charizard");
  await t
    .expect(await pokedexPage.pokemonNameResult.innerText)
    .eql("Charizard");
  await t.expect(await pokedexPage.pokemonIDResult.innerText).eql("#006");
});

test("Test Search Pokemon by ID", async t => {
  await pokedexPage.resultsList.with({
    visibilityCheck: true
  })();
  await pokedexPage.searchPokemonNameOrID("006");
  await t
    .expect(await pokedexPage.pokemonNameResult.innerText)
    .eql("Charizard");
  await t.expect(await pokedexPage.pokemonIDResult.innerText).eql("#006");
});
