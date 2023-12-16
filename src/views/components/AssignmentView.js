import { deleteAssignment } from "../../models/AssignmentModel.js";

export default class AssignmentView {
  static render(assignmentModel) {

    var assignments_block = document.getElementById("assignments-block");

    var assignment_div = document.createElement("div");
    assignment_div.innerHTML = `
            <p>${assignmentModel.name}</p>
            <button>X</button>
        `;

    assignments_block.appendChild(assignment_div);
    assignment_div.querySelector("button").addEventListener("click", () => {
        deleteAssignment(assignment_div.querySelector("button"));
    });
  }
}