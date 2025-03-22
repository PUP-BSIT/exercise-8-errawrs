let inputName = document.getElementById("comment_name");
let inputComment = document.getElementById("comment_box");
let commentBtn = document.getElementById("comment_btn");

commentBtn.disabled = true;
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

function addComment() {
    let commentSection = document.querySelector(".comment-section");
    let commenter = document.getElementById("comment_name").value;
    let comment = document.getElementById("comment_box").value;

    let commentContainer = document.createElement("div");
    commentContainer.classList.add("comment-box");
    let commentNameSpan = document.createElement("span");
    commentNameSpan.classList.add("commenter");
  let commentInput = document.createElement("p");
  commentInput.classList.add("comments");

    commentSection.append(commentContainer);
    commentContainer.append(commentNameSpan);
    commentContainer.append(commentInput);

    commentNameSpan.innerText = commenter;
    commentInput.innerText = comment;
}

inputName.addEventListener("input", checkRequirements);
inputComment.addEventListener("input", checkRequirements);
