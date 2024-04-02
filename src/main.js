import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const loader = document.getElementById('loader');
const gallery = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.load-more-btn');

let searchQuery;
let currentPage = 1;
let maxPage = 0;
const per_page = 15;

function showLoadMore() {
  btnLoadMore.classList.remove('hidden');
}
function hideLoadMore() {
  btnLoadMore.classList.add('hidden');
}

function showLoader() {
  loader.classList.remove('hidden');
}
function hideLoader() {
  loader.classList.add('hidden');
}

function checkBtnStatus() {
  if (currentPage >= maxPage) {
    hideLoadMore();
    iziToast.info({
      title: 'Info',
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results.",
    });
  } else {
    showLoadMore();
  }
}

form.addEventListener('submit', onFormSubmit);
btnLoadMore.addEventListener('click', onLoadMoreClick);

async function onFormSubmit(e) {
  e.preventDefault();

  searchQuery = input.value.trim();
  gallery.innerHTML = '';
  currentPage = 1;

  if (!searchQuery) {
    hideLoadMore();
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query',
      position: 'topRight',
    });
    return;
  }

  try {
    showLoader();
    const data = await fetchImages(searchQuery, currentPage);
    maxPage = Math.ceil(data.totalHits / per_page);
    renderImages(data.hits);
  } catch (err) {
    console.log(err);
  }

  hideLoader();
  checkBtnStatus();
  e.target.reset();
}

async function onLoadMoreClick() {
  currentPage += 1;
  showLoader();
  try {
    const data = await fetchImages(searchQuery, currentPage);
    renderImages(data.hits);
  } catch (err) {
    console.log(err);
  }

  scrollBy({
    top: 950,
    behavior: 'smooth',
  });
  checkBtnStatus();
  hideLoader();
}
