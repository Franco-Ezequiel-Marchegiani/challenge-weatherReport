import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
function Footer({idiomaPagina}) {
  console.log(idiomaPagina);
  return (
    <footer>
      {idiomaPagina === "spanish" ?
      <p>Creado por <Link className='linkProfileFooter' to="//github.com/Franco-Ezequiel-Marchegiani" target="_blank">Franco Ezequiel Marchegiani</Link> - devChallenges.io</p>
      :
      <p>Created by <Link className='linkProfileFooter' to="//github.com/Franco-Ezequiel-Marchegiani" target="_blank">Franco Ezequiel Marchegiani</Link> - devChallenges.io</p>
       }
        
    </footer>
  );
}
export default Footer;