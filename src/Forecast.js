import ForecastDay from "./ForecastDay";
import axios from "axios";
import React, { useState } from "react";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="five-day-container">
        <div className="column">
          <ForecastDay data={forecast[0]} />
        </div>
        <div className="column">
          <ForecastDay data={forecast[1]} />
        </div>
        <div className="column">
          <ForecastDay data={forecast[2]} />
        </div>
        <div className="column">
          <ForecastDay data={forecast[3]} />
        </div>
        <div className="column">
          <ForecastDay data={forecast[4]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "a48984de2e1866778622568cbcb97ff1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coord.lat}&lon=${props.coord.lon}&exclude=minutely,alerts&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayForecast);
    return null;
  }
}
