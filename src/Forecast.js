import ForecastDay from "./ForecastDay";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord.lon]);

  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="five-day-container">
        {forecast.map((day, index) => {
          if (index < 5) {
            return (
              <div key={index} className="column">
                <ForecastDay data={day} />
              </div>
            );
          } else return null;
        })}
      </div>
    );
  } else {
    let apiKey = "a48984de2e1866778622568cbcb97ff1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coord.lat}&lon=${props.coord.lon}&exclude=minutely,alerts&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayForecast);
    return null;
  }
}
