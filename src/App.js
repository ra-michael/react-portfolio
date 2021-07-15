import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Schools from './components/Schools';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact'
import Footer from './components/Footer';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './styles/animate.min.css'


import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Schools />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
