import { resetFormToCreateTask } from "../../utils/resetForm";

let taskIdCounter = 1;

export function createTask() {
  var todo_column = document.getElementById("todo");
  var task_name = document.getElementById("task-name").value;
  var task_description = document.getElementById("task-description").value;
  var task_start_date = document.getElementById("task-start-date").value;
  var task_end_date = document.getElementById("task-end-date").value;
  // Get all assignments
  var assignments_block = document.getElementById("assignments-block");
  var assignment_element = assignments_block.querySelectorAll("p");
  var assignments_list = Array.from(assignment_element).map(
    (assignment_element) => assignment_element.textContent.trim()
  );
  var task_code_color = document.getElementById("task-code-color").value;
  // Get all tags
  var tags_block = document.getElementById("tags-block");
  var tag_element = tags_block.querySelectorAll("p");
  var tags_list = Array.from(tag_element).map((tag_element) =>
    tag_element.textContent.trim()
  );
  // Create the task form
  var newTask = document.createElement("div");
  newTask.className = "task";
  newTask.id = "task-" + taskIdCounter++;

  newTask.innerHTML += `
            <h3>${task_name}</h3>
            <p>${task_description}</p>
            <p>Start Date: ${task_start_date}</p>
            <p>End Date: ${task_end_date}</p>
            <p>Assignment(s): ${assignments_list.join(",")}</p>
            <p>Tag(s): ${tags_list.join(",")}</p>
            <div style="background: ${task_code_color};width:20px; height:20px; border-radius: 100%"></div>
        `;

  todo_column.appendChild(newTask);
  resetFormToCreateTask();
}
