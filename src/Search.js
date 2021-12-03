import React, { useState } from "react";
import axios from "axios";
import Current from "./Current";
import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState("");
  const [stats, setStats] = useState("");

  function handleSubmit(event) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a48984de2e1866778622568cbcb97ff1&units=metric`;
    event.preventDefault();
    axios.get(url).then(showStats);
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  function showStats(response) {
    setStats(response);
  }

  function getCurrent(event) {
    event.preventDefault();
    console.log("clicked");
  }

  return (
    <div>
      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="   Change city"
            className="search-bar"
            autoFocus="on"
            onChange={getCity}
          />
        </form>
        <div className="current-link" onClick={getCurrent}>
          Current location{" "}
          <span role="img" aria-label="pin">
            📍
          </span>{" "}
        </div>
      </div>
      <Current data={stats} />
    </div>
  );
}
