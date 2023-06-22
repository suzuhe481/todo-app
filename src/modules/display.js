// Dummy data

const project1 = document.createElement("div");
project1.innerHTML = "Project 1";

const project2 = document.createElement("div");
project2.innerHTML = "Project 2";

const project3 = document.createElement("div");
project3.innerHTML = "Project 3";

var list = [];

var todo1 = {
  title: "First title",
  description: "Description of first todo",
  dueDate: new Date("2023, 1, 5"),
  highPriority: 1,
};

var todo2 = {
  title: "A second title",
  description: "More stuff to do",
  dueDate: new Date("2023, 5, 11"),
  highPriority: 0,
};

var todo3 = {
  title: "Another todo",
  description: "Even more stuff",
  dueDate: new Date("2023, 7, 22"),
  highPriority: 1,
};

// End dummy data

const projectsContainer = () => {
  const projectsContainer = document.createElement("div");
  projectsContainer.id = "projects-container";

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

  const submitButton = document.createElement("button");
  submitButton.type = "button";
  submitButton.innerHTML = "Submit";

  // Adding rows to form
  form.appendChild(titleRow);
  form.appendChild(descRow);
  form.appendChild(dateRow);
  form.appendChild(priorityRow);
  form.appendChild(submitButton);

  return form;
};

const createTodoContainer = () => {
  list.push(todo1);
  list.push(todo2);
  list.push(todo3);

  const todoContainer = document.createElement("div");
  todoContainer.id = "todo-container";

  // Appends each todo item to container.
  for (var i = 0; i < list.length; i++) {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    const todoTitle = document.createElement("div");
    const todoDescription = document.createElement("div");
    const todoDate = document.createElement("div");
    const todoPriority = document.createElement("div");

    todoTitle.classList.add("todo-title");
    todoDescription.classList.add("todo-description");
    todoDate.classList.add("todo-date");
    todoPriority.classList.add("todo-priority");

    todoTitle.innerHTML = list[i].title;
    todoDescription.innerHTML = list[i].description;

    var month = list[i].dueDate.toLocaleString("default", { month: "short" });
    var day = list[i].dueDate.getDate();
    var year = list[i].dueDate.getFullYear();
    todoDate.innerHTML = month + " " + day + ", " + year;

    todoPriority.innerHTML = list[i].highPriority;

    todoItem.appendChild(todoTitle);
    todoItem.appendChild(todoDescription);
    todoItem.appendChild(todoDate);
    todoItem.appendChild(todoPriority);

    todoContainer.appendChild(todoItem);
  }

  return todoContainer;
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

  const todoContainer = createTodoContainer();
  maincontent.appendChild(todoContainer);

  mainpage.appendChild(sidebar);
  mainpage.appendChild(maincontent);

  return mainpage;
};

export default display;
