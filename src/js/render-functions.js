import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <a class="gallery__link" href="${largeImageURL}">
      <img class="gallery__image" src="${webformatURL}" alt="${tags}" />
      <div class="gallery__info">
        <p class="gallery__info-item"><b>Likes</b> ${likes}</p>
        <p class="gallery__info-item"><b>Views</b> ${views}</p>
        <p class="gallery__info-item"><b>Comments</b> ${comments}</p>
        <p class="gallery__info-item"><b>Downloads</b> ${downloads}</p>
      </div>
    </a>
  `).join('');
  gallery.innerHTML = markup;

  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}
