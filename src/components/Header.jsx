import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';

const Header = () => {
  return (

    <Router basename="/gabrielmordevportfolio">
    <header>
      <h1>GabrielMorDev</h1>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Acerca de mí</Link></li>
        </ul>
      </nav>
    </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       
      </Routes>
    </Router>

  );
};

export default Header;