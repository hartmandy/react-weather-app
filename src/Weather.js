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
      <form onSubmit={handleSearch}>
        <input type="search" onChange={updateQuery} />
        <input type="submit" value="Search" />
      </form>
      <p>{message}</p>
    </div>
  );
}
