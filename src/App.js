import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage/Homepage';
import Products from './components/Products/Products';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
//import Button from './components/Button/Button';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
    </Router>

    <section>
      <Homepage/>
    </section>
      
    <section >
      <Products/>
    </section>

    <section id='aboutUs'>
      <About/>
    </section>
    
    <section id='contact'>
      <Contact/>
    </section>
    <section>
      <Router>
        <Footer/>
      </Router>
      
    </section>
    </>
  );
}

export default App;
