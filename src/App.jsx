import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <div className="App">     
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
       
      </div>
    </Router>
  );
};

export default App;
