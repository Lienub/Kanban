import { resetFormToCreateTask } from "../../utils/resetForm";

export function setDisplayForm() {
  const toggleFormCheckbox = document.getElementById("toggleForm");
  const createNewTaskForm = document.getElementById("create-new-task-form");
  const closeButton = document.getElementById("closeForm");

  toggleFormCheckbox.addEventListener("change", () => {
    if (toggleFormCheckbox.checked) {
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
