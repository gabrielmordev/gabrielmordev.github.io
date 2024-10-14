import '../assets/styles/Home.css';
import fotoGabriel from "../assets/images/Gabriel_Moreno.jpg";
import { Link } from 'react-router-dom';
import logoGitHub from "../assets/images/github-mark-white.svg";
import logoLinkedin from "../assets//images/linkedin.svg";

const Perfil = () => {
  return (

    <div className='card'>
      <div className='first-content'>
      <span>
      <h1>Gabriel Moreno Muñoz</h1>
           <img src={fotoGabriel} alt="fotogabriel"/>
      </span>
      </div>
      <div className='second-content'>
      <span>
      <h2><Link to="/">Inicio</Link></h2>
        <h2><Link to="/about">Acerca de mí</Link></h2> 
        <div className='redes'>
        <a href="https://github.com/gabrielmordev">
         <img src={logoGitHub} alt="GitHub" />
       </a>
       <a href="https://www.linkedin.com/in/gabriel-moreno-mu%C3%B1oz/">
        <img src={logoLinkedin} alt="LinkedIn" />
        
       </a>
    </div>
      </span>
      </div>
    </div>
  );
};

export default Perfil;