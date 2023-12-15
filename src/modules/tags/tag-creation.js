export function createTag(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    var new_tag_input = document.getElementById("task-tag");
    var new_tag = new_tag_input.value.trim();
    new_tag_input.value = "";
    return new_tag;
  }
  return null;
}
