import items from "../src/items/gallery-items.js";

const refs = {
  gallery: document.querySelector(".js-gallery"),
  modalImg: document.querySelector(".lightbox__image"),
  lightBox: document.querySelector(".lightbox"),
};

let galleryChilds = [];

items.forEach((item) => overlayCreator(item));

function overlayCreator(image) {
  const layoutRefs = {
    list: document.createElement("li"),
    anchor: document.createElement("a"),
    image: document.createElement("img"),
  };

  layoutRefs.list.classList.add("gallery__item");

  layoutRefs.anchor.classList.add("gallery__link");
  layoutRefs.anchor.href = image.original;

  layoutRefs.image.classList.add("gallery__image");
  layoutRefs.image.src = image.original;
  layoutRefs.image.dataset.sourse = image.original;
  layoutRefs.image.alt = image.description;

  layoutRefs.anchor.append(layoutRefs.image);
  layoutRefs.list.append(layoutRefs.anchor);

  galleryChilds.push(layoutRefs.list);
}

refs.gallery.append(...galleryChilds);

refs.gallery.addEventListener("click", openModal);
refs.lightBox.addEventListener("click", closeModal);

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    refs.modalImg.src = event.target.dataset.sourse;
    refs.lightBox.classList.add("is-open");
    document.addEventListener("keydown", closeModal);
    document.addEventListener("keydown", keyBrowse);
  }
}

function closeModal(event) {
  event.preventDefault();
  if (
    event.target.classList.contains("lightbox__button") ||
    event.target.classList.contains("lightbox__content") ||
    event.key === "Escape"
  ) {
    document.removeEventListener("keydown", closeModal);
    document.removeEventListener("keydown", keyBrowse);
    refs.lightBox.classList.remove("is-open");
    refs.modalImg.src = "";
  }
}

function keyBrowse(event) {
  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
    let currentImg = refs.gallery.querySelector(
      `[href="${refs.modalImg.src}"]`
    );

    let nextSibl = currentImg.offsetParent.nextSibling;
    let prevSibl = currentImg.offsetParent.previousSibling;

    let nextImg;
    if (event.key === "ArrowRight" && nextSibl !== null) {
      nextImg = nextSibl.querySelector(".gallery__image");
      refs.modalImg.src = nextImg.dataset.sourse;
    } else if (event.key === "ArrowLeft" && prevSibl !== null) {
      nextImg = prevSibl.querySelector(".gallery__image");
      refs.modalImg.src = nextImg.dataset.sourse;
    }
  }
}
