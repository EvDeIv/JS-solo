import menuTemplate from '../templates/menu.hbs';
import dishes from '../menu.json';

const markup = menuTemplate(dishes);
const listOfDishes = document.querySelector('.js-menu');

listOfDishes.insertAdjacentHTML('beforeend', markup);
