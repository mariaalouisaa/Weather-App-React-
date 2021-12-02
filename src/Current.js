import sun from "./images/sun.png";
import "./Current.css";

export default function Current(stats) {
  if (stats.data.data === undefined) {
    return (
      <div className="Current">
        <img src={sun} className="main-image rotate" alt="animated weather" />
        <div className="current-temp-items">
          <h1>--</h1>
          <h2>--°C </h2>
          <div>
            <button type="button" className="celciusButton buttonClicked">
              °C
            </button>
            <button type="button" className="farenButton buttonUnclicked">
              °F
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    console.log(stats.data);
    let cityInfo = {
      city: stats.data.data.name,
      temp: Math.round(stats.data.data.main.temp),
      country: stats.data.data.sys.country,
      description: stats.data.data.weather[0].description,
      icon: "",
    };

    return (
      <div className="Current">
        <img src={sun} className="main-image pulse" alt="animated weather" />
        <div className="current-temp-items">
          <h1>
            {cityInfo.city}
            <span className="smaller">, {cityInfo.country}</span>
          </h1>
          <p className="smaller">{cityInfo.description}</p>
          <h2>{cityInfo.temp}°</h2>
          <div>
            <button type="button" className="celciusButton buttonClicked">
              °C
            </button>
            <button type="button" className="farenButton buttonUnclicked">
              °F
            </button>
          </div>
        </div>
      </div>
    );
  }
}
