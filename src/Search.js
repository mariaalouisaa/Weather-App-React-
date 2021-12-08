import React, { useState } from "react";
import axios from "axios";
import Current from "./Current";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [stats, setStats] = useState("");

  function handleSubmit(event) {
    let apiFront = "https://api.openweathermap.org/data/2.5/weather?";
    let apiKey = "a48984de2e1866778622568cbcb97ff1";
    let url = `${apiFront}q=${city}&appid=${apiKey}&units=metric`;
    event.preventDefault();
    axios.get(url).then(showStats);
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  function showStats(response) {
    setStats(response);
  }

  function displayGpsStats(response) {
    setStats(response);
  }

  function callGpsApi(position) {
    let apiFront = "https://api.openweathermap.org/data/2.5/weather?";
    let apiKey = "a48984de2e1866778622568cbcb97ff1";
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    axios
      .get(`${apiFront}lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`)
      .then(displayGpsStats);
  }

  function getCurrent() {
    navigator.geolocation.getCurrentPosition(callGpsApi);
  }

  getCurrent();

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
