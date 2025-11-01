import {
  projects,
  deleteToDoFromProject,
  addToDoToProject,
  createTodo,
} from "./todo";

const projectsContainer = document.getElementById("projectsContainer");
function displayProjects(project, index) {
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
    const form = document.createElement("form");
    const inputTitle = document.createElement("input");
    inputTitle.type = "text";
    inputTitle.placeholder = "New task...";

    const inputDate = document.createElement("input");
    inputDate.type = "date";
    inputDate.placeholder = "Deadline day";

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Add";

    form.appendChild(inputTitle);
    form.appendChild(inputDate);
    form.appendChild(submitButton);
    tasksContainer.appendChild(form);

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const newTitle = inputTitle.value;
      const newDate = inputDate.value;

      let todo = createTodo(newTitle, "Sin descripción", newDate, "Normal");

      addToDoToProject(todo, project);

      renderTasks();
    });
  }

  projectTitle.addEventListener("click", () => {
    if (tasksContainer.innerHTML === "") {
      renderTasks();
    } else {
      tasksContainer.innerHTML = "";
    }
  });
  projectsContainer.appendChild(projectContainer);
  if (index === 0) {
    renderTasks();
  }
}
export { displayProjects };
