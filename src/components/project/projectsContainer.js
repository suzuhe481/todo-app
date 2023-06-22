import createProjectForm from "./projectForm";

const projectsContainer = (projects) => {
  const projectsContainer = document.createElement("div");
  projectsContainer.id = "projects-container";

  // Appends each project as an item to the container.
  for (var i = 0; i < projects.length; i++) {
    const projectItem = document.createElement("div");
    projectItem.innerHTML = projects[i].name;

    projectsContainer.appendChild(projectItem);
  }

  // Project Name
  const projectForm = createProjectForm();

  projectsContainer.appendChild(projectForm);

  return projectsContainer;
};

export default projectsContainer;
