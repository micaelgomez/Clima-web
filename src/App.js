import React, {useState} from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Cards from './components/cards/Cards';

export default function App() {
                                              //CREAMOS UN ESTADO USANDO HOOKS
                                                //cities= Estado --> Guarda valores--> Puede tener el nombre que yo quiera.
                                                //setCities= Funcion que permite actualizar el estado --> Por convencion set + nombre estado.
                                                //useState=  Valor inicial del estado.
  const[cities,setCities] = useState([])

                                            //Funcion que me permite buscar ciudades y sus climas --> Mediante Api externa.
                                              //Esta funcion se crea en app para que se pueda ejecutar-->NO LA EJECUTA APP--> La ejecuta searchBar.
  function onSearch(ciudad) {
    //Acá habría que hacer el llamado a la API para obtener los datos de la ciudad.
    const apiKey = '4ae2636d8dfbdc3044bede63951a019b' 
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
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
            longitud: recurso.coord.lon
          };
                                                    //setCities permite actualizar el estado.
                                                      //-->Para modificar el estado, teniendo en cuenta el estado anterior-->FUNCION() 
                                                      //-->Usa spread operator.
                                                      //-->En este caso--> Agrega una ciudad al estado inicial.
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
    }
    //Funcion que al tocar el boton-->Se cierre la card
    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id !== id));
    }
    
    return (
      <div className="App">
        <Nav onSearch = {onSearch}/> {/*Nav--> renderiza el componente   onSearch--> Pasa la funcion a nav como propiedad */}
        <h1>The Weather Channel  </h1>
        <Cards cities={cities} onClose ={onClose} /> {/*Card-->Renderiza el componente  
                                                        cities-->Pasa el valor como propiedad  
                                                          onClose--> Pasa la funcion a Cards como propiedad */
                                                          }
      </div>
    );
  
  }

