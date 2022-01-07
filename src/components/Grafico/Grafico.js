import React from 'react';
import Day from './Day/Day';
import './Grafico.css';
import IconoEjemplo from '../../Images/Clear.png'

function Grafico() {
  return (
    <section>
      <main>
        <div className='containerCyF'>
          <p>°C</p>
          <p>°F</p>
        </div>
        <div>
          <Day day="Tomorrow" icon={IconoEjemplo} maxTemp="16" minTemp="11"/> 
          <Day day="Su, 7 Jun" icon={IconoEjemplo} maxTemp="16" minTemp="11"/> 
          <Day day="Mon, 8 Jun" icon={IconoEjemplo} maxTemp="16" minTemp="11"/> 
          <Day day="Tue, 9 Jun" icon={IconoEjemplo} maxTemp="16" minTemp="11"/>       
          <Day day="Wed, 10 Jun" icon={IconoEjemplo} maxTemp="16" minTemp="11"/> 
        </div>
        <section>
          <h1>Today's Highlights</h1>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
      </main>
    </section>
  );
}

export default Grafico;