import galleryContainer from '../templates/galleryContainer.hbs';

const galleryMarkup = galleryContainer();
document.body.insertAdjacentHTML('afterbegin', galleryMarkup);
