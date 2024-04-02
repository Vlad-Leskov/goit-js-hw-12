import axios from 'axios';

export async function fetchImages(searchQuery, currentPage) {
  const url = 'https://pixabay.com/api/';

  const params = {
    key: '43042751-379763e2b45d181b55d7040e4',
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: currentPage,
  };

  try {
    const response = await axios.get(url, { params });

    if (response.status !== 200) {
      throw new Error('Unable to fetch images');
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Unable to fetch images');
  }
}
