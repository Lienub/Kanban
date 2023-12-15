import { createTask } from "./tasks-creation.js";
import { setDisplayForm } from "./tasks-display.js";

export function displayFormToCreateTask(element) {
  if (element == null) return;

  element.addEventListener("click", () => setDisplayForm());
}

export function saveTask(element) {
  if (element == null) return;
  element.addEventListener("click", () =>  {
    createTask();
    setDisplayForm();
  });
}

export function closeFormToCreateTask(element) {
  if (element == null) return;

  element.addEventListener("click", () => setDisplayForm());
}

export function dropTask(element) {
    if (element == null) return;

    element.addEventListener("drop", (event) => {
        event.preventDefault();
        const id = event.dataTransfer.getData("id");
        const task = document.getElementById(id);
        event.target.appendChild(task);
    });
}

export function allowDropTask(element) {
    if (element == null) return;

    element.addEventListener("dragover", (event) => {
        event.preventDefault();
    });
}
