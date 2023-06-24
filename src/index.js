import "./styles.css";

import createProjectItem from "./components/project/projectItem";

import { display } from "./modules/display";

if (!localStorage.getItem("projectsList")) {
  var projectsList = [];

  var project1 = createProjectItem("Default Project 1");
  var project2 = createProjectItem("Default Project 2");

  projectsList.push(project1);
  projectsList.push(project2);

  var todo1 = {
    title: "First title",
    description: "Description of first todo",
    dueDate: new Date("2023, 1, 5"),
    highPriority: 1,
  };

  var todo2 = {
    title: "A second title",
    description: "More stuff to do",
    dueDate: new Date("2023, 5, 11"),
    highPriority: false,
  };

  var todo3 = {
    title: "Another todo",
    description: "Even more stuff",
    dueDate: new Date("2023, 7, 22"),
    highPriority: true,
  };

  var todoList1 = [];
  todoList1.push(todo1);
  todoList1.push(todo2);

  var todoList2 = [];
  todoList2.push(todo3);

  projectsList[0].todoList = todoList1;
  projectsList[1].todoList = todoList2;

  localStorage.setItem("projectsList", JSON.stringify(projectsList));
  localStorage.setItem("currentProject", 0);
}

document.body.appendChild(display());
