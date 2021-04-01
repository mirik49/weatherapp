import React from "react";

interface MoreWeatherInfoI {
    windSpeed: string,
    windDeg: string,
    pressure: string,
    humidity: string,
    pop: number
}

const MoreWeatherInfo: React.FunctionComponent<MoreWeatherInfoI> = (
  {windSpeed, windDeg, pressure, humidity, pop}
) => {
  const convertWindDegInDirection = (deg: string) => {
    const degrees = parseFloat(deg);
    if (degrees > 0 && degrees <= 90) {
      return "Северо - восточный";
    } else if (degrees === 90) {
      return "Восточный";
    } else if (degrees > 90 && degrees <= 180) {
      return "Юго - восточный ";
    } else if (degrees === 180) {
      return "Южный";
    } else if (degrees > 180 && degrees <= 270) {
      return "Юго - западный";
    } else if (degrees === 270) {
      return "Западный";
    } else if (degrees > 270 && degrees <= 360) {
      return "Северо-западный";
    } else if (degrees === 0) {
      return "Северный";
    }
  };

  const convertToMmHg = (hPa: string) => Math.trunc(parseInt(hPa, 10) * 0.75006375541921);

  return (
    <ul className="info__list">
      <li className="info__item">
        <p className="info__name">
                    Ветер
        </p>
        <p className="info__value">
          {windSpeed} м/с {convertWindDegInDirection(windDeg)}
        </p>
      </li>
      <li className="info__item">
        <p className="info__name">
                    Давление
        </p>
        <p className="info__value">
          {`${convertToMmHg(pressure)} мм рт. ст.`}
        </p>
      </li>
      <li className="info__item">
        <p className="info__name">
                    Влажность
        </p>
        <p className="info__value">
          {`${humidity} %`}
        </p>
      </li>
      <li className="info__item">
        <p className="info__name">
                    Вероятность дождя
        </p>
        <p className="info__value">
          {pop * 100} %
        </p>
      </li>
    </ul>
  );
};
export default MoreWeatherInfo;
