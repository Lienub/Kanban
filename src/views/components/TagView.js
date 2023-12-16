import { deleteTag } from "../../models/TagModel.js";

export default class TagView {
  static render(tagModel) {

    var tagsBlock = document.getElementById("tags-block");

    var tagDiv = document.createElement("div");
    tagDiv.innerHTML = `
            <p>${tagModel.name}</p>
            <button>X</button>
        `;

    tagsBlock.appendChild(tagDiv);
    tagDiv.querySelector("button").addEventListener("click", () => {
      deleteTag(tagDiv.querySelector("button"));
    });
  }
}