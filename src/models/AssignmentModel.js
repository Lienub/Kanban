export default class AssignmentModel {
  constructor(name) {
    this.name = name;
  }
}
/**
 *  this function creates a new assignment
 *
 * @returns {AssignmentModel}
 */
export function createAssignment() {
  var newAssignmentInput = document.getElementById("task-assignment");
  var newAssignment = newAssignmentInput.value.trim();
  newAssignmentInput.value = "";
  return new AssignmentModel(newAssignment);
}
/**
 *  this function deletes an assignment
 *
 * @param {KeyboardEvent} event
 */
export function deleteAssignment(button) {
  var assignmentDiv = button.parentElement;
  assignmentDiv.remove();
}
