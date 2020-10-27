import { createElement } from "../utils/elements";
import "./button.css";

function Button(props) {
  const element = createElement("button", {
    className: "button",
    ...props,
  });
  return element;
}

export default Button;
