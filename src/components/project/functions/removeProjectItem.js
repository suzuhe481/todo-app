import { displayUpdatedProjects } from "../../../modules/display";

// Removes a project.
const removeProjectItem = (event) => {
  var projectsList = JSON.parse(localStorage.getItem("projectsList"));

  var projectToRemove = event.target.parentNode.getAttribute("data-value");

  // Removes selected project.
  projectsList.splice(projectToRemove, 1);

  // Update localStorage
  localStorage.setItem("projectsList", JSON.stringify(projectsList));
  displayUpdatedProjects();
};

export default removeProjectItem;
