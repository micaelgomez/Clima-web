import React, { useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Cards from "./components/cards/Cards";
import { Footer } from "./components/footer/Footer";
const { React_App_API_KEY, React_App_API_KEY_2 } = process.env;

export default function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${React_App_API_KEY_2}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };

          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} /> <h1>The Weather Channel </h1>
      <Cards cities={cities} onClose={onClose} /> <Footer />
    </div>
  );
}
