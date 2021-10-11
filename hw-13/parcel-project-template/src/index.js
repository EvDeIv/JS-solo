import './sass/main.scss';
import './js/galleryContainer';
import './js/inputForm';

import refs from './js/refs.js';
import galleryContentGeneration from './js/galleryContentGeneration.js';
import openModal from './js/lightBox';

const debounce = require('lodash.debounce');

refs.input.addEventListener('input', debounce(galleryContentGeneration, 500));
refs.gallery.addEventListener('click', openModal);
