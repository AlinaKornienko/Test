const refs = {
  galery: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  imgOrig: document.querySelector('.lightbox__image'),
  overlay: document.querySelector('.lightbox__overlay'),
  btnClose: document.querySelector('[data-action="close-lightbox"]'),
  window: window,
};

const elemGalery = createElemGaleryMarkup(galleryItems);

refs.galery.insertAdjacentHTML('beforeend', elemGalery);
refs.galery.addEventListener('click', onGaleryItemClick);
refs.overlay.addEventListener('click', onOverlayClick);
refs.btnClose.addEventListener('click', onBtnCloseClick);
refs.window.addEventListener('keydown', onBtnEscKeydown);

function createElemGaleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
      <a
        class="gallery__link"
        href=${original}
      >
        <img
          class="gallery__image"
          src=${preview}
          data-source=${original}
          alt=${description}
        />
      </a>
    </li>`;
    })
    .join('');
}

function onGaleryItemClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }
  refs.lightbox.classList.add('is-open');
  refs.imgOrig.src = `${e.target.dataset.source}`;
  refs.imgOrig.alt = `${e.target.attributes.alt.value}`;
}

function onOverlayClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains('lightbox__overlay')) {
    return;
  }
  closelightbox();
}

function onBtnCloseClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains('lightbox__button')) {
    return;
  }
  closelightbox();
}

function onBtnEscKeydown(e) {
  e.preventDefault();
  if (e.code !== 'Escape') {
    return;
  }
  closelightbox();
}

function closelightbox() {
  refs.lightbox.classList.remove('is-open');
  refs.imgOrig.src = '';
  refs.imgOrig.alt = '';
}