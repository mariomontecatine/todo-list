let projects = [];

function createTodo(title, description, dueDate, priority) {
  return {
    title,
    description,
    dueDate,
    priority,
  };
}

function createProject(title) {
  let project = {
    title,
    toDos: [],
  };
  projects.push(project);
  return project;
}

function addToDoToProject(toDo, project) {
  project.toDos.push(toDo);
}

export { createTodo, projects };
