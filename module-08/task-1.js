`use strict`;

import galleryItems from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  image: document.querySelector('.lightbox__image'),
  overlay: document.querySelector('.lightbox__overlay'),
};

const items = galleryItems;

function createGaleryMarkup({preview, original, description}) {
  const li = `
  <li class="gallery__item">
      <a class="gallery__link" href=${original}>
          <img 
              class="gallery__image"
              src=${preview}
              data-source=${original}
              alt="${description}"
          />
      </a>
  </li>`;
  return li;
}

function creatGaleryImages(items) {
  return items.map(item => createGaleryMarkup(item)).join('');
}

const images = creatGaleryImages(items);

refs.gallery.insertAdjacentHTML('afterbegin', images);

function clickOpenModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') return;
  refs.image.src = e.target.dataset.source;
  refs.image.alt = e.target.alt;
  refs.lightbox.classList.add('is-open');
}

function closeModal() {
  if (refs.lightbox.classList.contains('is-open')) {
    refs.image.src = '';
    refs.image.alt = '';
    refs.lightbox.classList.remove('is-open');
  }
}

function clickCloseModal(e) {
  if (e.currentTarget === refs.overlay && e.target.nodeName !== 'IMG') {
    closeModal();
  }
}

refs.gallery.addEventListener('click', clickOpenModal);
refs.overlay.addEventListener('click', clickCloseModal);

window.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    closeModal();
  }
});
