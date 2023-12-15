import { createAssignment } from "./assignment-creation.js";
import { deleteAssignment } from "./assignment-deletion.js";
import { displayNewAssignment } from "./assignment-display.js";

export function eventSaveAssignment(element) {
  if (element == null) return;

  element.addEventListener("keypress", (event) => {
    var new_assignment = createAssignment(event);
    if (new_assignment != null) {
      displayNewAssignment(new_assignment);
    }
  });
}

export function eventDeteleAssignment(element) {
  if (element == null) return;

  element.addEventListener("click", () => {
    deleteAssignment(element);
  });
}
