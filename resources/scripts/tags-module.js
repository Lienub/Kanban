function createNewTag(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      var new_tag_input = document.getElementById("task-tag");
      var new_tag = new_tag_input.value.trim();
      displayTag(new_tag);
      new_tag_input.value = "";
    }
  }
  
  function displayTag(new_tag) {
    var tags_block = document.getElementById("tags-block");
  
    var tag_div = document.createElement("div");
    tag_div.innerHTML = `
          <p>${new_tag}</p>
          <button onclick="deleteTag(this)">X</button>
      `;
  
      tags_block.appendChild(tag_div);
  }
  
  function deleteTag(button) {
      var tag_div = button.parentElement;
      tag_div.remove();
  }
  