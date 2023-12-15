import TagView from "../views/TagView";

export default class TagModel {
  constructor(name) {
    this.name = name;
  }
}
export function createTag(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    var new_tag_input = document.getElementById("task-tag");
    var new_tag = new_tag_input.value.trim();
    new_tag_input.value = "";

    var newTagModel = new TagModel(new_tag);

    TagView.render(newTagModel);
  }
}

export function deleteTag(button) {
  var tag_div = button.parentElement;
  tag_div.remove();
}
