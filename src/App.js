import "./app.css";
import Character from "./components/Character";
import Characters from "./components/Characters";
import Header from "./components/Header";
import Search from "./components/Search";
import { getCharacters } from "./utils/api";
import { createElement } from "./utils/elements";

function App() {
  const header = Header();

  const characterContainer = Characters();
  const main = createElement("main", {
    className: "main",
    children: [characterContainer],
  });

  async function loadCharacters(name) {
    const characters = await getCharacters(name);

    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    const characterElements = characters.map((character) =>
      Character({
        name: character.name,
        imgSrc: character.image,
        isFavorite: favorites.includes(character.name),
      })
    );
    characterContainer.innerHTML = "";
    characterContainer.append(...characterElements);
  }

  const search = Search({
    onchange: (value) => loadCharacters(value),
  });

  loadCharacters();

  const container = createElement("div", {
    children: [header, search, main],
  });
  return container;
}

export default App;
