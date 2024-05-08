import Header from './components/Header/Header';
import './App.css';
import HomeLanding from './components/Home-Landing/HomeLanding';
import Contact from './components/Contact/Contact';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProfileBasic from './components/BlogTwitter/Blog';
import Inicialtest from './components/Inicial/Inicialtest';
import Inscripciones from './components/Inscripciones/Inscripciones';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <>
    <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<HomeLanding />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/niveles" element={<Inicialtest />} />
          <Route path="/blog" element={<ProfileBasic />} />
          <Route path="/inscripciones" element={<Inscripciones />} />
          <Route path="/elcolegio" element={<AboutUs />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
