import removeProjectItem from "../functions/removeProjectItem";

import "./projectItem.css";

// Creates empty project object with given name.
const projectItemObject = (projectName) => {
  var project = {
    name: projectName,
    todoList: [],
  };

  return project;
};

// Creates the element for the projectItem.
const projectItem = (project, index) => {
  const projectItem = document.createElement("div");
  projectItem.dataset.value = index;
  projectItem.innerHTML = project.name;
  projectItem.classList.add("project-item");

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.addEventListener("click", removeProjectItem);
  removeButton.innerHTML = "X";

  projectItem.appendChild(removeButton);

  return projectItem;
};

export { projectItemObject, projectItem };
