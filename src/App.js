import React, {useState, useEffect} from 'react';
import './App.css';
import Grafico from './components/Grafico/Grafico';
import SideBar from './components/Sidebar/Sidebar';

function App() {
  let variableVacia = ""
  function ubicacionSeleccionada(idLocation){
    console.log(idLocation);
  }
  
  console.log(variableVacia);
  return (
    <section className='containerSidebar_Grafico'>
      <SideBar pasajeVariableVacia={variableVacia} ubicacionSeleccionada={(idLocation) => ubicacionSeleccionada(idLocation)}/>
      <Grafico pasajeVariableConId={variableVacia}/>
    </section>
  );
}

export default App;
