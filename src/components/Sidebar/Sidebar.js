import React, {useState, useEffect} from 'react';
import './Sidebar.css';
import { Spinner } from 'react-bootstrap';
function useSideBar() {
  const [sideBar, setSideBar] = useState(true);
  const [climaDia, setClimaDia] = useState([""]);
  const [cargando, setCargando] = useState(true);

  const [infoClimaGeneral, setInfoClimaGeneral] = useState([]);

  const [listadoZonas, setListadoZonas] = useState([""]);
  const [filtradoBusqueda, setFiltradoBusqueda] = useState("");

  const [idSeleccionadoPorUsuario, setIdSeleccionadoPorUsuario] = useState();
  console.log(idSeleccionadoPorUsuario);
  //Componente del padre para obtener información del hijo
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
    //Json con datos de barra de busqueda
    const data = await fetch(`/api/location/search/?query=${filtradoBusqueda}`);
    const buscadorJson =await data.json()
    setListadoZonas(buscadorJson);
  };
  useEffect( () =>{
    apiBuscador()
  },[filtradoBusqueda]);

  //Función busqueda
  const tipeoUsuario = (e) =>{
    setFiltradoBusqueda(e.target.value)
  }
   /* const idClickeadaPorUsuario = (e) =>{
    
    let idTarget = e.target.id
    console.log(idTarget);
  }  */

  /* Configuracion IconoImagen */ 
  const nombreImagen = "/static/img/weather/png/"
  const extension = ".png"

  /* Configuracion Fecha */
  const fechaActualizada = new Date(climaDia[0].applicable_date);
  const optionsDate = {weekday: 'long', month: 'long', day: 'numeric'}
  /* Array objetos muestra simple */
  const arrayObjetosUbicaciones = [
    {title: "Buenos Aires",
    woeid: 468739
    },
    {
      title: "Santiago",
      woeid: 349859
    },
    {
      title: "Lima",
      woeid: 418440
    },
    {
      title: "São Paulo",
      woeid: 455827
    }
  ]
  return {
    idSeleccionadoPorUsuario,
    render:(
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
        {filtradoBusqueda === "" && 
          <div className='BusquedasContainer'>
          {arrayObjetosUbicaciones.map(item =>{
            return <p key={item.woeid} id={item.woeid} onClick={(e) => setIdSeleccionadoPorUsuario(e.target.id)}>{item.title}<span className='arrowTitle'>{'>'}</span></p>
          })}
          </div>
        }
        {filtradoBusqueda !== "" && 
          <div className='BusquedasContainer'>
            {listadoZonas.map(item =>{
              return <p key={item.woeid} id={item.woeid} onClick={(e) => setIdSeleccionadoPorUsuario(e.target.id)}>{item.title} <span className='arrowTitle'>{'>'}</span></p>
            })}
          </div>
        }
      </section>
      }
  
    </section>
  )}
}

export default useSideBar;