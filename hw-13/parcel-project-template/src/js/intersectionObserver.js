import apiService from './apiService';
import refs from './refs.js';

const options = {
  rootMargin: '0px',
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      apiService.currentPage += 1;
      apiService.getGalleryData();
    }
  });
}, options);

export default observer;
