
import {
  eventDeteleAssignment,
} from "./assignments-event-handlers.js";

export function displayNewAssignment(new_assignment) {
  var assignments_block = document.getElementById("assignments-block");

  var assignment_div = document.createElement("div");
  assignment_div.innerHTML = `
          <p>${new_assignment}</p>
          <button>X</button>
      `;

  assignments_block.appendChild(assignment_div);
  eventDeteleAssignment(assignment_div.querySelector("button"));
}