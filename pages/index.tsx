import {connect} from 'react-redux'
import Weather from "../src/components/weather_widget/Index";

const mapDispatchToProps = {
}

export default connect(state => state, mapDispatchToProps)(Weather);
