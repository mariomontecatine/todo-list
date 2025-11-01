import "./style.css";
import { projects } from "./todo";
import { displayProjects } from "./dom";

projects.forEach((project, index) => {
  displayProjects(project, index);
});
