import { resetFormToCreateTask } from "../../utils/resetForm";
import LocalStorage from "../LocalStorage";

export function setDisplayForm() {
  const toggleFormCheckbox = document.getElementById("toggleForm");
  const createNewTaskForm = document.getElementById("create-new-task-form");
  const closeButton = document.getElementById("closeForm");
  const saveButton = document.getElementById("save-button");
  saveButton.addEventListener("click", () => {
    createNewTaskForm.classList.remove("show");
    resetFormToCreateTask();
  });

  toggleFormCheckbox.addEventListener("change", () => {
    if (toggleFormCheckbox.checked) {
      populateDependencyOptions();
      createNewTaskForm.classList.add("show");
      document.getElementById("task-code-color").value = "#feff9c";
      toggleFormCheckbox.checked = false;
    }
  });
  closeButton.addEventListener("change", () => {
    if (closeButton.checked) {
      createNewTaskForm.classList.remove("show");
      resetFormToCreateTask();
      closeButton.checked = false;
    }
  });
  resetFormToCreateTask();
}
/**
 * This method allows you to set all tasks in multiple selector to choose dependencies
 *
 * @param {number} taskId
 */
export function populateDependencyOptions(taskId = null) {
  const dependencySelect = document.getElementById("task-dependencies");
  const tasks = new LocalStorage().loadTasks();

  const currentTask = tasks.find((task) => task.id == taskId);
  var currentDependencies = [];
  if (currentTask) currentDependencies = currentTask.dependencies || [];
  dependencySelect.innerHTML = "";
  tasks.forEach((task) => {
    if (task.id != taskId) {
      const option = document.createElement("option");
      option.value = task.id;
      option.text = task.name;
      if (currentDependencies.includes(task.id.toString())) {
        option.selected = true;
      }

      dependencySelect.appendChild(option);
    }
  });
}
