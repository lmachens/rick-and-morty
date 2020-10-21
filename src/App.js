import "./app.css";
import Character from "./components/Character";
import Characters from "./components/Characters";
import Header from "./components/Header";
import { getCharacters } from "./utils/api";
import { createElement } from "./utils/elements";

function App() {
  const header = Header();

  const characterContainer = Characters();
  const main = createElement("main", {
    className: "main",
    children: [characterContainer],
  });

  async function loadCharacters() {
    const characters = await getCharacters();
    const characterElements = characters.map((character) =>
      Character({
        name: character.name,
        imgSrc: character.image,
      })
    );

    characterContainer.append(...characterElements);
  }

  loadCharacters();
  const container = createElement("div", { children: [header, main] });
  return container;
}

export default App;
