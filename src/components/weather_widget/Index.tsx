import React from "react";
import MainTemperature from "./MainTemperature";
import HeaderWrapper from "../../wrappers/weather/HeaderWrapper";
import FooterWrapper from "../../wrappers/weather/FooterWrapper";

function Weather(props) {
  const {weatherData} = props;
  const {currentWeather, degreesType} = weatherData;
  const {current} = currentWeather || {};
  const {temp, weather} = current || {};

  return (
    <div className="weather">
      <HeaderWrapper/>
      <div className="main">
        <div className="main__container">
          {temp &&
                    <MainTemperature
                      weather={weather}
                      temp={temp}
                      degreesType={degreesType}

                    />
          }
        </div>
      </div>
      <FooterWrapper/>
    </div>
  );
}

export default Weather;
