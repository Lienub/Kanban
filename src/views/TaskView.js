import { resetFormToCreateTask } from "../utils/resetForm";
let taskIdCounter = 1;

export default class TaskView {
  static render(taskModel) {
    const newTask = document.createElement("div");
    newTask.className = "task";
    newTask.id = `task-${taskIdCounter++}`;
    newTask.draggable = true;
    newTask.addEventListener("dragstart", dragTask);

    newTask.innerHTML = `
        <h3>${taskModel.name}</h3>
        <p>${taskModel.description}</p>
        <p>Start Date: ${taskModel.startDate}</p>
        <p>End Date: ${taskModel.endDate}</p>
        <p>Assignment(s): ${taskModel.assignments.join(",")}</p>
        <p>Tag(s): ${taskModel.tags.join(",")}</p>
        <div style="background: ${
          taskModel.codeColor
        };width:20px; height:20px; border-radius: 100%"></div>
      `;
    var todo_column = document.getElementById("todo");
    todo_column.appendChild(newTask);
    resetFormToCreateTask();
  }
}
export function dragTask(event) {
  event.dataTransfer.setData("id", event.target.id);
}
