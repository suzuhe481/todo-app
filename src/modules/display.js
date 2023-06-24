import createTodoForm from "../components/todo/todoForm";
import createTodoContainer from "../components/todo/todoContainer";
import createProjectsContainer from "../components/project/projectsContainer";

// Dummy data

// var projectsList = [];

// var project1 = createProjectItem("Project 1");
// var project2 = createProjectItem("Second project");
// var project3 = createProjectItem("Last project");

// projectsList.push(project1);
// projectsList.push(project2);
// projectsList.push(project3);

// var todo1 = {
//   title: "First title",
//   description: "Description of first todo",
//   dueDate: new Date("2023, 1, 5"),
//   highPriority: 1,
// };

// var todo2 = {
//   title: "A second title",
//   description: "More stuff to do",
//   dueDate: new Date("2023, 5, 11"),
//   highPriority: false,
// };

// var todo3 = {
//   title: "Another todo",
//   description: "Even more stuff",
//   dueDate: new Date("2023, 7, 22"),
//   highPriority: true,
// };

// var todo4 = {
//   title: "A fourth title",
//   description: "Stuff for project 2",
//   dueDate: new Date("2023, 5, 11"),
//   highPriority: false,
// };

// var todo5 = {
//   title: "More list",
//   description: "Another todo item for project 2",
//   dueDate: new Date("2023, 7, 22"),
//   highPriority: true,
// };

// var todo6 = {
//   title: "Todo on project 3",
//   description: "Even more stuff",
//   dueDate: new Date("2023, 7, 22"),
//   highPriority: true,
// };

// Adding dummy data.
// var todoList1 = [];
// todoList1.push(todo1);
// todoList1.push(todo2);
// todoList1.push(todo3);
// projectsList[0].todoList = todoList1;

// var todoList2 = [];
// todoList2.push(todo4);
// todoList2.push(todo5);
// projectsList[1].todoList = todoList2;

// var todolist3 = [];
// todolist3.push(todo6);
// projectsList[2].todoList = todolist3;

// Local Storage
// localStorage.setItem("projectsList", JSON.stringify(projectsList));
// localStorage.setItem("currentProject", 0);

// End dummy data

// Switches todo list based on current project.
const displaySwitchedProject = () => {
  const maincontentElement = document.getElementById("main-content");

  // Deletes current todoContainer Element.
  const todoContainerElement = document.getElementById("todo-container");
  todoContainerElement.remove();

  const todoContainer = createTodoContainer();

  maincontentElement.appendChild(todoContainer);
};

// Returns initial page.
const display = () => {
  const mainpage = document.createElement("div");
  mainpage.id = "main-page";

  const sidebar = document.createElement("div");
  sidebar.id = "side-bar";
  sidebar.appendChild(createProjectsContainer());

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

export { display, displaySwitchedProject };
