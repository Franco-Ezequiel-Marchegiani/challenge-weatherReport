import React from 'react';
import './Day.css';

function Day(props) {
  return (
    <div>
        <p>{props.day}</p>
        <img src={props.icon} alt="" />
        <div>
            <p>{props.maxTemp}</p>
            <p>{props.minTemp}</p>
        </div>
    </div>
  );
}

export default Day;