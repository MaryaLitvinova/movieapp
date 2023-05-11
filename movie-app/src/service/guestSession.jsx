const _defaultPath = "https://api.themoviedb.org/3/";
const _apiKey = "1fb573444dbb7bcecf932088d33fa5db";

const guestSessionRequest = () => {
  const _url = `${_defaultPath}authentication/guest_session/new?api_key=${_apiKey}`;

  try {
    return fetch(_url).then((response) => response.json());
  } catch (error) {
    console.log("ошибка гостевой сессии ", error);
    alert(`Проверте подключение к vpn
    ${error}`);
  }
};

export default guestSessionRequest;
