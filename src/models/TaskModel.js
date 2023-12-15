import { resetFormToCreateTask } from "../utils/resetForm";
import TaskView from "../views/TaskView";

export default class TaskModel {
  constructor(
    name,
    description,
    startDate,
    endDate,
    assignments,
    tags,
    codeColor
  ) {
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.assignments = assignments;
    this.tags = tags;
    this.codeColor = codeColor;
  }
}

export function createTask() {
  var todoColumn = document.getElementById("todo");
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
  var newTaskModel = new TaskModel(
    task_name,
    task_description,
    task_start_date,
    task_end_date,
    assignments_list,
    tags_list,
    task_code_color
  );

  TaskView.render(newTaskModel, todoColumn);
  resetFormToCreateTask();
}
