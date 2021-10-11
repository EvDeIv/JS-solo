import * as basicLightbox from 'basiclightbox';

function openModal(event) {
  if (event.target.dataset.largeimg) {
    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.largeimg}" width="800" height="600">
    `);
    instance.show();
  }
}

export default openModal;
