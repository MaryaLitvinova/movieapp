const _defaultPath = "https://api.themoviedb.org/3/";
const _apiKey = "1fb573444dbb7bcecf932088d33fa5db";

const postRequest = (id, starValue) => {
  const header = {
    value: starValue,
  };
  // localStorage.setItem(id, `${starValue}`);

  const _url = `${_defaultPath}movie/${id}/rating?api_key=${_apiKey}&guest_session_id=${localStorage.getItem(
    "guest"
  )}`;

  try {
    return fetch(_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(header),
    }).then((response) => response.json());
  } catch (error) {
    console.log("ошибка пост запроса ", error);
    alert(`Проверте подключение к vpn
      ${error}`);
  }
};

export default postRequest;
