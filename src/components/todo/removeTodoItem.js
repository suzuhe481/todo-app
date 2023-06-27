import { displayUpdatedTodoList } from "../../modules/display";

const removeTodoItem = (event) => {
  console.log("removing");
  var projectsList = JSON.parse(localStorage.getItem("projectsList"));
  var currentProject = localStorage.getItem("currentProject");

  var todoToRemove = event.target.parentNode.getAttribute("data-value");

  projectsList[currentProject].todoList.splice(todoToRemove, 1);

  // Update localStorage
  localStorage.setItem("projectsList", JSON.stringify(projectsList));
  displayUpdatedTodoList();
};

export default removeTodoItem;
