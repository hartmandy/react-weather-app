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
    <div className="container mx-auto">
      <div className="container max-w-xl mt-40">
        <div className="rounded border-slate-200 border-2 p-10 shadow-sm">
          <div className="search">
            <div className="row-span-3">
              <Weather />
            </div>
          </div>

          <div className=" col-span-1 mb-10">
            <h1 mb-0 id="city"></h1>
            <ul className="p-0 m-0 text-slate-500">
              <li>
                Last updated: <span id="date">{weatherData.date}</span>
              </li>
              <li>{weatherData.description}</li>
            </ul>
          </div>

          <div className="grid">
            <div className="col-start-1">
              <div className="clearfix weather-temperature">
                <img
                  src={weatherData.imgUrl}
                  alt="Clear"
                  id="icon"
                  class="float-left mr-1"
                  height={64}
                  width={64}
                />
                <Temperature temperature={weatherData.temperature} />
              </div>
            </div>

            <div className="col-start-3">
              <ul className="p-0 m-0 text-slate-500">
                <li>
                  Humidity: <span id="humidity">{weatherData.humidity}</span>%
                </li>
                <li>
                  Wind: <span id="wind">{weatherData.wind}</span> km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-xs mt-1 font-mono text-center">
        <a
          href="https://github.com/hartmandy/react-weather-app"
          target="_blank"
          alt="Link to Mandy Hartman's Github"
          className="no-underline hover:underline text-slate-500"
        >
          Open-source code
        </a>{" "}
        by Mandy Hartman
      </footer>
    </div>
  );
}

export default App;
