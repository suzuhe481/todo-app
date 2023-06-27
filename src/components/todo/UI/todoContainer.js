import createTodoItem from "./todoItem";

import "./todoContainer.css";

const todoContainer = () => {
  var projectsList = JSON.parse(localStorage.getItem("projectsList"));
  var currentProject = localStorage.getItem("currentProject");

  const todoContainer = document.createElement("div");
  todoContainer.id = "todo-container";

  // Returns empty message if projectsList is undefined or empty.
  if (projectsList === undefined || projectsList.length == 0) {
    const todoEmptyMessage = document.createElement("div");
    todoEmptyMessage.id = "empty-todo-message";
    todoEmptyMessage.innerHTML =
      "Create a new project to start making a todo list.";
    todoContainer.appendChild(todoEmptyMessage);

    return todoContainer;
  }
  // Returns empty message if project exists and has no todos,
  else if (
    projectsList[currentProject] == undefined ||
    currentProject == null ||
    projectsList[currentProject].todoList.length == 0
  ) {
    const todoEmptyMessage = document.createElement("div");
    todoEmptyMessage.id = "empty-todo-message";
    todoEmptyMessage.innerHTML = "No todos in this project.";
    todoContainer.appendChild(todoEmptyMessage);

    return todoContainer;
  }

  var todoList = projectsList[currentProject].todoList;

  // Appends each todo item to container.
  for (var i = 0; i < todoList.length; i++) {
    const todoItem = createTodoItem(todoList[i], i);

    todoContainer.appendChild(todoItem);
  }

  return todoContainer;
};

export default todoContainer;
