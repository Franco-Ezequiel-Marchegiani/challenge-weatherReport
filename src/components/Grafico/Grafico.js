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
    const data = await fetch(`https://www.metaweather.com/api/location/468739/`);
    const climaJson =await data.json()
    console.log(climaJson.consolidated_weather);
    setClimaSemanal(climaJson.consolidated_weather)
  }
  console.log(climaSemanal);
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
            return <Day day={climaDia.applicable_date} icon={climaDia.weather_state_name} maxTemp={climaDia.max_temp} minTemp={climaDia.min_temp}/> 
          })}
          
        </div>
        <section>
          <h1 className='titleHighlights'>Today's Highlights</h1>
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