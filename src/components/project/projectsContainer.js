import createProjectForm from "./projectForm";

import switchProjectHandler from "./switchProjectHandler";

const projectsContainer = (projects) => {
  const projectsContainer = document.createElement("div");
  projectsContainer.id = "projects-container";

  // Appends each project as an item to the container.
  for (var i = 0; i < projects.length; i++) {
    const projectItem = document.createElement("div");
    projectItem.dataset.value = i;
    projectItem.innerHTML = projects[i].name;

    projectItem.addEventListener("click", switchProjectHandler);

    projectsContainer.appendChild(projectItem);
  }

  // Project Name
  const projectForm = createProjectForm();

  projectsContainer.appendChild(projectForm);

  return projectsContainer;
};

export default projectsContainer;
