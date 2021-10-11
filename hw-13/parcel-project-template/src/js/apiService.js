import { error, defaultModules } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import { defaults } from '@pnotify/core';

defaults.delay = 2000;
defaultModules.set(PNotifyMobile, {});

import createGalleryItemNode from './createGalleryItemNode';

const axios = require('axios');
axios.defaults.baseURL = 'https://pixabay.com/api';

const apiService = {
  previousQuery: '',
  currentQuery: '',

  apiParams:
    '/?image_type=photo&orientation=horizontal&key=17873748-3f7eaecfe33175e69c7f70038&per_page=12',

  async getGalleryData() {
    try {
      const response = await axios.get(
        `${this.apiParams}&page=${this.currentPage}&q=${this.currentQuery}`,
      );
      if (response.data.totalHits === 0) {
        return error({
          title: false,
          text: 'No matches found. Please enter a more specific query!',
        });
      }
      createGalleryItemNode(response.data.hits);
      this.previousQuery = this.currentQuery;
    } catch (message) {
      error({
        title: false,
        text: `${message}`,
      });
    }
  },
};

export default apiService;
