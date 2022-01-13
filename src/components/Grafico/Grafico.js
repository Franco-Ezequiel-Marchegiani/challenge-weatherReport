import React, {useState, useEffect} from 'react';
import Day from './Day/Day';
import './Grafico.css';
import Highlights from './Highlights/Highlights';
import Footer from './Footer/Footer';

function Grafico(props) {
  const [climaSemanal, setClimaSemanal] = useState([]);
  const [funcionPrueba, setFuncionPrueba] =useState();
  const [refresh, setRefresh] =useState(0);
  useEffect(() => {
    const {pasajeVariableConId} = props;
    console.log(pasajeVariableConId);
  }, [refresh]);
  const refreshData = () =>{
    setRefresh(refresh + 1)
  }
  /* Para recibir el número del sidebar, se pasa mediante props
  El cual se almacena en una variable y esa variable va a la URL de la API */
  useEffect( () =>{
      apiDatos()
  },[])
  const apiDatos = async() =>{
    //Json con los datos de Buenos Aires
    const data = await fetch(`/api/location/468739/`);
    const climaJson =await data.json()
    setClimaSemanal(climaJson.consolidated_weather)
  }

  return (
    <section className='graficoContainerAll'>
      <main className='graficoContainerContent'>
        <div className='containerCyF'>
          <div>
            <button onClick={refreshData}>Refrescar</button>
          </div>
          <p className='containerCGrafico'>°C</p>
          <p className='containerFGrafico'>°F</p>
        </div>
        <div className='daysContainer'>
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