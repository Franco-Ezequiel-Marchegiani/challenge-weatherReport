import React, {useState, useEffect} from 'react';
import './App.css';
import Grafico from './components/Grafico/Grafico';
import useSideBar from './components/Sidebar/Sidebar';

function App() {
  const {render, idSeleccionadoPorUsuario} = useSideBar();
  return (
    <section className='containerSidebar_Grafico'>
      {render}
      <Grafico/>
    </section>
  );
}

export default App;
