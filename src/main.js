import TaskController from "./controllers/TaskController.js";
import AssignmentController from "./controllers/AssignmentController.js";
import TagController from "./controllers/TagController.js";


document.querySelector("#app").innerHTML = `
<header>
<h1>Kanban Oueb</h1>
</header>
<main>
<div>
    <button id="create-task-button">Créer une tâche</button>
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
        <button id="close-button">X</button>
        <h2>Nouvelle tache</h2>
        <div>
            <label for="task-name">Titre</label>
            <input type="text" name="task-name" id="task-name">
        </div>
        <div>
            <label for="task-description">Description</label>
            <textarea name="task-description" id="task-description" cols="70" rows="10"></textarea>
        </div>
        <div>
            <label for="task-start-date">Date de début</label>
            <input type="date" name="task-start-date" id="task-start-date">
        </div>
        <div>
            <label for="task-end-date">Date de fin</label>
            <input type="date" name="task-end-date" id="task-end-date">
        </div>
        <div>
            <label for="task-assignment">Affectation(s)</label>
            <input type="text" name="task-assignment" id="task-assignment">
            <div id="assignments-block"></div>
        </div>
        <div>
            <label for="task-tag">Tag</label>
            <input type="text" name="task-tag" id="task-tag">
            <div id="tags-block"></div>
        </div>
        <div>
            <label for="task-name">Code couleur</label>
            <input type="color" name="task-code-color" id="task-code-color">
        </div>
        <div>
            <button id="save-button">Save</button>
        </div>
    </div>
</section>
</main>
`;

new TaskController();
new AssignmentController();
new TagController();