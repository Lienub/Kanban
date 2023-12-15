import { resetFormToCreateTask } from "./utils/reset-form.js";

export function setDisplayForm() {
  var create_new_task_form = document.getElementById("create-new-task-form");
  if (create_new_task_form.style.display === "none") {
    create_new_task_form.style.display = "flex";
  } else {
    create_new_task_form.style.display = "none";
  }
  resetFormToCreateTask();
}
