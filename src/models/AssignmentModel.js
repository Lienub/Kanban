import AssignmentView from "../views/components/AssignmentView";

export default class AssignmentModel {
  constructor(name) {
    this.name = name;
  }
}
export function createAssignment(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    var newAssignmentInput = document.getElementById("task-assignment");
    var newAssignment = newAssignmentInput.value.trim();
    newAssignmentInput.value = "";

    var newAssignmentModel = new AssignmentModel(newAssignment);

    AssignmentView.render(newAssignmentModel);
  }
}

export function deleteAssignment(button) {
  var assignmentDiv = button.parentElement;
  assignmentDiv.remove();
}
