import { createTag } from "./tag-creation.js";
import { deleteTag } from "./tag-deletion.js";
import { displayNewTag } from "./tag-display.js";

export function eventSaveTag(element) {
  if (element == null) return;

  element.addEventListener("keypress", (event) => {
    var new_tag = createTag(event);
    if (new_tag != null) {
      displayNewTag(new_tag);
    }
  });
}

export function eventDeteleTag(element) {
  if (element == null) return;

  element.addEventListener("click", () => {
    deleteTag(element);
  });
}
