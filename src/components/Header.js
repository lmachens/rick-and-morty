import "./header.css";
import { createElement } from "../utils/elements";

function Header() {
  const header = createElement("header", {
    className: "header",
    children: [createElement("h1", { innerText: "Rick and Morty" })],
  });
  return header;
}

export default Header;
