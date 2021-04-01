import MoreWeatherInfo from "./MoreWeatherInfo";
import React from "react";

interface FooterProps {
    weatherData: {
        currentWeather:{
            current:{
                temp: string,
                pressure: string,
                wind_deg: string,
                wind_speed: string,
                humidity: string
            },
            daily: [any] | undefined,
        }
    }
}

const Footer:React.FunctionComponent<FooterProps> = ({weatherData}) => {
  const {currentWeather} = weatherData;
  const {current, daily} = currentWeather || {};
  const pop = daily?.shift()?.pop as number;
  //@ts-ignore
  const {temp, pressure, wind_deg, wind_speed, humidity} = current || {};
  return (
    <footer className="weather-footer">
      <div className="weather-footer__container">
        {temp &&
                <MoreWeatherInfo
                  windSpeed={wind_speed}
                  windDeg={wind_deg}
                  pressure={pressure}
                  humidity={humidity}
                  pop={pop}
                />
        }
      </div>
    </footer>
  );
};

export default Footer;
