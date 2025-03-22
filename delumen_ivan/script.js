let input = document.querySelector(".name");
let button = document.querySelector(".submitButton");
let textarea = document.querySelector("textarea");

button.disabled = true;
button.style.backgroundColor = "#cccccc";
button.style.cursor = "not-allowed";

input.addEventListener("change", stateHandle);
textarea.addEventListener("input", stateHandle);

function stateHandle() {
  if (input.value === "" || textarea.value === "") {
    button.disabled = true;
    button.style.backgroundColor = "#cccccc";
    button.style.cursor = "not-allowed";
  } else {
    button.disabled = false;
    button.style.backgroundColor = "#FF0000";
    button.style.cursor = "pointer";
  }
}
