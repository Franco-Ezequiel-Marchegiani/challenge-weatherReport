import React from 'react';
import './Day.css';

function Day(props) {
  return (
    <div className='dayContainer'>
        <p className='titleDay'>{props.day}</p>
        <img className='imageDay' src={props.icon} alt="" />
        <div className='temperatureContainer'>
            <p className='temperature maxTemperature'>{props.maxTemp}°C</p>
            <p className='temperature minTemperature'>{props.minTemp}°C</p>
        </div>
    </div>
  );
}

export default Day;