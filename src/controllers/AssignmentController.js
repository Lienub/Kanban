import { createAssignment } from "../models/AssignmentModel.js";
import AssignmentModel from "../models/AssignmentModel";
import AssignmentView from "../views/components/AssignmentView.js";

export default class AssignmentController {
  constructor() {
    this.init();
  }

  init() {
    const createAssignmentButton = document.getElementById("task-assignment");
    createAssignmentButton.addEventListener("keypress", createAssignment);
  }
  renderAssignment(assignmentData) {
    const assignmentModel = new AssignmentModel(assignmentData.name);

    AssignmentView.render(assignmentModel);
  }
}
