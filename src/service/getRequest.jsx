const _defaultPath = "https://api.themoviedb.org/3/";
const _apiKey = "1fb573444dbb7bcecf932088d33fa5db";

const getRequest = () => {
  const _url = `${_defaultPath}guest_session/${localStorage.getItem(
    "guest"
  )}/rated/movies?api_key=${_apiKey}&language=en-EN&sort_by=created_at.asc`;

  try {
    return fetch(_url).then((response) => response.json());
  } catch (error) {
    console.log("ошибка гет запроса ", error);
    alert(`Проверте подключение к vpn
      ${error}`);
  }
};
export default getRequest;
