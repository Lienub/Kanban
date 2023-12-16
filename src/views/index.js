import TaskController from "../controllers/TaskController.js";
import AssignmentController from "../controllers/AssignmentController.js";
import TagController from "../controllers/TagController.js";

import closeIcon from "../assets/images/close-icon.svg";
import submitIcon from "../assets/images/submit-icon.svg";
import cuteCupcake from "../assets/images/cute-cupcake.png";

document.querySelector("#app").innerHTML = `
<header>
  <h1>Kanban Oueb</h1>
</header>
<main>
    <div>
    <input type="checkbox" id="toggleForm">
    <label for="toggleForm" id="create-task-button">Créer une tâche</label>
    </div>
  <section id="todo">
    <h2>TODO</h2>
  </section>
  <section id="wip">
    <h2>WIP</h2>
  </section>
  <section id="done">
    <h2>DONE</h2>
  </section>
  <section>
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
          <input type="text" name="task-name" id="task-name" placeholder="Titre">
          <div id="task-form-color">
            <label for="task-name">Code couleur</label>
            <input type="color" name="task-code-color" id="task-code-color">
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
        <div>
      </div>
    </div>
  </section>
</main>
`;

new TaskController();
new AssignmentController();
new TagController();