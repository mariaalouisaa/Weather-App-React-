import Clear from "./images/Clear.png";

import "./Forecast.css";

export default function Forecast() {
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
