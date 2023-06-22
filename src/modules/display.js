import createTodoForm from "../components/todo/todoForm";
import createTodoItem from "../components/todo/todoItem";

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

const createTodoContainer = () => {
  // Adding dummy data.
  list.push(todo1);
  list.push(todo2);
  list.push(todo3);

  const todoContainer = document.createElement("div");
  todoContainer.id = "todo-container";

  // Appends each todo item to container.
  for (var i = 0; i < list.length; i++) {
    const todoItem = createTodoItem(list[i]);

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
