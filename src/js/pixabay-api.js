const apiKey = '43042751-379763e2b45d181b55d7040e4';
const baseUrl = 'https://pixabay.com/api/';

function fetchImages(searchQuery) {
  const url = `${baseUrl}?key=${apiKey}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Unable to fetch images');
      }
      return response.json();
    })
    .then(data => data.hits)
    .catch(error => {
      console.error(error);
    });
}

export { fetchImages };
