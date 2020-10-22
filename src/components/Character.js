import "./character.css";
import { createElement } from "../utils/elements";

function Character({ name, imgSrc }) {
  const title = createElement("p", {
    className: "character__title",
    innerText: name,
  });
  const avatar = createElement("img", {
    className: "character__img",
    src: imgSrc,
    alt: name,
    loading: "lazy",
  });
  const container = createElement("article", {
    className: "character",
    children: [title, avatar],
  });
  return container;
}

export default Character;
