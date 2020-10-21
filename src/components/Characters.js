import "./characters.css";
import { createElement } from "../utils/elements";

function Characters() {
  const characters = createElement("section", {
    className: "characters",
  });
  return characters;
}

export default Characters;
