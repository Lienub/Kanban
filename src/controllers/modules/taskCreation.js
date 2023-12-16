import { resetFormToCreateTask } from "../../utils/resetForm";

let taskIdCounter = 1;

export function createTask() {
  var todoColumn = document.getElementById("todo");
  var taskName = document.getElementById("task-name").value;
  var taskDescription = document.getElementById("task-description").value;
  var taskStartDate = document.getElementById("task-start-date").value;
  var taskEndDate = document.getElementById("task-end-date").value;
  // Get all assignments
  var assignmentsBlock = document.getElementById("assignments-block");
  var assignmentElement = assignmentsBlock.querySelectorAll("p");
  var assignmentsList = Array.from(assignmentElement).map(
    (assignmentElement) => assignmentElement.textContent.trim()
  );
  var taskCodeColor = document.getElementById("task-code-color").value;
  // Get all tags
  var tagsBlock = document.getElementById("tags-block");
  var tagElement = tagsBlock.querySelectorAll("p");
  var tagsList = Array.from(tagElement).map((tagElement) =>
    tagElement.textContent.trim()
  );
  // Create the task form
  var newTask = document.createElement("div");
  newTask.className = "task";
  newTask.id = "task-" + taskIdCounter++;

  newTask.innerHTML += `
            <h3>${taskName}</h3>
            <p>${taskDescription}</p>
            <p>Start Date: ${taskStartDate}</p>
            <p>End Date: ${taskEndDate}</p>
            <p>Assignment(s): ${assignmentsList.join(",")}</p>
            <p>Tag(s): ${tagsList.join(",")}</p>
            <div style="background: ${taskCodeColor};width:20px; height:20px; border-radius: 100%"></div>
        `;

  todoColumn.appendChild(newTask);
  resetFormToCreateTask();
}
