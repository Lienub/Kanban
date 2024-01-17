import LocalStorage from "../controllers/LocalStorage";
import cupcakeImg from "../assets/images/cute-cupcake.png";
/**
 * This method allows you to update all dependencies based on the provided tasks
 *
 * @param {TaskModel[]} tasks - The list of all tasks
 * @param {number} thickness
 */
export function refreshAllDependencies(thickness = 4) {
  // Remove existing dependencies
  removeAllDependencies();
  let tasks = new LocalStorage().loadTasks();
  // Add new dependencies
  tasks.forEach((task) => {
    task.dependencies.forEach((dependencyTaskId) => {
      const sourceElement = document.getElementById(`task-${task.id}`);
      const targetElement = document.getElementById(`task-${dependencyTaskId}`);
      if (sourceElement && targetElement) {
        connect(sourceElement, targetElement, thickness);
      }
    });
  });
}

/**
 * This method allows you to remove all dependencies from the container
 */
function removeAllDependencies() {
  const container = document.getElementById("dependency-container");
  container.innerHTML = "";
}

export function getDependencyId(sourceElement, targetElement) {
  return `dependency-${sourceElement.id}-${targetElement.id}`;
}
/**
 * This method allows you to connect 2 html elements to create arrows
 *
 * @param {HTMLElement} div1
 * @param {HTMLElement} div2
 * @param {number} thickness
 */
function connect(div1, div2, thickness) {
  var off1 = getOffset(div1);
  var off2 = getOffset(div2);

  // Calculate the x-coordinate of the center of the first element
  var x1 = off1.left + off1.width / 2;
  // Calculate the y-coordinate just below the bottom of the first element
  var y1 = off1.top + off1.height + 2;
  // Calculate the x-coordinate of the center of the second element
  var x2 = off2.left + off2.width / 2;
  // Calculate the y-coordinate just above the top of the second element
  var y2 = off2.top + 2;
  // Calculate the length (distance) between the centers of the two elements
  var length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  // Calculate the x-coordinate for the midpoint between the two elements, adjusted by half the length
  var cx = (x1 + x2) / 2 - length / 2;
  // Calculate the y-coordinate for the midpoint between the two elements, adjusted by half the thickness
  var cy = (y1 + y2) / 2 - thickness / 2;
  // Calculate the angle of rotation based on the positions of the two elements
  var angle = Math.atan2(y1 - y2, x1 - x2) * (180 / Math.PI);

  var dependencyId = getDependencyId(div1, div2);

  // Create the HTML string for the arrow with images at both ends
  var htmlLine = `
      <div id="${dependencyId}" style='padding:0px; margin:0px; height:${thickness}px; background-color:#a14868; border: white 1px solid; line-height:1px; position:absolute; left:${cx}px; top:${cy}px; width:${length}px; -moz-transform:rotate(${angle}deg); -webkit-transform:rotate(${angle}deg); -o-transform:rotate(${angle}deg); -ms-transform:rotate(${angle}deg); transform:rotate(${angle}deg);'>
        <img src="${cupcakeImg}" width="50" alt="Start Arrowhead" style='position: absolute; top: -20px; left: -10px;'>
      </div>`;

  // Add the HTML string to the container
  document.getElementById("dependency-container").innerHTML += htmlLine;
}

/**
 * This method allows you to retrieve the position
 * (X and Y coordinates) as well as the dimensions
 * (width and height) of an HTML element in relation
 * to the browser window.
 *
 * @param {HTMLElement} element
 */
function getOffset(element) {
  var rect = element.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
    width: rect.width || element.offsetWidth,
    height: rect.height || element.offsetHeight,
  };
}