import apiService from './apiService';
import toCleanMarkup from './toCleanMarkup';

function galleryContentGeneration(event) {
  if (!event.target.value) {
    return;
  }

  apiService.currentQuery = event.target.value;

  if (apiService.currentQuery !== apiService.previousQuery) {
    apiService.currentPage = 1;
    toCleanMarkup();
    return apiService.getGalleryData();
  }
  apiService.currentPage += 1;
  return apiService.getGalleryData();
}

export default galleryContentGeneration;
