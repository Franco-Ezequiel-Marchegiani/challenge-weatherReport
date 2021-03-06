import React, {useState, useEffect} from 'react';
import './Grafico.css';
import Day from './Day/Day';
import Highlights from './Highlights/Highlights';
import Footer from './Footer/Footer';
function Grafico({idSeleccionadoPorUsuario, idiomaPagina}) {
  const [climaSemanal, setClimaSemanal] = useState([]);
  useEffect( () =>{
      apiDatos()
  },[idSeleccionadoPorUsuario])
  const apiDatos = async() =>{
    //Json con los datos de Buenos Aires
    const data = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${idSeleccionadoPorUsuario}/`,{
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Content-type": "application/json; charset=UTF-8"
      }});
    const climaJson =await data.json()
    setClimaSemanal(climaJson.consolidated_weather)
  }
  return (
    <section className='graficoContainerAll'>
        <main className='graficoContainerContent'>
            <div className='containerCyF'>
                <p className='containerCGrafico'>°C</p>
                <p className='containerFGrafico'>°F</p>
            </div>
            <div className='daysContainer'>
                { climaSemanal.length === 0 && <p>cargando...</p> }
                  {climaSemanal.map( (climaDia, i) =>{
                    const fechaActualizada = new Date(climaDia.applicable_date);
                    const optionsDate = {weekday: 'long', month: 'long', day: 'numeric'}
                    return(
                      idiomaPagina === "spanish" ? 
                      <Day key={climaDia.id} day={fechaActualizada.toLocaleDateString("es-ES", optionsDate)} icon={climaDia.weather_state_abbr} maxTemp={climaDia.max_temp.toFixed(1)} minTemp={climaDia.min_temp.toFixed(1)}/> 
                      : 
                      <Day key={climaDia.id} day={fechaActualizada.toLocaleDateString("en-EN", optionsDate)} icon={climaDia.weather_state_abbr} maxTemp={climaDia.max_temp.toFixed(1)} minTemp={climaDia.min_temp.toFixed(1)}/>
                    ) 
                  })}
            </div>
            <section>
                {idiomaPagina === "spanish" ? 
                <h1 className='titleHighlights'>Novedades del día</h1> 
                : 
                <h1 className='titleHighlights'>Today's Highlights</h1> }
                <div>
                  <Highlights idSeleccionadoPorUsuario={idSeleccionadoPorUsuario} idiomaPagina={idiomaPagina}/>
                </div>
            </section>
        </main>
        <Footer idiomaPagina={idiomaPagina}/>
    </section>
  );
}
export default Grafico;