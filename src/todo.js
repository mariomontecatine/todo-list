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
  saveProjects();
  return project;
}

function addToDoToProject(toDo, project) {
  project.toDos.push(toDo);
  saveProjects();
}

function deleteToDoFromProject(project, index) {
  project.toDos.splice(index, 1);
  saveProjects();
}

const defaultProject = createProject("Tasks");

let todo1 = createTodo(
  "First Task",
  "Just my firs task, nothing important",
  "2025-11-01",
  "Important"
);
addToDoToProject(todo1, defaultProject);

function saveProjects() {
  localStorage.setItem("projects", JSON.stringify(projects));
}

function loadProjects() {
  const saved = localStorage.getItem("projects");
  if (!saved) return;

  const parsed = JSON.parse(saved);

  projects.length = 0;

  parsed.forEach((projData) => {
    const project = createProject(projData.title);
    projData.toDos.forEach((todoData) => {
      const todo = createTodo(
        todoData.title,
        todoData.description,
        todoData.dueDate,
        todoData.priority
      );
      addToDoToProject(todo, project);
    });
  });
}

export {
  createTodo,
  createProject,
  deleteToDoFromProject,
  addToDoToProject,
  loadProjects,
  saveProjects,
  projects,
};
