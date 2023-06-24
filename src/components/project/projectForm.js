import addProjectItem from "../project/addProjectItem";

const createProjectForm = () => {
  const form = document.createElement("form");
  form.id = "project-form";
  form.classList.add("form-row");

  const nameRow = document.createElement("div");

  const nameLabel = document.createElement("label");
  nameLabel.for = "project-name";
  nameLabel.innerHTML = "New Project Name";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "project-name";
  nameInput.name = "project-name";

  form.appendChild(nameLabel);
  form.appendChild(nameInput);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.onclick = addProjectItem;
  submitButton.innerHTML = "Submit";

  nameRow.appendChild(nameLabel);
  nameRow.appendChild(nameInput);

  form.appendChild(nameRow);
  form.appendChild(submitButton);

  return form;
};

export default createProjectForm;
