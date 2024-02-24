import "./App.css";
import Weatherbox from "./components/Weatherbox";
import Btnbox from "./components/Btnbox";
import { useEffect, useState } from "react";
function App() {
  const [weatherdata, setWeatherdata] = useState(null);
  const [city, setCity] = useState("");
  const APIkey = "12aec5786d6f890c27ae1b2e3bee1076";
  let locals = ["Soual", "Golacir", "Dadaha", "Guamka"];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lon = position.coords.longitude;
      let lat = position.coords.latitude;
      getLocationweather(lon, lat);
    });
  };

  const getLocationweather = async (lon, lat) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setWeatherdata(data);
  };

  const getWeatherByCity = async (cityname) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=metric`;

    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setWeatherdata(data);
  };

  useEffect(() => {
    if (city == "") {
      getLocationweather();
    } else {
      getWeatherByCity(city);
    }
  }, [city]);

  return (
    <div>
      <div className="main">
        <Weatherbox weatherdata={weatherdata} />
      </div>

      <div>
        <Btnbox
          locals={locals}
          setCity={setCity}
          getCurrentLocation={getCurrentLocation}
        />
      </div>
    </div>
  );
}

export default App;
