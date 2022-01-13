import React from 'react';
import './App.css';
import Grafico from './components/Grafico/Grafico';
import useSideBar from './components/Sidebar/Sidebar';

function App() {
  const {render, idSeleccionadoPorUsuario} = useSideBar();
  return (
    <section className='containerSidebar_Grafico'>
      {render}
      <Grafico idSeleccionadoPorUsuario={idSeleccionadoPorUsuario}/>
    </section>
  );
}

export default App;
