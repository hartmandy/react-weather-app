import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function Weather({ setWeatherData }) {
  const [query, setQuery] = useState("Asheville");
  const [input, setInput] = useState("Asheville");

  const showTemperature = useCallback(
    (response) => {
      const timezoneOffset = response.data.timezone * 1000; // convert seconds to milliseconds
      const localTimestamp = new Date().getTime() + timezoneOffset;
      const localDate = new Date(localTimestamp);

      setWeatherData({
        city: response.data.name,
        date: localDate,
        temperature: Math.round(response.data.main.temp),
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        wind: response.data.wind.speed,
        icon: response.data.weather[0].icon,
      });
    },
    [setWeatherData]
  );

  const handleSearch = useCallback(
    (event) => {
      event.preventDefault();
      setQuery(input);
    },
    [input]
  );

  useEffect(() => {
    if (query) {
      const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
      const units = "metric";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${units}`;

      axios.get(apiUrl).then(showTemperature);
    }
  }, [query, showTemperature]);

  function updateInput(event) {
    setInput(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSearch} id="search">
        <input
          type="search"
          placeholder="Search a city"
          className="w-auto px-4 py-2 mr-2 border-2 border-slate-100 rounded-lg focus:outline-none mb-3 text-black"
          onChange={updateInput}
          value={input}
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
