let inputName = document.getElementById("comment_name");
let inputComment = document.getElementById("comment_box");
let commentBtn = document.getElementById("comment_btn");

commentBtn.classList.add("disabled");

function checkRequirements() {
  if (inputName.value.trim() !== "" && inputComment.value.trim() !== "") {
    commentBtn.disabled = false;
    commentBtn.classList.remove("disabled");
    commentBtn.classList.add("enabled");
  } else {
    commentBtn.disabled = true;
    commentBtn.classList.remove("enabled");
    commentBtn.classList.add("disabled");
  }
}

inputName.addEventListener("input", checkRequirements);
inputComment.addEventListener("input", checkRequirements);
