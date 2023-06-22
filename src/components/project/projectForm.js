const createProjectForm = () => {
  const projectForm = document.createElement("div");
  projectForm.classList.add("form-row");

  const nameLabel = document.createElement("label");
  nameLabel.for = "project-name";
  nameLabel.innerHTML = "New Project Name";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "project-name";
  nameInput.name = "project-name";

  projectForm.appendChild(nameLabel);
  projectForm.appendChild(nameInput);

  return projectForm;
};

export default createProjectForm;
