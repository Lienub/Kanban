export function resetFormToCreateTask() {
  var container_form = document.getElementById("create-new-task-form");
  var inputs = container_form.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
  container_form.querySelector("textarea").value = "";
  var assignments_block = document.getElementById("assignments-block");
  assignments_block.innerHTML = "";
  var tags_block = document.getElementById("tags-block");
  tags_block.innerHTML = "";
}
