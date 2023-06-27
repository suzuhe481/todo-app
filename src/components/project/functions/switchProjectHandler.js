import { displayUpdatedTodoList } from "../../../modules/display";

const switchProjectHandler = (event) => {
  //  Retrieve project to switch to from element clicked.
  var projectNumToSwitch = event.target.getAttribute("data-value");

  //  Changes localStorage of variable "currentProject" to the project number clicked.
  localStorage.setItem("currentProject", projectNumToSwitch);

  displayUpdatedTodoList();
};

export default switchProjectHandler;
