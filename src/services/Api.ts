import axios from "axios";

export const apiGetWeatherByCoord = (lat, lon) => axios.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon
        + "&lang=ru&appid=b0826d1640a6bf6ea627b204195d540b");
export const apiGetWeatherByCity = (city) => axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + city
        + "&lang=ru&appid=b0826d1640a6bf6ea627b204195d540b");
export const apiGetCurrentWeather = (lat, lon) => axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat +
        "&lon=" + lon + "&lang=ru&appid=b0826d1640a6bf6ea627b204195d540b");
