import "./styles.css";

import { display } from "./modules/display";

if (!localStorage.getItem("projectsList")) {
  var projectsList = [];

  // Dummy data
  //   var project1 = createProjectItem("Default Project 1");
  //   var project2 = createProjectItem("Default Project 2");

  //   projectsList.push(project1);
  //   projectsList.push(project2);

  //   var todo1 = {
  //     title: "First title",
  //     description: "Description of first todo",
  //     dueDate: new Date("2023, 1, 5"),
  //     highPriority: 1,
  //   };

  //   var todo2 = {
  //     title: "A second title",
  //     description: "More stuff to do",
  //     dueDate: new Date("2023, 5, 11"),
  //     highPriority: false,
  //   };

  //   var todo3 = {
  //     title: "Another todo",
  //     description: "Even more stuff",
  //     dueDate: new Date("2023, 7, 22"),
  //     highPriority: true,
  //   };

  //   projectsList[0].todoList.push(todo1);
  //   projectsList[0].todoList.push(todo2);

  //   projectsList[1].todoList.push(todo3);

  // End of dummy data

  localStorage.setItem("projectsList", JSON.stringify(projectsList));
  localStorage.setItem("currentProject", 0);
}

document.body.appendChild(display());
