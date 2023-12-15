export function createAssignment(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    var new_assignment_input = document.getElementById("task-assignment");
    var new_assignment = new_assignment_input.value.trim();
    new_assignment_input.value = "";
    return new_assignment;
  }
  return null;
}
