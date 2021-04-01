import {connect} from "react-redux";
import Header from "../../components/weather_widget/Header";
import {getWeatherByCity, searchCityByLocation, setWeatherData} from "../../store/weather/actions";

const mapDispatchToProps = {
  setWeatherData,
  getWeatherByCity,
  searchCityByLocation
};

export default connect(state => state, mapDispatchToProps)(Header);
