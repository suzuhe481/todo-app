import "./styles.css";

function component() {
  const element = document.createElement("div");

  element.innerHTML = "Todo app";

  return element;
}

document.body.appendChild(component());
