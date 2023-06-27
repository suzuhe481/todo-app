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

  var dateRetrieved = new Date(todo.dueDate);

  // Getting individual date elements.
  var month = dateRetrieved.toLocaleString("default", { month: "short" });
  var day = dateRetrieved.getDate();
  var year = dateRetrieved.getFullYear();
  todoDate.innerHTML = "Due: " + month + " " + day + ", " + year;

  todoPriority.innerHTML = todo.highPriority;

  if (todo.highPriority) {
    todoItem.classList.add("high-priority");
  }

  todoItem.appendChild(todoTitle);
  todoItem.appendChild(todoDescription);
  todoItem.appendChild(todoDate);
  todoItem.appendChild(todoPriority);

  return todoItem;
};

export default todoItem;
