import React, { useState } from "react";
import "./searchBar.css";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ onSearch }) {
  //CREAMOS UN ESTADO
  const [ciudad, setCiudad] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(ciudad);
        setCiudad("")
      }}
    >
      <input
        //Cuando haya un cambio--> agregar el valor al estado.
        onChange={(e) => setCiudad(e.target.value)}
        value={ciudad}
        type="text"
        placeholder="City..."
      />
      <button id="btn" type="submit" value="Agregar">
        <SearchIcon></SearchIcon>
        Search
      </button>
    </form>
  );
}
