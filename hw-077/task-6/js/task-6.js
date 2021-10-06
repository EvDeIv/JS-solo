const input = document.querySelector("#validation-input");

input.addEventListener("blur", validation);

function validation(event) {
  if (event.target.value.length == input.attributes["data-length"].value) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
