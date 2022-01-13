import React from 'react';
import './Day.css';
function Day(props) {
  const nombreImagen = "/static/img/weather/png/"
  const extension = ".png"
  return (
    <div className='dayContainer'>
        <p className='titleDay'>{props.day}</p>
        <img className='imageDay' src={nombreImagen + props.icon + extension} alt="adsqweqw" />
        <div className='temperatureContainer'>
            <p className='temperature maxTemperature'>{props.maxTemp}°C</p>
            <p className='temperature minTemperature'>{props.minTemp}°C</p>
        </div>
    </div>
  );
}

export default Day;