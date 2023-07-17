import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Weather({ setWeatherData }) {
  const [query, setQuery] = useState("Asheville");

  useEffect(() => {
    handleSearch();
  }, []); // This empty dependency array ensures this hook only runs on mount

  function handleSearch(event) {
    if (event) {
      event.preventDefault();
    }

    if (query) {
      const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
      const units = "metric";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${units}`;

      axios.get(apiUrl).then(showTemperature);
    }
  }

  function updateQuery(event) {
    setQuery(event.target.value);
  }

  function showTemperature(response) {
    const timezoneOffsetSeconds = response.data.timezone;
    const localTimestamp = (response.data.dt + timezoneOffsetSeconds) * 1000;
    setWeatherData({
      city: response.data.name,
      date: new Date(localTimestamp),
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  return (
    <div>
      <form onSubmit={handleSearch} id="search">
        <input
          type="search"
          placeholder="Search a city"
          className="w-auto px-4 py-2 mr-2 border-2 border-slate-100 rounded-lg focus:outline-none mb-3 text-black"
          onChange={updateQuery}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-white text-black rounded-lg shadow-md hover:text-underline"
        >
          Search
        </button>
      </form>
    </div>
  );
}
