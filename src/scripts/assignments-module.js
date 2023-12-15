function createNewAssignment(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    var new_assignment_input = document.getElementById("task-assignment");
    var new_assignment = new_assignment_input.value.trim();
    displayAssignment(new_assignment);
    new_assignment_input.value = "";
  }
}

function displayAssignment(new_assignment) {
  var assignments_block = document.getElementById("assignments-block");
  var assignment_div = document.createElement("div");

  assignment_div.innerHTML = `
          <p>${new_assignment}</p>
          <button onclick="deleteAssignment(this)">X</button>
      `;

  assignments_block.appendChild(assignment_div);
}

function deleteAssignment(button) {
  var assignment_div = button.parentElement;
  assignment_div.remove();
}
