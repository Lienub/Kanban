import AssignmentView from "../views/AssignmentView";

export default class AssignmentModel {
  constructor(name) {
    this.name = name;
  }
}
export function createAssignment(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    var new_assignment_input = document.getElementById("task-assignment");
    var new_assignment = new_assignment_input.value.trim();
    new_assignment_input.value = "";

    var newAssignmentModel = new AssignmentModel(new_assignment);

    AssignmentView.render(newAssignmentModel);
  }
}

export function deleteAssignment(button) {
  var assignment_div = button.parentElement;
  assignment_div.remove();
}
