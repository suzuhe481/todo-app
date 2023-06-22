import addTodoItem from "./addTodoItem";

// Creates the form element for todos.
const createTodoForm = () => {
  const form = document.createElement("form");

  // Title
  const titleRow = document.createElement("div");
  titleRow.classList.add("form-row");
  const titleLabel = document.createElement("label");
  titleLabel.for = "todo-title";
  titleLabel.innerHTML = "Title";
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "todo-title";
  titleInput.name = "todo-title";

  titleRow.appendChild(titleLabel);
  titleRow.appendChild(titleInput);

  // Description
  const descRow = document.createElement("div");
  descRow.classList.add("form-row");
  const descLabel = document.createElement("label");
  descLabel.for = "todo-desc";
  descLabel.innerHTML = "Description";
  const descInput = document.createElement("input");
  descInput.type = "text";
  descInput.id = "todo-desc";
  descInput.name = "todo-desc";

  descRow.appendChild(descLabel);
  descRow.appendChild(descInput);

  // Due date
  const dateRow = document.createElement("div");
  dateRow.classList.add("form-row");
  const dateLabel = document.createElement("label");
  dateLabel.for = "todo-date";
  dateLabel.innerHTML = "Due Date";
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.id = "todo-date";
  dateInput.name = "todo-date";

  dateRow.appendChild(dateLabel);
  dateRow.appendChild(dateInput);

  // Priority
  const priorityRow = document.createElement("div");
  priorityRow.classList.add("form-row");
  const priorityLabel = document.createElement("label");
  priorityLabel.for = "todo-priority";
  priorityLabel.innerHTML = "High Priority";
  const priorityInput = document.createElement("input");
  priorityInput.type = "checkbox";
  priorityInput.id = "todo-priority";
  priorityInput.name = "todo-priority";

  priorityRow.appendChild(priorityLabel);
  priorityRow.appendChild(priorityInput);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.onclick = addTodoItem;
  submitButton.innerHTML = "Submit";

  // Adding rows to form
  form.appendChild(titleRow);
  form.appendChild(descRow);
  form.appendChild(dateRow);
  form.appendChild(priorityRow);
  form.appendChild(submitButton);

  return form;
};

export default createTodoForm;
