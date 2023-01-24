// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const createGalleryItem = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  })
  .join('');

galleryList.insertAdjacentHTML('afterbegin', createGalleryItem);

var lightbox = new SimpleLightbox('.gallery a', {
  captionDalay: 250,
  captionsData: 'alt',
});
