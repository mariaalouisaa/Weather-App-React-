import React, { useState } from "react";

export default function MainTemp(props) {
  const [unit, setUnit] = useState("celcius");

  function showFaren(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div className="MainTemp">
        <h2>{props.temp}°</h2>
        <div>
          <button type="button" className="buttonClicked">
            °C
          </button>
          <button type="button" className="buttonUnclicked" onClick={showFaren}>
            °F
          </button>
        </div>
      </div>
    );
  } else {
    let fahrenheit = Math.round((9 / 5) * props.temp + 32);
    return (
      <div className="MainTemp">
        <h2>{fahrenheit}°</h2>
        <div>
          <button
            type="button"
            className="buttonUnclicked"
            onClick={showCelcius}
          >
            °C
          </button>
          <button type="button" className="buttonClicked">
            °F
          </button>
        </div>
      </div>
    );
  }
}
