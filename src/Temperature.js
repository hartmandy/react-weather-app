import React, { useState } from "react";

export default function Temperature(props) {
  let [temperature, setTemperature] = useState(props.temperature);
  function showFahrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round((props.temperature * 9) / 5 + 32));
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemperature(props.temperature);
  }

  return (
    <div class="temps weather-temperature">
      <h2>{temperature}</h2>
      <a href="/" onClick={showCelsius}>
        °C
      </a>{" "}
      |{" "}
      <a href="" onClick={showFahrenheit}>
        °F
      </a>
    </div>
  );
}
