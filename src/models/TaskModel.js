import { resetFormToCreateTask } from "../utils/resetForm";
import TaskView from "../views/components/TaskView";

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
  var newTaskModel = new TaskModel(
    taskName,
    taskDescription,
    taskStartDate,
    taskEndDate,
    assignmentsList,
    tagsList,
    taskCodeColor
  );

  TaskView.render(newTaskModel, todoColumn);
  resetFormToCreateTask();
}
