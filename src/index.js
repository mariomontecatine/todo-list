import "./style.css";
import { projects, createProject, saveProjects, loadProjects } from "./todo";
import { displayProjects } from "./dom";

const projectsContainer = document.getElementById("projectsContainer");

function renderAllProjects() {
  projectsContainer.innerHTML = "";
  projects.forEach((project, index) => {
    displayProjects(project, index);
  });
}

loadProjects();
renderAllProjects();

const newProjectForm = document.getElementById("newProjectForm");
const newProjectTitle = document.getElementById("newProjectTitle");

newProjectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = newProjectTitle.value.trim();
  if (!title) return;

  createProject(title);
  renderAllProjects();

  newProjectTitle.value = "";
});
