import React, {useState, useEffect} from 'react';
import './Highlights.css';
import { ProgressBar } from 'react-bootstrap';

function Highlights() {

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

  const now = 84;

  const progressInstance = <ProgressBar now={now} className='progressBar' />;

  return (
    <section className='hightLigtsContainer'>
      <div className='hightLightItem windStatus'>
        <p>Estado del viento</p>
        <h1>7 <span>mph</span></h1>
        <div className='containerIconHighLight'><i className="fas fa-location-arrow"></i><p>WSW</p></div>
      </div>
      <div className='hightLightItem humidity'>
        <p>Humedad</p>
        <h1>84 <span>%</span></h1>
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
        <h1>6,4 <span>Millas</span></h1>
      </div>
      <div className='hightLightItem airPressure'>
        <p>Presión del aire</p>
        <h1>998 <span>mb</span></h1>
      </div>
    </section>
  );
}

export default Highlights;