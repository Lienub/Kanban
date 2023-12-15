import { deleteTag } from "../models/TagModel.js";

export default class TagView {
  static render(tagModel) {

    var tags_block = document.getElementById("tags-block");

    var tag_div = document.createElement("div");
    tag_div.innerHTML = `
            <p>${tagModel.name}</p>
            <button>X</button>
        `;

    tags_block.appendChild(tag_div);
    tag_div.querySelector("button").addEventListener("click", () => {
      deleteTag(tag_div.querySelector("button"));
    });
  }
}