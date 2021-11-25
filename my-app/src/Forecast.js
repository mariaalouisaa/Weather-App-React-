import sun from "./images/sun.png";
import rain from "./images/rain.png";
import cloud from "./images/cloud.png";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="five-day-container">
      <div className="column">
        <div className="weekly-head day-1">Mon</div>
        <div className="weekly-img img-1">
          <img src={sun} alt="sun" />
        </div>
        <div className="weekly-low low-1">4°C</div>
        <div className="weekly-high high-1">16°C</div>
      </div>
      <div className="column">
        <div className="weekly-head day-2">Tue</div>
        <div className="weekly-img img-2">
          <img src={rain} alt="rain" />
        </div>
        <div className="weekly-low low-2">2°C</div>
        <div className="weekly-high high-2">15°C</div>
      </div>
      <div className="column">
        <div className="weekly-head day-3">Wed</div>
        <div className="weekly-img img-3">
          <img src={cloud} alt="cloud" />
        </div>
        <div className="weekly-low low-3">5°C</div>
        <div className="weekly-high high-3">14°C</div>
      </div>
      <div className="column">
        <div className="weekly-head day-4">Thur</div>
        <div className="weekly-img img-4">
          <img src={rain} alt="rain" />
        </div>
        <div className="weekly-low low-4">3°C</div>
        <div className="weekly-high high-4">16°C</div>
      </div>
      <div className="column">
        <div className="weekly-head day-5">Fri</div>
        <div className="weekly-img img-5">
          <img src={sun} alt="sun" />
        </div>
        <div class="weekly-low low-5">4°C</div>
        <div class="weekly-high high-5">11°C</div>
      </div>
    </div>
  );
}
