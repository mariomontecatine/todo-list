import { projects, deleteToDoFromProject } from "./todo";

const projectsContainer = document.getElementById("projectsContainer");
function displayProjects(project) {
  const projectContainer = document.createElement("div");
  const projectTitle = document.createElement("h2");
  projectTitle.textContent = project.title;
  projectContainer.appendChild(projectTitle);
  const tasksContainer = document.createElement("div");

  projectContainer.appendChild(tasksContainer);

  function renderTasks() {
    tasksContainer.innerHTML = "";
    project.toDos.forEach((toDo, index) => {
      const toDoContainer = document.createElement("div");
      const toDoTitle = document.createElement("h2");
      const projectDueDate = document.createElement("p");
      const deleteToDo = document.createElement("button");

      projectDueDate.textContent = toDo.dueDate;
      toDoTitle.textContent = toDo.title;
      deleteToDo.textContent = "Delete";

      toDoContainer.appendChild(projectDueDate);
      toDoContainer.appendChild(toDoTitle);
      toDoContainer.appendChild(deleteToDo);
      tasksContainer.appendChild(toDoContainer);

      deleteToDo.addEventListener("click", () => {
        deleteToDoFromProject(project, index);
        renderTasks();
      });
    });
  }

  projectContainer.addEventListener("click", () => {
    if (tasksContainer.innerHTML === "") {
      renderTasks();
    } else {
      tasksContainer.innerHTML = "";
    }
  });
  projectsContainer.appendChild(projectContainer);
}
projects.forEach((project) => displayProjects(project));
