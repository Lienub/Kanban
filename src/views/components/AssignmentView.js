import { deleteAssignment } from "../../models/AssignmentModel.js";

export default class AssignmentView {
  static displayAssignment(assignmentModel) {

    var assignmentsBlock = document.getElementById("assignments-block");

    var assignmentDiv = document.createElement("div");
    assignmentDiv.innerHTML = `
            <p>${assignmentModel.name}</p>
            <button>X</button>
        `;

    assignmentsBlock.appendChild(assignmentDiv);
    assignmentDiv.querySelector("button").addEventListener("click", () => {
        deleteAssignment(assignmentDiv.querySelector("button"));
    });
  }
}