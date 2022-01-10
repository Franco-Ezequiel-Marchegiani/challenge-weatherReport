import React, {useState, useEffect} from 'react';
import Day from './Day/Day';
import './Grafico.css';
import IconoEjemplo from '../../Images/Clear.png'
import Highlights from './Highlights/Highlights';
import Footer from './Footer/Footer';

function Grafico() {
  const [clima, setClima] = useState();

  useEffect( () =>{
      console.log("UseEffect");
      apiDatos()
  },[])
  const apiDatos = async() =>{
    //Json con los datos de Buenos Aires
    const data = await fetch(`https://www.metaweather.com/api/location/468739/`);
    const climaJson =await data.json()
    console.log(climaJson);
  }
  /* 
  A TENER EN CUENTA EN LA API DEL CLIMA:
Este link es la barra de búsqueda para buscar por localidad:
https://www.metaweather.com/api/location/search/?query=Buenos%20Aires

De ahí, se obtiene un número, que está en el "woeid".
Con ese número, se coloca:
https://www.metaweather.com/api/location/{acá}/

Y ahí se obtiene los datos del clima según la locación


Para obtener los datos del "Today's Hightlights", se tiene que extraer del PRIMER item del array
Se obtiene un array (que es la información de los próximos 6 días)
 */
  return (
    <section className='graficoContainerAll'>
      <main className='graficoContainerContent'>
        <div className='containerCyF'>
          <p className='containerCGrafico'>°C</p>
          <p className='containerFGrafico'>°F</p>
        </div>
        <div className='daysContainer'>
          <Day day="Tomorrow" icon={IconoEjemplo} maxTemp="16" minTemp="11"/> 
          <Day day="Su, 7 Jun" icon={IconoEjemplo} maxTemp="16" minTemp="11"/> 
          <Day day="Mon, 8 Jun" icon={IconoEjemplo} maxTemp="16" minTemp="11"/> 
          <Day day="Tue, 9 Jun" icon={IconoEjemplo} maxTemp="16" minTemp="11"/>       
          <Day day="Wed, 10 Jun" icon={IconoEjemplo} maxTemp="16" minTemp="11"/> 
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