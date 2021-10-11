import inputForm from '../templates/inputForm.hbs';

const inputMarkup = inputForm();
document.body.insertAdjacentHTML('afterbegin', inputMarkup);
