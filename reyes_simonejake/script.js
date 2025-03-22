document.addEventListener("DOMContentLoaded", function () {
  let nameInput = document.getElementById("name");
  let commentTextarea = document.getElementById("comment");
  let submitButton = document.getElementById("submit_button");
  let form = document.querySelector(".comment-form form"); 

  function validateForm() {
    submitButton.disabled = !(
      nameInput.value.trim() && commentTextarea.value.trim()
    );
  }
  nameInput.addEventListener("input", validateForm);
  commentTextarea.addEventListener("input", validateForm);
  validateForm();
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!submitButton.disabled) {
      form.reset();
      validateForm();
    }
  });
});
