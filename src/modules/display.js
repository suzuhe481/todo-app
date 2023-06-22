const projectsContainer = () => {
  const projectsContainer = document.createElement("div");
  projectsContainer.id = "projects-container";

  const project1 = document.createElement("div");
  project1.innerHTML = "Project 1";

  const project2 = document.createElement("div");
  project2.innerHTML = "Project 2";

  const project3 = document.createElement("div");
  project3.innerHTML = "Project 3";

  projectsContainer.appendChild(project1);
  projectsContainer.appendChild(project2);
  projectsContainer.appendChild(project3);

  return projectsContainer;
};

// Creates the form element for todos.
const createTodoForm = () => {
  const form = document.createElement("form");

  // Title
  const titleRow = document.createElement("div");
  titleRow.classList.add("form-row");
  const titleLabel = document.createElement("label");
  titleLabel.innerHTML = "Title";
  const titleInput = document.createElement("input");

  titleRow.appendChild(titleLabel);
  titleRow.appendChild(titleInput);

  // Description
  const descRow = document.createElement("div");
  descRow.classList.add("form-row");
  const descLabel = document.createElement("label");
  descLabel.innerHTML = "Description";
  const descInput = document.createElement("input");

  descRow.appendChild(descLabel);
  descRow.appendChild(descInput);

  // Due date
  const dateRow = document.createElement("div");
  dateRow.classList.add("form-row");
  const dateLabel = document.createElement("label");
  dateLabel.innerHTML = "Due Date";
  const dateInput = document.createElement("input");
  dateInput.type = "date";

  dateRow.appendChild(dateLabel);
  dateRow.appendChild(dateInput);

  // Priority
  const priorityRow = document.createElement("div");
  priorityRow.classList.add("form-row");
  const priorityLabel = document.createElement("label");
  priorityLabel.innerHTML = "High Priority";
  const priorityInput = document.createElement("input");
  priorityInput.type = "checkbox";

  priorityRow.appendChild(priorityLabel);
  priorityRow.appendChild(priorityInput);

  // Adding rows to form
  form.appendChild(titleRow);
  form.appendChild(descRow);
  form.appendChild(dateRow);
  form.appendChild(priorityRow);

  return form;
};

// Returns initial page.
const display = () => {
  const mainpage = document.createElement("div");
  mainpage.id = "main-page";

  const sidebar = document.createElement("div");
  sidebar.id = "side-bar";
  sidebar.appendChild(projectsContainer());

  const maincontent = document.createElement("div");
  maincontent.id = "main-content";

  const todoForm = createTodoForm();
  maincontent.appendChild(todoForm);

  mainpage.appendChild(sidebar);
  mainpage.appendChild(maincontent);

  return mainpage;
};

export default display;
