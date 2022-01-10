import './App.css';
import Grafico from './components/Grafico/Grafico';
import SideBar from './components/Sidebar/Sidebar';

function App() {
  function searchBar(e){
    console.log("Clicked");
  }
  return (
    <section className='containerSidebar_Grafico'>
      <SideBar propPrueba={(e) => searchBar(e)}/>
      <Grafico/>
    </section>
  );
}

export default App;
