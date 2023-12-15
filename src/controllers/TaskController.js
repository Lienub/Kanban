import { createTask } from "../models/TaskModel.js";
import TaskModel from "../models/TaskModel";
import TaskView from "../views/TaskView";
import { setDisplayForm } from "./modules/taskDisplay.js";

export default class TaskController {
  constructor() {
    this.init();
  }

  init() {
    const createTaskButton = document.getElementById("create-task-button");
    const closeButton = document.getElementById("close-button");
    const saveButton = document.getElementById("save-button");
    const rows = [document.getElementById("todo"), document.getElementById("wip"), document.getElementById("done")];

    // Add event listeners for tasks buttons
    createTaskButton.addEventListener("click", () => setDisplayForm());
    closeButton.addEventListener("click", () => setDisplayForm());
    saveButton.addEventListener("click", () => {
      createTask();
      setDisplayForm();
    });

    // Add event listeners for task drag-and-drop
    rows.forEach((row) => addEventListenersForTaskDragAndDrop(row));
  }

  renderTask(taskData) {
    const taskModel = new TaskModel(
      taskData.name,
      taskData.description,
      taskData.startDate,
      taskData.endDate,
      taskData.assignments,
      taskData.tags,
      taskData.codeColor
    );

    TaskView.render(taskModel);
  }
}

function addEventListenersForTaskDragAndDrop(element) {
    if (element == null) return;

    element.addEventListener("drop", (event) => {
        event.preventDefault();
        const id = event.dataTransfer.getData("id");
        const task = document.getElementById(id);
        event.target.appendChild(task);
    });

    element.addEventListener("dragover", (event) => {
        event.preventDefault();
    });
}

