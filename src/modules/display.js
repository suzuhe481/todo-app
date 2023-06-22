import createTodoForm from "../components/todo/todoForm";
import createTodoItem from "../components/todo/todoItem";

// Dummy data

var projectlist = [];

var project1 = {
  name: "Project 1",
};

var project2 = {
  name: "Project 2",
};

var project3 = {
  name: "Project 3",
};

projectlist.push(project1);
projectlist.push(project2);
projectlist.push(project3);

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

var todo4 = {
  title: "A fourth title",
  description: "Stuff for project 2",
  dueDate: new Date("2023, 5, 11"),
  highPriority: 0,
};

var todo5 = {
  title: "More list",
  description: "Another todo item for project 2",
  dueDate: new Date("2023, 7, 22"),
  highPriority: 1,
};

var todo6 = {
  title: "Todo on project 3",
  description: "Even more stuff",
  dueDate: new Date("2023, 7, 22"),
  highPriority: 1,
};

// Adding dummy data.
var todoList1 = [];
todoList1.push(todo1);
todoList1.push(todo2);
todoList1.push(todo3);
projectlist[0].todoList = todoList1;

var todoList2 = [];
todoList2.push(todo4);
todoList2.push(todo5);
projectlist[1].todoList = todoList2;

var todolist3 = [];
todolist3.push(todo6);
projectlist[2].todoList = todolist3;

// End dummy data

const projectsContainer = () => {
  const projectsContainer = document.createElement("div");
  projectsContainer.id = "projects-container";

  // Appends each project as an item to the container.
  for (var i = 0; i < projectlist.length; i++) {
    const projectItem = document.createElement("div");
    projectItem.innerHTML = projectlist[i].name;

    projectsContainer.appendChild(projectItem);
  }

  return projectsContainer;
};

const createTodoContainer = () => {
  const todoContainer = document.createElement("div");
  todoContainer.id = "todo-container";

  // Appends each todo item to container.
  for (var i = 0; i < todoList1.length; i++) {
    const todoItem = createTodoItem(todoList1[i]);

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
