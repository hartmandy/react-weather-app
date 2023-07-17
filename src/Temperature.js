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
    <div className="flex justify-center space-x-1 text-xl text-slate-500">
      <h2>{temperature}</h2>
      <a
        href="/"
        className="hover:text-slate-700 hover:underline cursor-pointer"
        onClick={showCelsius}
      >
        °C
      </a>
      <span>|</span>
      <a
        href="#"
        className="hover:text-slate-700 hover:underline cursor-pointer"
        onClick={showFahrenheit}
      >
        °F
      </a>
    </div>
  );
}
