import {connect} from "react-redux";
import Header from "../../components/weather_widget/Header";
import {allCountries, getWeatherByCity, searchCityByLocation, setWeatherData} from "../../store/weather/actions";
import {apiGetAllCity} from "../../services/Api";

const mapDispatchToProps = {
  setWeatherData,
  getWeatherByCity,
  searchCityByLocation,
  apiGetAllCity,
  allCountries
};

export default connect(state => state, mapDispatchToProps)(Header);
