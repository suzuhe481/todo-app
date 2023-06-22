// Creates div containing a single todo item.
const todoItem = (todo) => {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");

  const todoTitle = document.createElement("div");
  const todoDescription = document.createElement("div");
  const todoDate = document.createElement("div");
  const todoPriority = document.createElement("div");

  todoTitle.classList.add("todo-title");
  todoDescription.classList.add("todo-description");
  todoDate.classList.add("todo-date");
  todoPriority.classList.add("todo-priority");

  todoTitle.innerHTML = todo.title;
  todoDescription.innerHTML = todo.description;

  var month = todo.dueDate.toLocaleString("default", { month: "short" });
  var day = todo.dueDate.getDate();
  var year = todo.dueDate.getFullYear();
  todoDate.innerHTML = month + " " + day + ", " + year;

  todoPriority.innerHTML = todo.highPriority;

  todoItem.appendChild(todoTitle);
  todoItem.appendChild(todoDescription);
  todoItem.appendChild(todoDate);
  todoItem.appendChild(todoPriority);

  return todoItem;
};

export default todoItem;
