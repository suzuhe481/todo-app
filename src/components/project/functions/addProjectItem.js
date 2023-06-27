import { projectItemObject } from "../UI/projectItem";
import {
  displayUpdatedProjects,
  displayUpdatedTodoList,
} from "../../../modules/display";

const addProjectItem = () => {
  event.preventDefault();

  // Get variables from localStorage
  var projectsList = JSON.parse(localStorage.getItem("projectsList"));

  var projectName = document.getElementById("project-name").value;

  // Returns if projectName is empty
  if (projectName == "") {
    return;
  }

  // Clear form.
  var form = document.getElementById("project-form");
  form.reset();

  var newProject = projectItemObject(projectName);

  projectsList.push(newProject);

  // Update localStorage
  localStorage.setItem("projectsList", JSON.stringify(projectsList));

  // Switch currentProject to newly added project in localstorage.
  var currentProject = localStorage.getItem("currentProject");
  currentProject = projectsList.length;
  localStorage.setItem("currentProject", currentProject);

  displayUpdatedProjects();
  displayUpdatedTodoList();
};

export default addProjectItem;
