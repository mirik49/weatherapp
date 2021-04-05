import {connect} from "react-redux";
import Header from "../../components/weather_widget/Header";
import {GetRuCities, getWeatherByCity, searchCityByLocation, setWeatherData} from "../../store/weather/actions";

const mapDispatchToProps = {
  setWeatherData,
  getWeatherByCity,
  searchCityByLocation,
  GetRuCities
};

export default connect(state => state, mapDispatchToProps)(Header);
