import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";
import Temperature from "./Temperature";

function App() {
  let weatherData = {
    city: "Asheville",
    temperature: 19,
    date: "Friday 10:00",
    description: "Partly Cloudy",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3208/3208756.png",
    humidity: 80,
    wind: 10,
  };

  return (
    <div class="container">
      <div class="weather-app-wrapper">
        <div class="weather-app">
          <div className="search">
            <div class="row">
              <Weather />
            </div>
          </div>
          <div class="overview">
            <h1 id="city"></h1>
            <ul>
              <li>
                Last updated: <span id="date">{weatherData.date}</span>
              </li>
              <li id="description">{weatherData.description}</li>
            </ul>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="clearfix weather-temperature">
                <img
                  src={weatherData.imgUrl}
                  alt="Clear"
                  id="icon"
                  class="float-left"
                />
                <Temperature temperature={weatherData.temperature} />
              </div>
            </div>
            <div class="col-6">
              <ul>
                <li>
                  Humidity: <span id="humidity">{weatherData.humidity}</span>%
                </li>
                <li>
                  Wind: <span id="wind">{weatherData.wind}</span> km/h
                </li>
              </ul>
            </div>
          </div>
          <div class="weather-forecast" id="forecast"></div>
        </div>
      </div>
      <small>
        <center>
          <a
            href="https://github.com/hartmandy/react-weather-app"
            target="_blank"
            alt="Link to Mandy Hartman's Github"
          >
            Open-source code
          </a>{" "}
          by Mandy Hartman
        </center>
      </small>
    </div>
  );
}

export default App;
