import TaskController from "../controllers/TaskController.js";
import AssignmentController from "../controllers/AssignmentController.js";
import TagController from "../controllers/TagController.js";
import ExportImportController from "../controllers/ExportImportController.js";

import closeIcon from "../assets/images/close-icon.svg";
import submitIcon from "../assets/images/submit-icon.svg";
import cuteCupcake from "../assets/images/cute-cupcake.png";
import corkTexture from "../assets/images/cork.png";

import "./muffin-font.css";

document.querySelector("#app").innerHTML = `
<header>
  <h1>Kanban Oueb</h1>
</header>
<main class="container">
    <div>
        <input type="checkbox" id="toggleForm">
        <label for="toggleForm" id="create-task-button">Créer une tâche</label>
    </div>
    <div id="import-export-container">
        <form id="uploadForm">
            <h4>Importer les données (JSON)</h4>
            <input type="file" id="fileInput" name="fileInput" accept=".json">
            <button type="button" id="import-btn">Upload</button>
        </form>
        <hr/>
        <form id="downloadForm">
            <h4>Exporter les données (JSON)</h4>
            <button type="button" id="export-btn">Exporter</button>
        </form>
    </div>
    <section id="backlog" class="kanban-container" style="background-image: url(${corkTexture})">
    <div class="row-kanban-block">
        <h2>TODO</h2>
        <div id="todo" class="row-kanban">
        </div>
    </div>
    <div class="row-kanban-block">
        <h2>WIP</h2>
        <div id="wip" class="row-kanban">
        </div>
    </div>
    <div class="row-kanban-block">
        <h2>DONE</h2>
        <div id="done" class="row-kanban">
        </div>
    </div>
    <div id="create-new-task-form">
      <div>
        <div id="task-form-header">
          <input type="checkbox" id="closeForm">
          <label for="closeForm" id="close-button">
            <img src=${closeIcon} alt="X">
          </label>
          <h2>Nouvelle tache</h2>
          <img src=${cuteCupcake} alt="Cupcake">
        </div>
        <div>
          <input type="hidden" name="task-id" id="task-id">
          <input type="text" name="task-name" id="task-name" placeholder="Titre">
          <div id="task-form-color">
            <label for="task-name">Code couleur</label>
            <input type="color" value="#feff9c" name="task-code-color" id="task-code-color"/>
          </div>
        </div>
        <div>
          <textarea name="task-description" id="task-description" resize="none" cols="50" rows="10"
            placeholder="Description"></textarea>
        </div>
        <div id="task-form-dates">
          <div>
            <label for="task-start-date">Date de début</label>
            <input type="date" name="task-start-date" id="task-start-date">
          </div>
          <div>
            <label for="task-end-date">Date de fin</label>
            <input type="date" name="task-end-date" id="task-end-date">
          </div>
        </div>
        <div>
          <div>
            <input type="text" name="task-assignment" id="task-assignment" placeholder="Affectation(s)">
            <div id="assignments-block"></div>
          </div>
          <div>
            <input type="text" name="task-tag" id="task-tag" placeholder="Tag">
            <div id="tags-block"></div>
          </div>
        </div>
        <button id="save-button">
          <img src=${submitIcon} alt="Submit">
        </button>
      </div>
    </div>
    <div id="task-details">
        <div>
            <div id="task-details-header">
                <button><img src=${closeIcon} alt="X"></button>
                <h2>Détails de la tâche</h2>
            </div>
            <div id="task-details-body">
                <p id="task-details-name"></p>
                <p id="task-details-color"></p>
                <p id="task-details-description"></p>
                <p id="task-details-start-date"></p>
                <p id="task-details-end-date"></p>
                <p id="task-details-assignments"></p>
                <p id="task-details-tags"></p>
            </div>
        </div>
    </div>  
  </section>
</main>
`;

new TaskController();
new AssignmentController();
new TagController();
new ExportImportController();