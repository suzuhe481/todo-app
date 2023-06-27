import createTodoItem from "./todoItem";

import "./todoContainer.css";

const todoContainer = () => {
  var projectsList = JSON.parse(localStorage.getItem("projectsList"));
  var currentProject = localStorage.getItem("currentProject");

  const todoContainer = document.createElement("div");
  todoContainer.id = "todo-container";

  // If todoList in current project is empty, return empty todoContainer.
  if (projectsList[currentProject].todoList.length == 0) {
    const todoEmptyMessage = document.createElement("div");
    todoEmptyMessage.id = "empty-todo-message";
    todoEmptyMessage.innerHTML = "No todos in this project.";
    todoContainer.appendChild(todoEmptyMessage);

    return todoContainer;
  } else {
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
