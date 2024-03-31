import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const loader = document.getElementById('loader');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', event => {
  event.preventDefault();
  loader.style.display = 'block';
  gallery.innerHTML = '';

  const searchQuery = input.value.trim();
  if (searchQuery === '') {
    loader.style.display = 'none';
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query',
      position: 'topRight',
    });
    return;
  }

  fetchImages(searchQuery)
    .then(images => {
      loader.style.display = 'none';
      renderImages(images);
      input.value = '';
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.',
      });
    });
});
