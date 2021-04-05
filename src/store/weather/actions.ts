import {
    apiGetAllRuCity,
    apiGetCurrentWeather,
    apiGetWeatherByCity, apiGetWeatherByCoord
} from "../../services/Api";


export function setWeatherData(actionVar, actionData) {
  return {
    type: "ACTIONS",
    payload: {
      var: actionVar,
      val: actionData
    }
  };
}

export const getWeatherByCity = (city) => (dispatch) =>{
  apiGetWeatherByCity(city)
    .then(response => response.data)
    .then(data => {
      const {coord, name} = data;
      apiGetCurrentWeather(coord.lat, coord.lon)
        .then(response => {
          dispatch(setWeatherData("currentWeather", response.data));
          dispatch(setWeatherData("isShowSearchBar", false));
        });
      dispatch(setWeatherData("currentCity", name));
    })
    .catch(error => {
      if (error.response.status === 404) {
        dispatch(setWeatherData("inputError", "Такой город не найден"));
      }
    });
};

export const searchCityByLocation = () => (dispatch) =>{
    console.log(navigator, "NAVIGATOR")
  if (navigator.geolocation) {
    const Geolocation = navigator.geolocation;
    Geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      apiGetWeatherByCoord(lat, lon)
        .then(response => response.data)
        .then(data => {
          const {name} = data;
          dispatch(setWeatherData("currentCity", name));
          apiGetCurrentWeather(lat, lon)
            .then(response => {
              dispatch(setWeatherData("currentWeather", response.data));
            });
        });
    });
  }
};

export const GetRuCities = () => (dispatch) => {
    apiGetAllRuCity().then(response => {
        dispatch(setWeatherData("cities", response.data));
    })
}
