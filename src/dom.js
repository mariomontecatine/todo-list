import { projects } from "./todo";

const projectsContainer = document.getElementById("projectsContainer");
function displayProjects(project) {
  const project = document.createElement("div");
  projectsContainer.appendChild(project);
}
projects.forEach((project) => displayProjects(project));
