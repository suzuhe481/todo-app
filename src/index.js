import "./styles.css";

import { display } from "./modules/display";

if (!localStorage.getItem("projectsList")) {
  var projectsList = [];
  var currentProject;

  localStorage.setItem("projectsList", JSON.stringify(projectsList));
  localStorage.setItem("currentProject", currentProject);
}

document.body.appendChild(display());
