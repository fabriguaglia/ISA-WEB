import Header from './components/Header/Header';
import './App.css';
import HomeLanding from './components/Home-Landing/HomeLanding';
import Contact from './components/Contact/Contact';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Inicial from './components/Inicial/Inicial';
import ProfileBasic from './components/BlogTwitter/Blog';
import Inicialtest from './components/Inicial/Inicialtest';
import Inscripciones from './components/Inscripciones/Inscripciones';

function App() {
  return (
    <>
    <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<HomeLanding />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inicial" element={<Inicial />} />
          <Route path="/blog" element={<ProfileBasic />} />
          <Route path="/inicialtest" element={<Inicialtest />} />
          <Route path="/inscripciones" element={<Inscripciones />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
