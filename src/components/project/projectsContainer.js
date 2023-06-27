import createProjectForm from "./projectForm";
import { projectItem as createProjectItem } from "./projectItem";

import switchProjectHandler from "./switchProjectHandler";

const projectsContainer = () => {
  const projectsContainer = document.createElement("div");
  projectsContainer.id = "projects-container";

  // Get variables from localStorage
  var projectsList = JSON.parse(localStorage.getItem("projectsList"));

  // Appends each project as an item to the container.
  for (var i = 0; i < projectsList.length; i++) {
    const projectItem = createProjectItem(projectsList[i], i);

    projectItem.addEventListener("click", switchProjectHandler);

    projectsContainer.appendChild(projectItem);
  }

  // Project Name
  const projectForm = createProjectForm();

  projectsContainer.appendChild(projectForm);

  return projectsContainer;
};

export default projectsContainer;
