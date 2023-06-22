// Creates the form element for todos.
const createTodoForm = () => {
  const form = document.createElement("form");

  // Title
  const titleRow = document.createElement("div");
  titleRow.classList.add("form-row");
  const titleLabel = document.createElement("label");
  titleLabel.innerHTML = "Title";
  const titleInput = document.createElement("input");

  titleRow.appendChild(titleLabel);
  titleRow.appendChild(titleInput);

  // Description
  const descRow = document.createElement("div");
  descRow.classList.add("form-row");
  const descLabel = document.createElement("label");
  descLabel.innerHTML = "Description";
  const descInput = document.createElement("input");

  descRow.appendChild(descLabel);
  descRow.appendChild(descInput);

  // Due date
  const dateRow = document.createElement("div");
  dateRow.classList.add("form-row");
  const dateLabel = document.createElement("label");
  dateLabel.innerHTML = "Due Date";
  const dateInput = document.createElement("input");
  dateInput.type = "date";

  dateRow.appendChild(dateLabel);
  dateRow.appendChild(dateInput);

  // Priority
  const priorityRow = document.createElement("div");
  priorityRow.classList.add("form-row");
  const priorityLabel = document.createElement("label");
  priorityLabel.innerHTML = "High Priority";
  const priorityInput = document.createElement("input");
  priorityInput.type = "checkbox";

  priorityRow.appendChild(priorityLabel);
  priorityRow.appendChild(priorityInput);

  const submitButton = document.createElement("button");
  submitButton.type = "button";
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
