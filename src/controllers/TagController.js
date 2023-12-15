import { createTag } from "../models/TagModel.js";
import TagModel from "../models/TagModel";
import TagView from "../views/TagView";

export default class TagController {
  constructor() {
    this.init();
  }

  init() {
    const createTagButton = document.getElementById("task-tag");
    createTagButton.addEventListener("keypress", createTag);
  }
  renderTag(tagData) {
    const tagModel = new TagModel(tagData.name);

    TagView.render(tagModel);
  }
}
