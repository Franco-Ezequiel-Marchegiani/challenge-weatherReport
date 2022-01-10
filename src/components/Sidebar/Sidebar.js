import React, {useState} from 'react';
import './Sidebar.css';
import IconoEjemplo from '../../Images/Clear.png'
function SideBar() {
  const [sideBar, setSideBar] = useState(true);
  const changeHideSidebar = () =>{
    setSideBar(false)
  }
  const showOriginalSidebar = () =>{
    setSideBar(true)
  }
  return (
    <section className='sideBarContainer'>
    {sideBar ? 
    <section className='sideBarDefault'>
          <div className='btns-containers'>
              <button onClick={changeHideSidebar} className='btn-searchPlaces'>Search for places</button>
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
      </section> : 
      <section className='sideBarSearch'>
      <div className='closeSidebarContainer'>
      <i className="fas fa-times" onClick={showOriginalSidebar}></i>
      </div>
      <div className='buscadorContainer'>
      <i className="fas fa-search"></i>
      <input className='inputSearch' type="text" placeholder='Buscar ubicación'/>
      <button className='btn-search'>Buscar</button>
      </div>
      <div className='BusquedasContainer'>
        <p>Buenos Aires  <span className='arrowTitle'>{'>'}</span></p>
        <p>Santiago <span className='arrowTitle'>{'>'}</span></p>
        <p>Lima <span className='arrowTitle'>{'>'}</span></p>
        
      </div>
      </section>}
  
    </section>
  );
}

export default SideBar;