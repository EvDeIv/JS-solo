import { error, defaultModules } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import { defaults } from '@pnotify/core';

defaults.delay = 2000;
defaultModules.set(PNotifyMobile, {});

import countryCard from '../templates/countryCard.hbs';
import countryList from '../templates/countryList.hbs';

import toCleanMurkup from './toCleanMurkup';

const inputRef = document.querySelector('.countryInput');

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

export default generateMarkup;
