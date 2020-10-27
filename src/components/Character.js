import "./character.css";
import { createElement } from "../utils/elements";
import starActiveSrc from "../assets/star_active.svg";
import starInactiveSrc from "../assets/star_inactive.svg";

function Character({ name, imgSrc, isFavorite }) {
  const title = createElement("p", {
    className: "character__title",
    innerText: name,
  });
  const favoriteImg = createElement("img", {
    src: isFavorite ? starActiveSrc : starInactiveSrc,
  });
  const favorite = createElement("button", {
    className: "character__favorite",
    onclick: () => {
      let currentFavorites = JSON.parse(
        localStorage.getItem("favorites") || "[]"
      );
      const isFavorite = currentFavorites.includes(name);
      if (isFavorite) {
        currentFavorites = currentFavorites.filter(
          (favorite) => favorite !== name
        );
      } else {
        currentFavorites.push(name);
      }

      localStorage.setItem("favorites", JSON.stringify(currentFavorites));
      favoriteImg.src = !isFavorite ? starActiveSrc : starInactiveSrc;
    },
    children: [favoriteImg],
  });

  const header = createElement("div", {
    className: "character__header",
    children: [title, favorite],
  });
  const avatar = createElement("img", {
    className: "character__img",
    src: imgSrc,
    alt: name,
    loading: "lazy",
  });
  const container = createElement("article", {
    className: "character",
    children: [header, avatar],
  });
  return container;
}

export default Character;
