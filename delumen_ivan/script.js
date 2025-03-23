let input = document.querySelector(".name");
let button = document.querySelector(".submit-button");
let textarea = document.querySelector("textarea");

input.addEventListener("change", stateHandle);
textarea.addEventListener("input", stateHandle);

function stateHandle() {
  if (input.value && textarea.value) {
    button.disabled = true;
    button.classList.add("enable");
  } else {
    button.disabled = false;
    button.classList.add("disable");
  }
}
