import { error, defaultModules } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import { defaults } from '@pnotify/core';

defaults.delay = 2000;
defaultModules.set(PNotifyMobile, {});

import generateMarkup from './generateMarkup';

function fetchCountry(event) {
  if (event.target.value == false) {
    return;
  }
  fetch(`https://restcountries.com/v2/name/${event.target.value}`)
    .then(responce => {
      return responce.json();
    })
    .then(data => {
      console.log(data);
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

export default fetchCountry;
