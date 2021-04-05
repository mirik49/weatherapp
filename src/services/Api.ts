import axios from "axios";
const token = "b0826d1640a6bf6ea627b204195d540b";

export const apiGetWeatherByCoord = (lat, lon) => axios.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon
        + "&lang=ru&appid=" + token);
export const apiGetWeatherByCity = (city) => axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + city
        + "&lang=ru&appid=" + token);
export const apiGetCurrentWeather = (lat, lon) => axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat +
        "&lon=" + lon + "&lang=ru&appid=" + token);

export const apiGetAllRuCity = () => axios.get("/api/ru/cities");
