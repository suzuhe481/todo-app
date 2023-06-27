import { displayUpdatedTodoList } from "../../../modules/display";

const addTodoItem = () => {
  event.preventDefault();

  // Get variables from localStorage
  var projectsList = JSON.parse(localStorage.getItem("projectsList"));
  var currentProject = localStorage.getItem("currentProject");

  // Retrieve form values.
  var title = document.getElementById("todo-title").value;
  var desc = document.getElementById("todo-desc").value;
  var dueDate = document.getElementById("todo-date").value;
  var priority = document.getElementById("todo-priority").checked;

  // Returns if title, description, or duedate is empty.
  if (title == "" || desc == "" || dueDate == "") {
    return;
  }

  // Clear form.
  var form = document.getElementById("todo-form");
  form.reset();

  // Store form values in todo object.
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

  displayUpdatedTodoList();
};

export default addTodoItem;
