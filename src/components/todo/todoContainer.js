import createTodoItem from "./todoItem";

const todoContainer = () => {
  var projectsList = JSON.parse(localStorage.getItem("projectsList"));
  var currentProject = localStorage.getItem("currentProject");

  var todoList = projectsList[currentProject].todoList;

  const todoContainer = document.createElement("div");
  todoContainer.id = "todo-container";

  // Appends each todo item to container.
  for (var i = 0; i < todoList.length; i++) {
    const todoItem = createTodoItem(todoList[i]);

    todoContainer.appendChild(todoItem);
  }

  return todoContainer;
};

export default todoContainer;
