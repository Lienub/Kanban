export default class TagModel {
  constructor(name) {
    this.name = name;
  }
}
/**
 *  this function creates a new tag
 *
 * @returns {TagModel}
 */
export function createTag() {
  var newTagInput = document.getElementById("task-tag");
  var newTag = newTagInput.value.trim();
  newTagInput.value = "";
  return new TagModel(newTag);
}
/**
 *  this function deletes a tag
 *
 * @param {KeyboardEvent} event
 */
export function deleteTag(button) {
  var tagDiv = button.parentElement;
  tagDiv.remove();
}
