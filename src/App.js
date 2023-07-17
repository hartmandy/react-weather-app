import React, { useState } from "react";
import "./App.css";
import Weather from "./Weather";
import Temperature from "./Temperature";
import DateTime from "./DateTime";

function App() {
  const [weatherData, setWeatherData] = useState({
    city: "Asheville",
    temperature: 19,
  });

  return (
    <div className="container mx-auto">
      <div className="container max-w-xl mt-40">
        <div className="rounded-xl border-slate-200 border-2 p-10 shadow-sm bg-blue-500 text-white tracking-wider">
          <div className="search">
            <div className="row-span-3">
              <Weather setWeatherData={setWeatherData} />
            </div>
          </div>

          <div className="col-start-1 mb-10 mt-2 text-transform: capitalize">
            <h1 id="city" className="font-bold text-3xl leading-8 mb-3">
              {weatherData.city}
            </h1>
            <DateTime date={weatherData.date} />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="weather-temperature">
              <Temperature temperature={weatherData.temperature} />
            </div>
            <div>
              {weatherData.icon && (
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.icon}.png`}
                  alt={weatherData.description}
                  style={{ width: "80px", height: "80px" }}
                />
              )}
            </div>
            <div>
              <p className="text-transform: capitalize">
                {weatherData.description}
              </p>
              <p>Humidity: {weatherData.humidity}%</p>
              <p>Wind: {weatherData.wind} km/h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
