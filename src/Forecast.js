import Clear from "./images/Clear.png";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  let apiKey = "a48984de2e1866778622568cbcb97ff1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coord.lat}&lon=${props.coord.lon}&exclude=minutely,alerts&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayForecast);

  function displayForecast(response) {
    console.log(response);
  }
  return (
    <div className="five-day-container">
      <div className="column">
        <div className="weekly-head day-1">Mon</div>
        <div className="weekly-img img-1">
          <img src={Clear} alt="Clear" />
        </div>
        <div className="weekly-low low-1">14°</div>
        <div className="weekly-high high-1">6°</div>
      </div>
    </div>
  );
}
