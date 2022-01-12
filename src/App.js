import React from 'react';
import './App.css';
import Grafico from './components/Grafico/Grafico';
import SideBar from './components/Sidebar/Sidebar';

function App() {
  const prueba = 0
   function ubicacionSeleccionada(idLocation){
    console.log(idLocation);
    return idLocation
  }
  console.log(ubicacionSeleccionada());
  return (
    <section className='containerSidebar_Grafico'>
      <SideBar ubicacionSeleccionada={(idLocation) => ubicacionSeleccionada(idLocation)}/>
      <Grafico pruebaFunction={(idLocation) => ubicacionSeleccionada(idLocation)}/>
    </section>
  );
}

export default App;
