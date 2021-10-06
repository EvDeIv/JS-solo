import fetchCountry from './fetchCountry';
import toCleanMurkup from './toCleanMurkup';

const debounce = require('lodash.debounce');

const inputRef = document.querySelector('.countryInput');

inputRef.addEventListener('input', toCleanMurkup);
inputRef.addEventListener('input', debounce(fetchCountry, 500));
