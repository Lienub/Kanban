let taskIdCounter = 1;

function displayFormToCreateTask() {
  var create_new_task_form = document.getElementById("create-new-task-form");

  if (create_new_task_form.style.display === "none") {
    create_new_task_form.style.display = "flex";
  } else {
    create_new_task_form.style.display = "none";
  }
}

function saveTask() {
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
        <p>Assignment(s): ${assignments_list.join(',')}</p>
        <p>Tag(s): ${tags_list.join(",")}</p>
        <div style="background: ${task_code_color};width:20px; height:20px; border-radius: 100%"></div>
    `;

  todo_column.appendChild(newTask);

  resetFormToCreateTask();

  // Close form
  displayFormToCreateTask();
}

function resetFormToCreateTask() {
  var container_form = document.getElementById("create-new-task-form");
  var inputs = container_form.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
  container_form.querySelector("textarea").value = "";
  var assignments_block = document.getElementById("assignments-block");
  assignments_block.innerHTML = "";
  var tags_block = document.getElementById("tags-block");
  tags_block.innerHTML = "";
}

function closeFormToCreateTask() {
  resetFormToCreateTask();
  displayFormToCreateTask();
}