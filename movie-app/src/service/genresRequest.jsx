const genresRequest = () => {
  const _defaultPath = "https://api.themoviedb.org/3/genre/movie/list";
  const _apiKey = "1fb573444dbb7bcecf932088d33fa5db";
  const _language = "en-En";
  const _url = `${_defaultPath}?api_key=${_apiKey}&language=${_language}`;
  try {
    return fetch(_url).then((response) => response.json());
  } catch (error) {
    console.log(error);
    // eslint-disable-next-line no-alert
    alert(`Проверте подключение
    ${error}`);
  }
};

export default genresRequest;
