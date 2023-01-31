// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const refs = {
  gallery: document.querySelector('.gallery'),
};

const galleryList = onCreateGalleryCardItems(galleryItems);
refs.gallery.innerHTML = galleryList;

function onCreateGalleryCardItems(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </div>`
    )
    .join('');
}

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
});