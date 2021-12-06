import Clear from "./images/Clear.png";
import MainTemp from "./MainTemp";
import TimeAndDate from "./TimeAndDate";
import "./Current.css";
import Forecast from "./Forecast";

export default function Current(stats) {
  if (stats.data.data === undefined) {
    return (
      <div className="Current">
        <img src={Clear} className="main-image pulse" alt="sun" />
        <div className="current-temp-items">
          <h1 className="loader">⏳</h1>
          <div>
            <button type="button" className="celciusButton buttonClicked">
              °C
            </button>
            <button type="button" className="farenButton buttonUnclicked">
              °F
            </button>
          </div>
        </div>
        <TimeAndDate />
      </div>
    );
  } else {
    let cityInfo = {
      city: stats.data.data.name,
      temp: Math.round(stats.data.data.main.temp),
      country: stats.data.data.sys.country,
      description: stats.data.data.weather[0].description,
      icon: stats.data.data.weather[0].main,
      coordinates: stats.data.data.coord,
    };

    let image = `./images/${cityInfo.icon}.png`;

    return (
      <div className="Current">
        <div className="MainImage">
          <img src={image} className="main-image pulse" alt={image} />
        </div>
        <div className="current-temp-items">
          <h1>
            {cityInfo.city}
            <span className="smaller">, {cityInfo.country}</span>
          </h1>
          <p className="smaller">{cityInfo.description}</p>
          <MainTemp temp={cityInfo.temp} />
          <TimeAndDate />
          <Forecast coord={cityInfo.coordinates} />
        </div>
      </div>
    );
  }
}
