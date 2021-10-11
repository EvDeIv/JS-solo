import galleryItem from '../templates/galleryItem.hbs';
import refs from './refs.js';
import observer from './intersectionObserver.js';

const { gallery } = refs;

function createGalleryItemNode(data) {
  const galleryItemMarkup = galleryItem(data);
  gallery.insertAdjacentHTML('beforeend', galleryItemMarkup);
  if (refs.gallery.children.length > 8) {
    observer.observe(refs.gallery.lastElementChild);
  }
}

export default createGalleryItemNode;
