import "./styles.css";

import { display } from "./modules/display";

if (!localStorage.getItem("projectsList")) {
  var projectsList = [];

  localStorage.setItem("projectsList", JSON.stringify(projectsList));
  localStorage.setItem("currentProject", 0);
}

document.body.appendChild(display());
