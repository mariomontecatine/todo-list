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

function deleteToDoFromProject(project, index) {
  project.toDos.splice(index, 1);
}

const defaultProject = createProject("Tasks");

let todo1 = createTodo(
  "Mi primera tarea",
  "Descripción de la tarea",
  "2025-11-01",
  "Alta"
);
addToDoToProject(todo1, defaultProject);

export {
  createTodo,
  createProject,
  deleteToDoFromProject,
  addToDoToProject,
  projects,
};
