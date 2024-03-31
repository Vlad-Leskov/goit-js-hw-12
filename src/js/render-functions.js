import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  clearGallery();

  if (images.length === 0) {
    iziToast.error({
      title: 'Error',
      position: 'topRight',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });

    return;
  }

  const galleryMarkup = images
    .map(image => {
      return `<li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img
            class="gallery-image"
            width="1280"
            height="152"
            src="${image.webformatURL}"
            data-source="${image.largeImageURL}"
            alt="${image.tags}"
          />
          <ul class="gallery-description">
          <li><h3>Likes</h3><p>${image.likes}</p>
          </li>
          <li><h3>Views</h3><p>${image.views}</p>
            </li>
            <li><h3>Comments</h3><p>${image.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${image.downloads}</p>
                </li>
          </ul>
        </a>
      </li>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', galleryMarkup);
  lightbox.refresh();
}

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt' });

export { renderImages };
