import { resetFormToCreateTask } from "../../utils/resetForm";
import StatusEnum from "../../models/StatusEnum";

export default class TaskView {
  static render(taskModel) {
    const newTask = document.createElement("div");
    newTask.className = "task";
    newTask.id = `task-${taskModel.id}`;
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
    if(taskModel.status == StatusEnum.TODO) {
      const todoRow = document.getElementById("todo");
      todoRow.appendChild(newTask);
    } else if(taskModel.status == StatusEnum.WIP) {
      const wipRow = document.getElementById("wip");
      wipRow.appendChild(newTask);
    } else if(taskModel.status === StatusEnum.DONE) {
      const doneRow = document.getElementById("done");
      doneRow.appendChild(newTask);
    } 
    resetFormToCreateTask();
  }
}
export function dragTask(event) {
  event.dataTransfer.setData("id", event.target.id);
}
