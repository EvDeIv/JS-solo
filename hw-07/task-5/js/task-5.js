const inputText = document.querySelector('#name-input');
const spanForReplace = document.querySelector('#name-output');


inputText.addEventListener('input', textReplacer);

function textReplacer(event) {
    spanForReplace.textContent = event.target.value;
}