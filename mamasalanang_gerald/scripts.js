let commentNameInput;
let goalCommentInput;
let commentBtn;
let existingCommentsSection;
let goalCommentForm;

let validateCommentForm = () => {
  commentBtn.disabled = !(
    commentNameInput.value.trim() && goalCommentInput.value.trim()
  );
};

let handleSubmit = (event) => {
  event.preventDefault();

  let name = commentNameInput.value.trim();
  let comment = goalCommentInput.value.trim();

  let newComment = document.createElement("div");
  newComment.className = "teammate-comment";

  newComment.innerHTML = `
    <p class="comment-text">${comment}</p>
    <span>- ${name}</span>
  `;

  existingCommentsSection.appendChild(newComment);

  commentNameInput.value = "";
  goalCommentInput.value = "";
  commentBtn.disabled = true;

  newComment.scrollIntoView({ behavior: "smooth" });
};

let initializeCommentForm = () => {
  commentNameInput = document.getElementById("comment_name");
  goalCommentInput = document.getElementById("goal_comment");
  commentBtn = document.getElementById("comment_button");
  existingCommentsSection = document.querySelector(".existing-comments");
  goalCommentForm = document.querySelector(".goal-comment-form");

  commentNameInput.addEventListener("input", validateCommentForm);
  goalCommentInput.addEventListener("input", validateCommentForm);
  goalCommentForm.addEventListener("submit", handleSubmit);
};

document.addEventListener("DOMContentLoaded", initializeCommentForm);
