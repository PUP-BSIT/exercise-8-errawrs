let input = document.querySelector(".name");
let button = document.querySelector(".submit-button");
let textarea = document.querySelector("textarea");

input.addEventListener("input", stateHandle);
textarea.addEventListener("input", stateHandle);

function stateHandle() {
  if (input.value && textarea.value) {
    button.disabled = false;
    button.classList.remove("disabled");
    button.classList.add("enable");
  } else {
    button.disabled = true;
    button.classList.remove("enable");
    button.classList.add("disabled")
  }
}
