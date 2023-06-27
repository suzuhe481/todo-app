import createTodoItem from "./todoItem";

const todoContainer = () => {
  var projectsList = JSON.parse(localStorage.getItem("projectsList"));
  var currentProject = localStorage.getItem("currentProject");

  const todoContainer = document.createElement("div");
  todoContainer.id = "todo-container";

  // If a todolist exists for the currentProject, retrieve it.
  if (projectsList[currentProject]) {
    var todoList = projectsList[currentProject].todoList;
  } else {
    return todoContainer;
  }

  // Appends each todo item to container.
  for (var i = 0; i < todoList.length; i++) {
    const todoItem = createTodoItem(todoList[i], i);

    todoContainer.appendChild(todoItem);
  }

  return todoContainer;
};

export default todoContainer;
