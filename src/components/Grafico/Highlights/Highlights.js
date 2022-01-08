import React from 'react';
import './Highlights.css';
import { ProgressBar } from 'react-bootstrap';

function Highlights() {
  const now = 60;

  const progressInstance = <ProgressBar now={now} label={`${now}%`} />;

  return (
    <section className='hightLigtsContainer'>
      <div className='hightLightItem windStatus'>
        <p>Wind Status</p>
        <h1>7 <span>mph</span></h1>
        <div className='containerIconHighLight'><i className="fas fa-location-arrow"></i><p>WSW</p></div>
      </div>
      <div className='hightLightItem humidity'>
        <p>Humidity</p>
        <h1>84 <span>%</span></h1>
        {progressInstance}
      </div>
      <div className='hightLightItem visibility'>
        <p>Visibility</p>
        <h1>6,4 <span>miles</span></h1>
      </div>
      <div className='hightLightItem airPressure'>
        <p>Air Pressure</p>
        <h1>998 <span>mb</span></h1>
      </div>
    </section>
  );
}

export default Highlights;