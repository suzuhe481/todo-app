// Creates empty project with given name.
const projectItem = (projectName) => {
  var project = {
    name: projectName,
    todoList: [],
  };

  return project;
};

export default projectItem;
