import React from "react";

import SearchBar from "../searchBar/SearchBar";
import "./nav.css";

//NAV RECIBE UNA PROPIEDAD--> onSearch-->La pasa al componente SearchBar para que la pueda ejecutar.
//-->Hace destructuring sacandole onSearch de props-->props es un objeto.
function Nav({ onSearch }) {
  return (
    <nav>
      <div className="flex mar">
        <img src="assets/logoHenry.png" alt="Logo Henry" />
        <span>Weather </span>
      </div>
      <div className="flex search">
        <SearchBar onSearch={onSearch} />{" "}
        {/*OnSearch--> Pasa la funcion a SearchBar como propiedad */}
      </div>
    </nav>
  );
}

export default Nav;
