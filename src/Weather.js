import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const [temperature, setTemperature] = useState("");

  function handleSearch(event) {
    event.preventDefault();

    if (query) {
      let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
      let units = "metric";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${units}`;

      axios.get(apiUrl).then(showTemperature);
    }
  }

  function updateQuery(event) {
    setQuery(event.target.value);
  }

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
    setMessage(`It is currently ${Math.round(temperature)}°C in ${query}`);
  }

  return (
    <div>
      <form onSubmit={handleSearch} id="search">
        <input
          type="search"
          placeholder="Search a city"
          className="w-75 px-4 py-2 mr-2 border-2 border-slate-300 rounded-lg focus:outline-none mb-3"
          onChange={updateQuery}
        />
        <button
          type="button"
          className="px-4 py-2 bg-slate-500 text-white rounded-lg shadow-md hover:bg-slate-700"
        >
          Search
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
}
