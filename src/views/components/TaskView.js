import { resetFormToCreateTask } from "../../utils/resetForm";
import { chooseTextColor } from "../../utils/colorConverter";
import assignmentIcon from "../../assets/images/assignment.svg";
import tagIcon from "../../assets/images/tag.svg";
import dateIcon from "../../assets/images/calendar.svg";
import pin from "../../assets/images/cute-cupcake.png";
let taskIdCounter = 1;

export default class TaskView {
  static render(taskModel) {
    const newTask = document.createElement("div");
    newTask.className = "task";
    newTask.id = `task-${taskIdCounter++}`;
    newTask.draggable = true;
    newTask.addEventListener("dragstart", dragTask);
    newTask.style = `         
      padding-top:5px;
      padding-bottom:16px;
      padding-left:8px;
      padding-right:8px;
      background-color: ${taskModel.codeColor};
      box-shadow: 0px 2px 2px 3px #dadada;
      -webkit-transform:rotate(-4deg);
      -o-transform:rotate(-4deg);
      -moz-transform:rotate(-4deg);
      width:240px;
      height:240px;
      color: ${chooseTextColor(taskModel.codeColor)};
    `

    let name = taskModel.name
    if (name.length > 20) {
      name = name.substring(0, 17) + "...";
    } else if (name.length === 0) {
      name = "Ma tâche"
    }

    let description = taskModel.description
    if (description.length > 100) {
      description = description.substring(0, 70) + "..."
    } else if (description.length === 0) {
      description = "Pas de description"
    }

    let date = ""
    if (taskModel.startDate === "" && taskModel.endDate === "") {
      date = "Pas de date"
    } else if (taskModel.startDate === "") {
      date = `Avant le ${taskModel.endDate}`
    } else if (taskModel.endDate === "") {
      date = `A partir du ${taskModel.startDate}`
    } else {
      date = `Du ${taskModel.startDate} au ${taskModel.endDate}`
    }

    let tagList = ""
    if (taskModel.tags.length === 0) {
      tagList = "Pas de tag"
    } else if (taskModel.tags.length === 1) {
      tagList = taskModel.tags[0].substring(0,10)
    } else {
      tagList = taskModel.tags[0].substring(0,10) + ", ..."
    }

    let assignmentList = ""
    if (taskModel.assignments.length === 0) {
      assignmentList = "Pas d'assignation"
    } else if (taskModel.assignments.length === 1) {
      assignmentList = taskModel.assignments[0].substring(0,10)
    } else {
      assignmentList = taskModel.assignments[0].substring(0,10) + ", ..."
    }

    let filter = "filter: invert(0);";
    if (chooseTextColor(taskModel.codeColor) === "white") {
      filter = "filter: invert(1);";
    }

    newTask.innerHTML = `
    <img src=${pin} alt="Pin" style="width:40px; height:40px; margin-top:8px; margin-right:8px; align-self:center;" draggable="false">
      <div>
        <h3>${name.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</h3>
        <p class="desc">${description.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
        <div class="itemList">
        <img src=${dateIcon} alt="Datz" style="${filter}" draggable="false">
        <p>${date}</p>
        </div>
        <div class="itemList">
        <img src=${assignmentIcon} alt="Assignation" style="${filter}" draggable="false">
        <p>${assignmentList.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
        </div>
        <div class="itemList">
        <img src=${tagIcon} alt="Tag" style="${filter}" draggable="false">
        <p>${tagList.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
        </div>
        </div>
      `;
    var todoColumn = document.getElementById("todo");
    todoColumn.appendChild(newTask);
    resetFormToCreateTask();
  }
}
export function dragTask(event) {
  event.dataTransfer.setData("id", event.target.id);
}
