const API_KEY = '46874695-aa87c3456f3cd5bd5c148909d';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
  const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`);
  const data = await response.json();
  return data.hits;
}
