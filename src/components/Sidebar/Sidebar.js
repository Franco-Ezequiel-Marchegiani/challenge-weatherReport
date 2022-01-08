import React, {useRef} from 'react';
import './Sidebar.css';
import DOMPurify from 'dompurify';
import IconoEjemplo from '../../Images/Clear.png'
function SideBar() {
  const btnSearch = useRef();
  const placeSearched = () =>{
    console.log("Hola");
  }
  return (
    /* Usar este video de referencia para lograr el navbar que está oculto
    https://www.youtube.com/watch?v=CXa0f4-dWi4
     */
    <section className='sideBarContainer'>
      <div className='btns-containers'>
          <button onClick={placeSearched} ref={btnSearch} className='btn-searchPlaces'>Search for places</button>
          <button className='iconLocation'><i className="fas fa-search-location"></i></button>
      </div>
      <div className='iconTimeContainer'>
      <img className='iconTime' src={IconoEjemplo} alt="" />
      </div>
      <h1 className='titleTemperature'><span className='numberTemperature'>15</span><span className='c_temperature'>°c</span></h1>
      <h2 className='subTitle'>Clear</h2>
      <p className='textDateToday'>Today <span className='pointSideBar'>•</span> Fri, 5 Jun</p>
      <div className='containerUbication'>
      <i className="fas fa-map-marker-alt"></i>
        <p>Helsinki</p>
      </div>
    </section>
  );
}

export default SideBar;