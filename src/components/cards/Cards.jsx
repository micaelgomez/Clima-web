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
        <div className="cards-loading-wrapper">
          <h2 className="cards-loading-title">National and Local weather</h2>
          <p className="cards-loading-paragrap">
            The purpose of WeatherWeb is to practice frontend web development
            and also build a great tool to help you find the weather in your
            city or in any city you want!
          </p>
          <p>
            You can search for the city in the search bar, then a card with the
            information will be displayed.
          </p>
        </div>

        <div className="cards-loading-img">
          <h2>How is the weather in  Buenos Aires?</h2>
        </div>
      </div>
    );
  }
}
