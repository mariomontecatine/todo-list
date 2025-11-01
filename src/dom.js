import { projects } from "./todo";

const projectsContainer = document.getElementById("projectsContainer");
function displayProjects(project) {
  const projectContainer = document.createElement("div");
  const projectTitle = document.createElement("h2");
  projectTitle.textContent = project.title;
  projectContainer.appendChild(projectTitle);

  projectContainer.addEventListener("click", () => {
    project.toDos.forEach((toDo) => {
      const toDoTitle = document.createElement("h2");
      const projectDueDate = document.createElement("p");
      projectDueDate.textContent = toDo.dueDate;
      toDoTitle.textContent = toDo.title;

      projectContainer.appendChild(projectDueDate);
      projectContainer.appendChild(toDoTitle);
    });
  });
  projectsContainer.appendChild(projectContainer);
}
projects.forEach((project) => displayProjects(project));
