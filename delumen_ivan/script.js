let input = document.querySelector(".name");
let textarea = document.querySelector("textarea");
let button = document.querySelector(".submit-button");
let commentSection = document.querySelector(".teammate-comment");

button.classList.add("disabled");

button.addEventListener("click", addComment);
input.addEventListener("input", checkValue);
textarea.addEventListener("input", checkValue);

function checkValue() {
    if (!input.value.trim() || !textarea.value.trim()) {
        button.disabled = true;
        button.classList.toggle("enable", false);
        button.classList.toggle("disable", true);
        return;
    }
        button.disabled = false;
        button.classList.toggle("disable", false);
        button.classList.toggle("enable", true);
    }

function addComment() {
    let commentContainer = document.createElement("div");
    commentContainer.classList.add("comment-item");
    commentSection.append(commentContainer);

    let commentText = document.createElement("p");
    commentText.innerHTML = textarea.value;
    commentContainer.append(commentText);

    let commentName = document.createElement("strong");
    commentName.innerHTML = input.value;
    commentContainer.append(commentName);

    input.value = "";
    textarea.value = "";

    button.disabled = true;
    button.classList.toggle("enable", false);
    button.classList.toggle("disable", true);
}