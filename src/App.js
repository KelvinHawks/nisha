import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage/Homepage';
import Products from './components/Products/Products';
import data from './components/Products/Data';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';

function App() {
  const features = data.map(feature=>{
    return <Products
    feature = {feature}
    />
  })
  return (
    <>
    <Router>
      <Navbar/>
    </Router>
    <Homepage/>
    <section id='Products'>
      <div className='products-div'>
        {features}
      </div>
    </section>
      
    </>
  );
}

export default App;
