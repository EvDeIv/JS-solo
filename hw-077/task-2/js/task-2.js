const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsList = document.querySelector("#ingredients");
const addingButton = document.querySelector('[data-action="add-elements"]');
const removeButton = document.querySelector('[data-action="remove-elements"]');

addingButton.addEventListener("click", listCreation);
removeButton.addEventListener("click", listClearing);

function listCreation() {
  if (!ingredientsList.hasChildNodes()) {
    const changedArray = ingredients.map(elementDomCreation);
    ingredientsList.append(...changedArray);
  }
}

function elementDomCreation(element) {
  const listElement = document.createElement("li");
  listElement.textContent = `${element}`;
  return listElement;
}

function listClearing() {
  ingredientsList.innerHTML = "";
}
