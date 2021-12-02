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
    console.log(stats.data.data.dt * 1000);
    let cityInfo = {
      city: stats.data.data.name,
      temp: Math.round(stats.data.data.main.temp),
      time: "12:00",
    };

    return (
      <div className="Current">
        <img src={sun} className="main-image rotate" alt="animated weather" />
        <div className="current-temp-items">
          <h1>{cityInfo.city}</h1>
          <h2>{cityInfo.temp}°C </h2>
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
