const inputName = document.getElementById("comment_name");
const inputComment = document.getElementById("comment_box");
const commentBtn = document.getElementById("comment_btn");
const commentSection = document.querySelector(".comment-section");

disableCommentButton();

inputName.addEventListener("input", checkRequirements);
inputComment.addEventListener("input", checkRequirements);

function checkRequirements() {
    const isNameValid = inputName.value.trim() !== "";
    const isCommentValid = inputComment.value.trim() !== "";

    if (isNameValid && isCommentValid) {
        enableCommentButton();
    } else {
        disableCommentButton();
    }
}

function enableCommentButton() {
    commentBtn.disabled = false;
    commentBtn.classList.remove("disabled");
    commentBtn.classList.add("enabled");
}

function disableCommentButton() {
    commentBtn.disabled = true;
    commentBtn.classList.remove("enabled");
    commentBtn.classList.add("disabled");
}

function addComment() {
    const commenter = inputName.value.trim();
    const comment = inputComment.value.trim();

    const commentContainer = createCommentElement(commenter, comment);

    commentSection.append(commentContainer);

    clearInputFields();
    disableCommentButton();
}

function createCommentElement(commenter, comment) {
    const commentContainer = document.createElement("div");
    commentContainer.classList.add("comment-box");

    const commentNameSpan = document.createElement("span");
    commentNameSpan.classList.add("commenter");
    commentNameSpan.textContent = commenter;

    const commentInput = document.createElement("p");
    commentInput.classList.add("comments");
    commentInput.textContent = comment;

    commentContainer.append(commentNameSpan);
    commentContainer.append(commentInput);

    return commentContainer;
}

function clearInputFields() {
    inputName.value = "";
    inputComment.value = "";
}
