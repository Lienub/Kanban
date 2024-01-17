import { resetFormToCreateTask } from "../../utils/resetForm";
import { chooseTextColor } from "../../utils/colorConverter";
import assignmentIcon from "../../assets/images/assignment.svg";
import tagIcon from "../../assets/images/tag.svg";
import dateIcon from "../../assets/images/calendar.svg";
import pin from "../../assets/images/cute-cupcake.png";
import pinEat from "../../assets/images/cute-cupcake-sad.png";
import StatusEnum from "../../models/StatusEnum";
import { deleteTag } from "../../models/TagModel.js";
import { deleteAssignment } from "../../models/AssignmentModel.js";
import { populateDependencyOptions } from "../../controllers/modules/taskDisplay";
import { refreshAllDependencies } from "../../utils/dependencyUtils.js";

export default class TaskView {
  static render(taskModel, localStorage) {
    const newTask = document.createElement("div");
    newTask.className = "task";
    newTask.id = `task-${taskModel.id}`;
    newTask.draggable = true;
    newTask.addEventListener("dragstart", dragTask);
    newTask.style = `         
      padding-top:5px;
      padding-bottom:16px;
      padding-left:8px;
      padding-right:8px;
      background-color: ${taskModel.codeColor};
      box-shadow: 0px 2px 2px 3px #dadada;
      width:230px;
      height:255px;
      color: ${chooseTextColor(taskModel.codeColor)};
    `;

    let name = taskModel.name;
    if (name.length > 20) {
      name = name.substring(0, 17) + "...";
    } else if (name.length === 0) {
      name = "Ma tâche";
    }

    let description = taskModel.description;
    if (description.length > 100) {
      description = description.substring(0, 50) + "...";
    } else if (description.length === 0) {
      description = "Pas de description";
    }

    let date = "";
    if (taskModel.startDate === "" && taskModel.endDate === "") {
      date = "Pas de date";
    } else if (taskModel.startDate === "") {
      date = `Avant le ${taskModel.endDate}`;
    } else if (taskModel.endDate === "") {
      date = `A partir du ${taskModel.startDate}`;
    } else {
      date = `Du ${taskModel.startDate} au ${taskModel.endDate}`;
    }

    let tagList = "";
    if (taskModel.tags.length === 0) {
      tagList = "Pas de tag";
    } else if (taskModel.tags.length === 1) {
      tagList = taskModel.tags[0].substring(0, 10);
    } else {
      tagList = taskModel.tags[0].substring(0, 10) + ", ...";
    }

    let assignmentList = "";
    if (taskModel.assignments.length === 0) {
      assignmentList = "Pas d'assignation";
    } else if (taskModel.assignments.length === 1) {
      assignmentList = taskModel.assignments[0].substring(0, 10);
    } else {
      assignmentList = taskModel.assignments[0].substring(0, 10) + ", ...";
    }

    let filter = "filter: invert(0);";
    if (chooseTextColor(taskModel.codeColor) === "white") {
      filter = "filter: invert(1);";
    }
    const endDatePassed = new Date(taskModel.endDate) < new Date();
    const pinImage = endDatePassed ? pinEat : pin;

    newTask.innerHTML = `
    <div class="header">
    <img src=${pinImage} alt="Pin" style="width:40px; height:40px; margin:auto; align-self:center;" draggable="false">
    <h3>${name.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</h3>
    <button>X</button>  
    </div>
    <div>
        <p class="desc">${description
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")}</p>
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
      <div class="footer">
      <button class="modify" style="color: ${chooseTextColor(
        taskModel.codeColor
      )}">Modifier</button>
      <button class="detail" style="color: ${chooseTextColor(
        taskModel.codeColor
      )}">Détails</button>
      </div>
      `;
    if (taskModel.status == StatusEnum.TODO) {
      const todoRow = document.getElementById("todo");
      todoRow.appendChild(newTask);
    } else if (taskModel.status == StatusEnum.WIP) {
      const wipRow = document.getElementById("wip");
      wipRow.appendChild(newTask);
    } else if (taskModel.status === StatusEnum.DONE) {
      const doneRow = document.getElementById("done");
      doneRow.appendChild(newTask);
    }

    newTask.querySelector("div.header button").addEventListener("click", () => {
      let id = newTask.id.split("-")[1];
      localStorage.updateDependencies(id);
      localStorage.deleteTask(id);
      var taskDiv = newTask.querySelector("button").parentElement.parentElement;
      taskDiv.remove();
      refreshAllDependencies();
    });

    newTask
      .querySelector("div.footer button.modify")
      .addEventListener("click", () => {
        let id = newTask.id.split("-")[1];
        let task = localStorage.getTaskById(id);
        document.getElementById("create-new-task-form").classList.add("show");
        document.getElementById("task-name").value = task.name;
        document.getElementById("task-description").value = task.description;
        document.getElementById("task-start-date").value = task.startDate;
        document.getElementById("task-end-date").value = task.endDate;
        document.getElementById("task-code-color").value = task.codeColor;
        document.getElementById("task-id").value = task.id;
        populateDependencyOptions(id);
        // Init tags
        var tagsBlock = document.getElementById("tags-block");
        var tagsList = task.tags;
        tagsBlock.innerHTML = "";

        tagsList.forEach((tagName) => {
          var tagDiv = document.createElement("div");
          tagDiv.innerHTML = `
                <p>${tagName}</p>
                <button>X</button>
            `;
          tagsBlock.appendChild(tagDiv);
          tagDiv.querySelector("button").addEventListener("click", () => {
            deleteTag(tagDiv.querySelector("button"));
          });
        });

        // Init assignments
        var assignmentList = task.assignments;
        var assignmentsBlock = document.getElementById("assignments-block");
        assignmentsBlock.innerHTML = "";

        assignmentList.forEach((assignmentName) => {
          var assignmentsDiv = document.createElement("div");
          assignmentsDiv.innerHTML = `
                <p>${assignmentName}</p>
                <button>X</button>
            `;
          assignmentsBlock.appendChild(assignmentsDiv);
          assignmentsDiv
            .querySelector("button")
            .addEventListener("click", () => {
              deleteAssignment(assignmentsDiv.querySelector("button"));
            });
        });
      });

    newTask
      .querySelector("div.footer button.detail")
      .addEventListener("click", () => {
        let id = newTask.id.split("-")[1];
        let task = localStorage.getTaskById(id);
        let taskDetails = document.getElementById("task-details");
        document.getElementById("task-id").value = task.id;
        document.getElementById("task-details-note").value = task.note;

        document.getElementById("task-details-name").innerText =
          task.name.length > 0 ? "Nom : " + task.name : "Pas de nom";
        document.getElementById("task-details-description").innerText =
          task.description.length > 0
            ? "Description : " + task.description
            : "Pas de description";
        document.getElementById("task-details-start-date").innerText =
          task.startDate.length > 0
            ? "Date de début : " + task.startDate
            : "Pas de date de début";
        document.getElementById("task-details-end-date").innerText =
          task.endDate.length > 0
            ? "Date de fin : " + task.endDate
            : "Pas de date de fin";
        document.getElementById("task-details-complete-date").innerText =
          task.completeDate.length > 0
            ? " Date de fin effective : " + task.completeDate
            : "";
        document.getElementById("task-details-tags").innerText =
          task.tags.length > 0 ? "Tags : " + task.tags : "Pas de tag";
        document.getElementById("task-details-assignments").innerText =
          task.assignments.length > 0
            ? "Affectations : " + task.assignments
            : "Pas d'affectation";
        document.getElementById("task-details").className = "task-details show";
        // task details dependencies
        var dependenciesList = task.dependencies;
        var dependenciesBlock = document.getElementById(
          "task-details-dependencies"
        );
        dependenciesBlock.innerHTML = "";
        var title = document.createElement("h4");
        title.innerHTML = "Dépend de :";
        if (dependenciesList.length > 0) {
          dependenciesBlock.appendChild(title);
          dependenciesList.forEach((dependecyId) => {
            var dependencyDiv = document.createElement("div");
            var dependencyTask = localStorage.getTaskById(dependecyId);
            dependencyDiv.innerHTML = `
                <p>-> ${dependencyTask.name}</p>
            `;
            dependenciesBlock.appendChild(dependencyDiv);
          });
        }

        taskDetails.querySelector("button").addEventListener("click", () => {
          document.getElementById("task-details").className = "task-details";
        });
      });
    resetFormToCreateTask();
  }
}
export function dragTask(event) {
  event.dataTransfer.setData("id", event.target.id);
}
