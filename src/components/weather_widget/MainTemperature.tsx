import WeatherIconSelector from "./WeatherIconSelector";
import React from "react";

interface MainTemperatureI {
    weather: {
        description: string,
    }[],
    temp: string,
    degreesType: string,
}

const MainTemperature: React.FunctionComponent<MainTemperatureI> = (
  {weather, temp, degreesType}
) => {
  const convertCurrentTemp = (currentTemp: string) => {
    if (degreesType === "C") {
      return Math.trunc(parseFloat(currentTemp) - 273.15);
    } else if (degreesType === "F") {
      return Math.trunc(1.8 * (parseFloat(currentTemp) - 273) + 32);
    }
  };
  return (
    <>
      <div className="main__temperature-wr">
        <WeatherIconSelector
          selector={weather[0]}
        />
        <p className="main__temperature">
          {convertCurrentTemp(temp)}
        </p>
      </div>
      <p className="main__temperature-desc">{weather[0].description}</p>
    </>
  );
};
export default MainTemperature;
