import countryCard from '../templates/countryCard.hbs';
import countryList from '../templates/countryList.hbs';
import { error, defaultModules } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import { defaults } from '@pnotify/core';

defaults.delay = 2000;
defaultModules.set(PNotifyMobile, {});

const debounce = require('lodash.debounce');

const inputRef = document.querySelector('.countryInput');

inputRef.addEventListener('input', toCleanMurkup);
inputRef.addEventListener('input', debounce(fetchCountry, 500));

function fetchCountry(event) {
  if (event.target.value == false) {
    return;
  }
  fetch(`https://restcountries.com/v2/name/${event.target.value}`)
    .then(responce => {
      return responce.json();
    })
    .then(data => {
      if (data.status === 404) {
        throw Error(data.message);
      }
      generateMarkup(data);
    })
    .catch(() => {
      error({
        text: 'Incorrect query. Please enter a more specific query!',
      });
    });
}

function generateMarkup(countries) {
  toCleanMurkup();
  const listMarkup = countryList(countries);
  const cardMarkup = countryCard(countries);
  if (countries.length === 1) {
    return inputRef.insertAdjacentHTML('afterend', cardMarkup);
  } else if (countries.length <= 10) {
    return inputRef.insertAdjacentHTML('afterend', listMarkup);
  }
  error({
    title: false,
    text: 'Too many matches found. Please enter a more specific query!',
  });
}

function toCleanMurkup() {
  const countryList = document.querySelector('.countries-list');
  const countryCardContainer = document.querySelector('.cardContainer');
  if (countryList !== null) {
    countryList.remove();
  }
  if (countryCardContainer !== null) {
    countryCardContainer.remove();
  }
}
