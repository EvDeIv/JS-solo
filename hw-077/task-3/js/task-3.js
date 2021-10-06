const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
];

const gallery = document.querySelector('#gallery');
const addingButton = document.querySelector('[data-action="add-elements"]');
const removeButton = document.querySelector('[data-action="remove-elements"]');

addingButton.addEventListener('click', mappingObj);
removeButton.addEventListener('click', toClearGallery);


function htmlCreation(obj) {
    gallery.insertAdjacentHTML("afterbegin",`<li><img src="${obj.url}" alt="${obj.alt}"></li>`);
}

function mappingObj() {
    if (!gallery.hasChildNodes()) {
    return images.map(element => htmlCreation(element))}
}

function toClearGallery() {
    gallery.innerHTML = '';
}