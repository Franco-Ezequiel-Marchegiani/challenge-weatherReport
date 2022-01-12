import React, {useState, useEffect} from 'react';
import './Sidebar.css';
import { Spinner } from 'react-bootstrap';
function SideBar(props) {
  const [sideBar, setSideBar] = useState(true);
  const [climaDia, setClimaDia] = useState([""]);
  const [cargando, setCargando] = useState(true);

  const [infoClimaGeneral, setInfoClimaGeneral] = useState([]);

  const [listadoZonas, setListadoZonas] = useState([]);
  const [filtradoBusqueda, setFiltradoBusqueda] = useState("");
  /* Configuracion mostrar y ocultar sidebars */
  const changeHideSidebar = () =>{
    setSideBar(false)
  }
  const showOriginalSidebar = () =>{
    setSideBar(true)
  }

  /* Llamado API */
  useEffect( () =>{
      apiDatos()
  },[]);
  const apiDatos = async() =>{
    //Json con los datos de Buenos Aires
    const data = await fetch(`/api/location/468739/`);
    const climaJson =await data.json()
    setClimaDia(climaJson.consolidated_weather)
    setCargando(false)
  };
  /* Llamada API para el título */
  useEffect( () =>{
      apiDatosGenerales()
  },[]);
  const apiDatosGenerales = async() =>{
    //Json con los datos de Buenos Aires
    const data = await fetch(`/api/location/468739/`);
    const climaGeneralJson =await data.json()
    setInfoClimaGeneral(climaGeneralJson)
    setCargando(false)
  };
  const apiBuscador = async() =>{
    //Json con los datos de Buenos Aires
    const data = await fetch(`/api/location/search/?query=${filtradoBusqueda}`);
    const buscadorJson =await data.json()
    setListadoZonas(buscadorJson);
    console.log("Cambió el URL");
    console.log(buscadorJson);
  };
  useEffect( () =>{
    
    apiBuscador()
  },[filtradoBusqueda]);

  //Función busqueda
  const tipeoUsuario = (e) =>{
    setFiltradoBusqueda(e.target.value)
  }

  /* Al hacer la bara de busqueda dividirlo por partes:
  La barra de búsqueda, hacer que funcione para mostrar los paises en el SIDEBAR.
  Luego, para que se actualicen los datos, el usuario tiene que CLICKEAR cada pais para que aplicara.
  Ej, está el listado de Buenos Aires, Monte video & Lima, la barra de búsqueda sirve para buscar entre
  ellos, y una vez que se clickeen, ahí se verán modificados */
  /* Comunicación hijo a Padre */

  /* Configuracion IconoImagen */ 
  const nombreImagen = "/static/img/weather/png/"
  const extension = ".png"

  /* Configuracion Fecha */
  const fechaActualizada = new Date(climaDia[0].applicable_date);
  const optionsDate = {weekday: 'long', month: 'long', day: 'numeric'}
  return (
    <section className='sideBarContainer'>
    {sideBar ? 
    <section className='sideBarDefault'>
          <div className='btns-containers'>
              <button onClick={changeHideSidebar} className='btn-searchPlaces'>Buscar por zonas</button>
              <button onClick={changeHideSidebar} className='iconLocation'><i className="fas fa-search-location"></i></button>
          </div>
          <div className='iconTimeContainer'>
          { cargando === true && <Spinner animation="grow" className='spinnerCarga' /> }
          <img className='iconTime' src={nombreImagen + climaDia[0].weather_state_abbr + extension} alt="Icono Clima" />
          </div>
          <h1 className='titleTemperature'><span className='numberTemperature'>{cargando === true ? <p className='numberTemperatureLoading'>...</p> : climaDia[0].the_temp.toFixed(0) }</span><span className='c_temperature'>°c</span></h1>
          <h2 className='subTitle'>{climaDia[0].weather_state_name}</h2>
          <p className='textDateToday'>Today <span className='pointSideBar'>•</span> {cargando === true ? "" : fechaActualizada.toLocaleDateString("es-ES", optionsDate) }</p>
          <div className='containerUbication'>
          <i className="fas fa-map-marker-alt"></i>
            <p>{cargando === true ? <p>Cargando...</p> : infoClimaGeneral.title}</p>
          </div> 
      </section> : 
      <section className='sideBarSearch'>
      <div className='closeSidebarContainer'>
      <i className="fas fa-times" onClick={showOriginalSidebar}></i>
      </div>
      <div className='buscadorContainer'>
      <i className="fas fa-search"></i>
      <input onChange={tipeoUsuario} className='inputSearch' type="text" placeholder='Buscar ubicación'/>
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