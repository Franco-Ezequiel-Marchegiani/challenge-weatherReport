import React from 'react';
import './Day.css';

function Day(props) {
  return (
    <div className='dayContainer'>
        <p>{props.day}</p>
        <img className='imageDay' src={props.icon} alt="" />
        <div className='temperatureContainer'>
            <p>{props.maxTemp}</p>
            <p>{props.minTemp}</p>
        </div>
    </div>
  );
}

export default Day;