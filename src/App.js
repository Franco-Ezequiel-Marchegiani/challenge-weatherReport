import './App.css';
import Grafico from './components/Grafico/Grafico';
import SideBar from './components/Sidebar/Sidebar';

function App() {
  return (
    <section className='containerSidebar_Grafico'>
      <SideBar/>
      <Grafico/>
    </section>
  );
}

export default App;
