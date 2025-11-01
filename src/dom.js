import { projects, deleteToDoFromProject } from "./todo";

const projectsContainer = document.getElementById("projectsContainer");
function displayProjects(project) {
  const projectContainer = document.createElement("div");
  const projectTitle = document.createElement("h2");
  projectTitle.textContent = project.title;
  projectContainer.appendChild(projectTitle);
  const tasksContainer = document.createElement("div");

  projectContainer.appendChild(tasksContainer);

  projectContainer.addEventListener("click", () => {
    if (tasksContainer.innerHTML === "") {
      project.toDos.forEach((toDo) => {
        const toDoTitle = document.createElement("h2");
        const projectDueDate = document.createElement("p");
        projectDueDate.textContent = toDo.dueDate;
        toDoTitle.textContent = toDo.title;

        tasksContainer.appendChild(projectDueDate);
        tasksContainer.appendChild(toDoTitle);
      });
    } else {
      tasksContainer.innerHTML = "";
    }
  });

  projectsContainer.appendChild(projectContainer);
}
projects.forEach((project) => displayProjects(project));
