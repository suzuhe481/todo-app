import createTodoForm from "../components/todo/todoForm";
import createTodoContainer from "../components/todo/todoContainer";
import createProjectsContainer from "../components/project/projectsContainer";

// Displays updated project names.
const displayUpdatedProjects = () => {
  const sidebarElement = document.getElementById("side-bar");

  // Deletes current project container.
  const projectsContainerElement =
    document.getElementById("projects-container");
  projectsContainerElement.remove();

  const projectContainer = createProjectsContainer();

  sidebarElement.appendChild(projectContainer);
};

// Switches todo list based on current project.
const displayUpdatedTodoList = () => {
  const maincontentElement = document.getElementById("main-content");

  // Deletes current todoContainer Element.
  const todoContainerElement = document.getElementById("todo-container");
  if (todoContainerElement) {
    todoContainerElement.remove();
  }

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

export { display, displayUpdatedTodoList, displayUpdatedProjects };
