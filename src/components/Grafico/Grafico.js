import React, {useState, useEffect} from 'react';
import Day from './Day/Day';
import './Grafico.css';
import IconoEjemplo from '../../Images/Clear.png'
import Highlights from './Highlights/Highlights';
import Footer from './Footer/Footer';

function Grafico() {
  const [climaSemanal, setClimaSemanal] = useState([]);

  useEffect( () =>{
      console.log("UseEffect");
      apiDatos()
  },[])
  const apiDatos = async() =>{
    //Json con los datos de Buenos Aires
    const data = await fetch(`/api/location/468739/`);
    const climaJson =await data.json()
    console.log(climaJson.consolidated_weather);
    setClimaSemanal(climaJson.consolidated_weather)
  }
  console.log(climaSemanal);

  let optionsDateConfig = {day:"numeric", month: "long", weekday:"long"}
  return (
    <section className='graficoContainerAll'>
      <main className='graficoContainerContent'>
        <div className='containerCyF'>
          <p className='containerCGrafico'>°C</p>
          <p className='containerFGrafico'>°F</p>
        </div>
        <div className='daysContainer'>
        {/*  {climaSemanal.map(tiempoDia =>{
          <Day day="Tomorrow" icon={IconoEjemplo} maxTemp="16" minTemp="11"/> 
        })}  */}
        { climaSemanal.length === 0 && <p>cargando...</p> }
          {climaSemanal.map( (climaDia, i) =>{
            const fechaActualizada = new Date(climaDia.applicable_date);
            const optionsDate = {weekday: 'long', month: 'long', day: 'numeric'}
            return <Day key={climaDia.id} day={fechaActualizada.toLocaleDateString("es-ES", optionsDate)} icon={climaDia.weather_state_abbr} maxTemp={climaDia.max_temp.toFixed(1)} minTemp={climaDia.min_temp.toFixed(1)}/> 
          })}
          
        </div>
        <section>
          <h1 className='titleHighlights'>Novedades del día</h1>
          <div>
            <Highlights/>
          </div>
        </section>
      </main>
      <Footer/>
    </section>
  );
}

export default Grafico;