import "./character.css";
import { createElement } from "../utils/elements";

function Character({ name, imgSrc }) {
  const title = createElement("div", {
    innerText: name,
  });
  const avatar = createElement("img", {
    src: imgSrc,
    alt: name,
  });
  const container = createElement("div", {
    className: "character",
    children: [title, avatar],
  });
  return container;
}

export default Character;
