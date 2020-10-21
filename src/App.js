import "./app.css";
import Character from "./components/Character";
import Header from "./components/Header";
import { createElement } from "./utils/elements";

function App() {
  const header = Header();

  const rickSanchez = Character({
    name: "Rick Sanchez",
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  });
  const mortySmith = Character({
    name: "Morty Smith",
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  });

  const main = createElement("main", {
    children: [rickSanchez, mortySmith],
  });
  const container = createElement("div", { children: [header, main] });
  return container;
}

export default App;
