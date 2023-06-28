import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage/Homepage.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
    </Router>
    <Homepage/>
      
      
    </>
  );
}

export default App;
