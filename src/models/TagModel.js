import TagView from "../views/components/TagView";

export default class TagModel {
  constructor(name) {
    this.name = name;
  }
}
export function createTag(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    var newTagInput = document.getElementById("task-tag");
    var newTag = newTagInput.value.trim();
    newTagInput.value = "";

    var newTagModel = new TagModel(newTag);

    TagView.render(newTagModel)
  }
}

export function deleteTag(button) {
  var tagDiv = button.parentElement;
  tagDiv.remove();
}
