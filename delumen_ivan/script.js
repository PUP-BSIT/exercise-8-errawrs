let input = document.querySelector(".name");
let textarea = document.querySelector("textarea");
let button = document.querySelector(".submit-button");
let commentSection = document.querySelector(".teammate-comment");

button.classList.add("disabled");

button.addEventListener('click', addComment);
input.addEventListener('input', checkValue);
textarea.addEventListener('input', checkValue);

function checkValue() {
  if (input.value && textarea.value) {
    button.disabled = false;
    button.classList.remove("disabled");
    button.classList.add("enable");
  } else {
    button.disabled = true;
    button.classList.remove("enable");
    button.classList.add("disabled");
  }
}

function addComment() {
  let commentContainer = document.createElement('div');
  commentContainer.classList.add("comment-item");

  let commentName = document.createElement('strong');
  commentName.innerHTML = input.value;

  let commentText = document.createElement('p');
  commentText.innerHTML = textarea.value

  commentSection.append(commentContainer);
  commentContainer.append(commentText);
  commentContainer.append(commentName);
}