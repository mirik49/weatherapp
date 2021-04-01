import React, {useEffect, useState} from "react";

interface HeaderProps {
    weatherData: {
        degreesType: string,
        currentCity: string,
        isShowSearchBar: string,
        inputError: string,
        currentWeather: {
            current: {
                temp: {}
            }
        }
    },
    setWeatherData: (string, any) => void,
    searchCityByLocation: () => void,
    getWeatherByCity: (string) => void,
}

const Header: React.FunctionComponent<HeaderProps> = (
  {weatherData, setWeatherData, searchCityByLocation, getWeatherByCity}
) => {
  const {degreesType, currentCity, isShowSearchBar, inputError, currentWeather} = weatherData;
  const {current} = currentWeather || {};
  const {temp} = current || {};
  const [city, setCity] = useState<string>("");

  const [windowWidth, setWindowWidth] =
        useState<number>(typeof window !== "undefined" ? window.screen.width : 0);

  useEffect(() => {
    const setCurrentWindowWidth = () => setWindowWidth(window.screen.width);
    window.addEventListener("resize", () => setCurrentWindowWidth());

    return () => {
      window.removeEventListener("resize", setCurrentWindowWidth);
    };
  }, []);

  const degreeSwitch = () => (
    <div className="degree-switch">
      <button
        onClick={() => setWeatherData("degreesType", "C")}
        className={`degree-switch__btn ${degreesType === "C" ? "degree-switch__btn--active" : ""}`}
      ><span>C</span>
      </button>
      <button
        onClick={() => setWeatherData("degreesType", "F")}
        className={`degree-switch__btn ${degreesType === "F" ? "degree-switch__btn--active" : ""}`}
      >F
      </button>
    </div>
  );

  const checkCity = () => {
    if (city.length < 2) {
      setWeatherData("inputError", "Минимум 2 буквы");
    } else {
      getWeatherByCity(city);
    }
  };

  return (
    <>
      <header className="weather-header">
        <div className="weather-header__container">
          {!isShowSearchBar ?
            <div className="current">
              <div className="current__city-wr">
                <p className="current__city">
                  {currentCity}
                </p>
                {windowWidth <= 1024 && degreeSwitch()}
              </div>
              <div className="current__btn-wr">
                <button className="current__btn current__btn-change"
                  onClick={() => setWeatherData("isShowSearchBar", true)}
                >
                  {temp ? "Сменить" : "Выбрать"} город
                </button>
                <div className="current__location-wr">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M22.489 5.83819L5.23896 16.6268L13.728 18.2769L18.2146 25.7637L22.489
                                           5.83819Z"
                      fill="white" fillOpacity="0.4"/>
                  </svg>
                  <button className="current__btn current__btn-location"
                    onClick={() => searchCityByLocation()}
                  >
                                        Мое местоположение
                  </button>
                </div>
              </div>
            </div>
            :
            <div className="search-bar">
              <div className="search-bar__input-wr">
                <input type="text"
                  className={"search-bar__input " + (inputError ? "search-bar__input--error" : "")}
                  onChange={(event => setCity(event.target.value))}
                  value={city}
                  onFocus={() => setWeatherData("inputError", "")}
                />
                <button className="search-bar__submit" onClick={() => checkCity()}>Ok
                </button>
              </div>
              {inputError && <p className="search-bar__error">{inputError}</p>}
            </div>}
          {windowWidth >= 1024 && degreeSwitch()}
        </div>
      </header>
    </>
  );
};

export default Header;
