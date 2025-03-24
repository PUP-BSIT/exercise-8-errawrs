let nameInput = document.getElementById("name");
let commentTextarea = document.getElementById("comment");
let submitButton = document.getElementById("submit_button");
let form = document.querySelector(".comment-form form");
let commentsDisplay = document.querySelector(".comments-display");

function validateForm() {
  if (commentTextarea.value.length && nameInput.value.length) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

function handleSubmit(event) {
  event.preventDefault();

  if (submitButton.disabled === false) {
    let name = nameInput.value.trim();
    let comment = commentTextarea.value.trim();
    let commentItem = document.createElement("div");
    commentItem.className = "comment-item";

    let nameElement = document.createElement("div");
    nameElement.className = "commenter-name";
    nameElement.textContent = name;

    let commentElement = document.createElement("div");
    commentElement.className = "comment-text";
    commentElement.textContent = comment;

    commentItem.appendChild(nameElement);
    commentItem.appendChild(commentElement);
    commentsDisplay.appendChild(commentItem);

    form.reset();
    validateForm();
  }
}

nameInput.addEventListener("input", validateForm);
commentTextarea.addEventListener("input", validateForm);
form.addEventListener("submit", handleSubmit);

validateForm();
