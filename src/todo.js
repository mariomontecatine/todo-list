let projects = [];
const defaultProject = createProject(Tasks);
let todo1 = createTodo(todo1, defaultProject);

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

function deleteToDoFromProject(project, index) {
  project.toDos.splice(index, 1);
}

export { createTodo, deleteToDoFromProject, addToDoToProject, projects };
