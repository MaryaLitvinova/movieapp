const apiService = (value, page = 1) => {
  const _apiBase = `https://api.themoviedb.org/3/search/movie?api_key=1fb573444dbb7bcecf932088d33fa5db&language=en-EN&query=${value}&page=${page}`;

  try {
    return fetch(`${_apiBase}`).then((res) => res.json());
  } catch (error) {
    console.log(error);
    console.log(`Проверте подключение к vpn
    ${error}`);
  }
};

export default apiService;

// `https://api.themoviedb.org/3//discover/movie?api_key=1fb573444dbb7bcecf932088d33fa5db&language=en-EN&query=${value}`

//   "https://api.themoviedb.org/3/movie/550?api_key=1fb573444dbb7bcecf932088d33fa5db"
// https://api.themoviedb.org/3//discover/movie?api_key=1fb573444dbb7bcecf932088d33fa5db
