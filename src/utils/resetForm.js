/** 
 * Reset the form to create a new task
*/
export function resetFormToCreateTask() {
  var containerForm = document.getElementById("create-new-task-form");
  var inputs = containerForm.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
  containerForm.querySelector("textarea").value = "";
  document.getElementById("task-code-color").value = "#feff9c";
  var assignmentsBlock = document.getElementById("assignments-block");
  assignmentsBlock.innerHTML = "";
  var tagsBlock = document.getElementById("tags-block");
  tagsBlock.innerHTML = "";
}
