import createTodoItem from "./todoItem";

const addTodoItem = () => {
  event.preventDefault();

  // Get variables from localStorage
  var projectsList = JSON.parse(localStorage.getItem("projectsList"));
  var currentProject = localStorage.getItem("currentProject");

  var title = document.getElementById("todo-title").value;
  var desc = document.getElementById("todo-desc").value;
  var dueDate = document.getElementById("todo-date").value;
  var priority = document.getElementById("todo-priority").checked;

  var todo = {
    title: title,
    description: desc,
    dueDate: dueDate,
    highPriority: priority,
  };

  // Update with new project.
  projectsList[currentProject].todoList.push(todo);

  // Update localStorage
  localStorage.setItem("projectsList", JSON.stringify(projectsList));
};

export default addTodoItem;
