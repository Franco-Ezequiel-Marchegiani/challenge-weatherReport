import React from 'react';
import './App.css';
import Grafico from './components/Grafico/Grafico';
import useSideBar from './components/Sidebar/Sidebar';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnUFVcwC5qBXV6WqInN0NdMU3cGTHUTlg",
  authDomain: "weather-report-challenge.firebaseapp.com",
  projectId: "weather-report-challenge",
  storageBucket: "weather-report-challenge.appspot.com",
  messagingSenderId: "522847286473",
  appId: "1:522847286473:web:8416df651b1c9c2d7ac918",
  measurementId: "G-DRN9KRSDMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  const {render, idSeleccionadoPorUsuario, idiomaPagina} = useSideBar();
  return (
    <section className='containerSidebar_Grafico'>
      {render}
      <Grafico idSeleccionadoPorUsuario={idSeleccionadoPorUsuario} idiomaPagina={idiomaPagina} />
    </section>
  );
}

export default App;
