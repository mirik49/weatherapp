import axios from "axios";
const token = "";

export const apiGetWeatherByCoord = (lat, lon) => axios.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon
        + "&lang=ru&appid=" + token);
export const apiGetWeatherByCity = (city) => axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + city
        + "&lang=ru&appid=" + token);
export const apiGetCurrentWeather = (lat, lon) => axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat +
        "&lon=" + lon + "&lang=ru&appid=" + token);
