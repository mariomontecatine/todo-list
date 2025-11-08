import {
  projects,
  deleteToDoFromProject,
  addToDoToProject,
  createTodo,
} from "./todo";

const projectsContainer = document.getElementById("projectsContainer");
projectsContainer.classList.add("projectsContainer");
function displayProjects(project, index) {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("projectContainer");

  const projectTitle = document.createElement("button");
  projectTitle.classList.add("projectTitle");
  projectTitle.textContent = project.title;
  projectContainer.appendChild(projectTitle);

  const tasksContainer = document.createElement("div");
  tasksContainer.classList.add("tasksContainer");
  projectContainer.appendChild(tasksContainer);

  function renderTasks() {
    tasksContainer.innerHTML = "";

    project.toDos.forEach((toDo, index) => {
      const toDoContainer = document.createElement("div");
      toDoContainer.classList.add("toDoContainer");

      const toDoTitle = document.createElement("h2");
      toDoTitle.textContent = toDo.title;

      const projectDueDate = document.createElement("p");
      projectDueDate.textContent = toDo.dueDate;

      const deleteToDo = document.createElement("button");
      deleteToDo.textContent = "Delete";

      deleteToDo.addEventListener("click", () => {
        deleteToDoFromProject(project, index);
        renderTasks();
      });

      toDoContainer.appendChild(projectDueDate);
      toDoContainer.appendChild(toDoTitle);
      toDoContainer.appendChild(deleteToDo);

      tasksContainer.appendChild(toDoContainer);
    });

    // Formulario siempre
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

  // Llama siempre renderTasks, no solo index === 0
  renderTasks();
}

export { displayProjects };
