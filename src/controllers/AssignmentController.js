import { createAssignment } from "../models/AssignmentModel.js";
import AssignmentModel from "../models/AssignmentModel";
import AssignmentView from "../views/components/AssignmentView.js";

export default class AssignmentController {
  constructor() {
    this.init();
  }

  init() {
    const createAssignmentButton = document.getElementById("task-assignment");
    createAssignmentButton.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        let assignment = createAssignment();
        AssignmentView.displayAssignment(assignment);
      }
    });
  }
  renderAssignment(assignmentData) {
    const assignmentModel = new AssignmentModel(assignmentData.name);

    AssignmentView.render(assignmentModel);
  }
}
