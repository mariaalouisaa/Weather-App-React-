import sun from "./images/sun.png";
import "./Current.css";

export default function Current() {
  let cityInfo = {
    city: "London",
    time: "12:00",
    date: "05/12/21",
  };

  return (
    <div className="Current">
      <img src={sun} className="main-image rotate" alt="animated weather" />
      <div className="current-temp-items">
        <h1>{cityInfo.city}</h1>
        <h2>
          <span role="figure" aria-label="loading">
            ⏳
          </span>
        </h2>
        <div>
          <button type="button" className="celciusButton buttonClicked">
            °C
          </button>
          <button type="button" className="farenButton buttonUnclicked">
            °F
          </button>
        </div>

        <h3>{cityInfo.time}</h3>
        <h4>{cityInfo.date}</h4>
      </div>
    </div>
  );
}
