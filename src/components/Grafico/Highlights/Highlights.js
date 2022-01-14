import React, {useState, useEffect} from 'react';
import './Highlights.css';
import { ProgressBar } from 'react-bootstrap';

function Highlights({idSeleccionadoPorUsuario}) {
  const [climaSemanal, setClimaSemanal] = useState([""]);
  const [cargando, setCargando] = useState(true);
  console.log(idSeleccionadoPorUsuario);
  useEffect( () =>{
      apiDatos()
  },[idSeleccionadoPorUsuario]);
  const apiDatos = async() =>{
    //Json con los datos
    const data = await fetch(`/api/location/${idSeleccionadoPorUsuario}/`);
    const climaJson =await data.json()
    setClimaSemanal(climaJson.consolidated_weather)
    setCargando(false)
  };
  //Condicional en caso de que la información aún no haya aparecido en pantalla
  if(cargando) return <h1>Cargando...</h1>
  //Bootstrap barra Humedad
  const now = climaSemanal[0].humidity;
  const progressInstance = <ProgressBar now={now} className='progressBar' />;
  return (
    <div>
      {
        <section className='hightLigtsContainer'>
            <div className='hightLightItem windStatus'>
                <p>Estado del viento</p>
                <h1>{climaSemanal[0].wind_speed.toFixed(1)} <span>mph</span></h1>
                <div className='containerIconHighLight'><i className="fas fa-location-arrow"></i><p>WSW</p></div>
            </div>
            <div className='hightLightItem humidity'>
                <p>Humedad</p>
                <h1>{climaSemanal[0].humidity} <span>%</span></h1>
                  <div className='containerBarProgress'>
                      <p>0</p>
                      <p>50</p>
                      <p>100</p>
                  </div>
                {progressInstance}
                  <div className='containerBarProgressPorcentaje'>
                      <p>%</p>
                  </div>
            </div>
            <div className='hightLightItem visibility'>
                <p>Visibilidad</p>
                <h1>{climaSemanal[0].visibility.toFixed(1)} <span>Millas</span></h1>
            </div>
            <div className='hightLightItem airPressure'>
                <p>Presión del aire</p>
                <h1>{climaSemanal[0].air_pressure.toFixed(0)} <span>mb</span></h1>
            </div>
      </section>
      }
    </div>
  );
}
export default Highlights;