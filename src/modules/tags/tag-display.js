
import {
  eventDeteleTag,
} from "./tags-event-handlers.js";

export function displayNewTag(new_tag) {
  var tags_block = document.getElementById("tags-block");

  var tag_div = document.createElement("div");
  tag_div.innerHTML = `
          <p>${new_tag}</p>
          <button>X</button>
      `;

  tags_block.appendChild(tag_div);
  eventDeteleTag(tag_div.querySelector("button"));
}