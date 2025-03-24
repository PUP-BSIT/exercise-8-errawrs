document.addEventListener("DOMContentLoaded", function () {
  let commentNameInput = document.getElementById("comment_name");
  let goalCommentInput = document.getElementById("goal_comment");
  let commentBtn = document.getElementById("comment_button");
  let existingCommentsSection = document.querySelector(".existing-comments");
  
  function validateCommentForm() {
    if (
      commentNameInput.value.trim() !== "" &&
      goalCommentInput.value.trim() !== ""
    ) {
      commentBtn.disabled = false;
    } else {
      commentBtn.disabled = true;
    }
  }
  
  commentNameInput.addEventListener("input", validateCommentForm);
  goalCommentInput.addEventListener("input", validateCommentForm);
  
  let goalCommentForm = document.querySelector(".goal-comment-form");
  goalCommentForm.addEventListener("submit", function (event) {
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
  });
});