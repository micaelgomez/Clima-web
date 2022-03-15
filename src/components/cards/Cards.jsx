import React from "react";
import "./cards.css";
import Card from "../card/Card";

export default function Cards({ cities, onClose }) {
  if (cities.length) {
    return (
      <div className="cards">
        {cities.map((c) => (
          <Card
            key={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="cards-loading">
        <h1 className="cards-loading-title">Find you cities weather</h1>
        <p className="cards-loading-paragrap">
          When you search for a city name in the WeatherApp, you will get a card
          with weather information. Also, by clicking on the name of the city
          you will be able to get much more information about the weather in the
          city. And remember that you can only search a maximum of 6 cities.
        </p>
      </div>
    );
  }
}
