import {connect} from 'react-redux'
import Weather from "../src/components/weather_widget/Index";
import {allCountries, getAll} from "../src/store/weather/actions";

const mapDispatchToProps = {
}

export default connect(state => state, mapDispatchToProps)(Weather);
