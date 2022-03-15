import React from "react";
import "./cards.css";
import Card from "../card/Card"

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
    return <div></div>;
  }
}
