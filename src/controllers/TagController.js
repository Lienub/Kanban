import { createTag } from "../models/TagModel.js";
import TagModel from "../models/TagModel";
import TagView from "../views/components/TagView.js";

export default class TagController {
  constructor() {
    this.init();
  }

  init() {
    const createTagButton = document.getElementById("task-tag");
    createTagButton.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        let tag = createTag();
        TagView.displayTag(tag);
      }
    });
  }
  renderTag(tagData) {
    const tagModel = new TagModel(tagData.name);

    TagView.render(tagModel);
  }
}
