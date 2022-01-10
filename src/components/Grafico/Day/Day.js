import React from 'react';
import './Day.css';
import Name from '../../../Images/Hail.png' 
function Day(props) {
  //{props.icon}
  // /static/media/Clear.6e4f36b6f663ff2d4d6a.png
  const nombreImagen = "../../../Images/"
  const extension = ".png"
  return (
    <div className='dayContainer'>
        <p className='titleDay'>{props.day}</p>
        <img className='imageDay' src={Name} alt="adsqweqw" />
        <div className='temperatureContainer'>
            <p className='temperature maxTemperature'>{props.maxTemp}°C</p>
            <p className='temperature minTemperature'>{props.minTemp}°C</p>
        </div>
    </div>
  );
}

export default Day;