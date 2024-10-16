
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeComp from './Components/HomeComp';
import ProductsComp from './Components/ProductsComp';
import NavComp from './Components/NavComp';
import ProductDetails from './Components/ProductDetails';
import ContextData from './Components/ContextData';
import CartComp from './Components/CartComp';

function App() {
  return (
    <ContextData>
      <div className='h-[100vh] lg:h-[100vh]'>
        <Router>
          <NavComp />
          <Routes>
            <Route path="/" element={<HomeComp/>} />
            <Route path="/ProductComp/:eachProduct" element={<ProductsComp/>} />
            <Route path="/ProductDetails/:eachProDeatails/:id" element={<ProductDetails/>} />
            <Route path="/Cart" element={<CartComp/>} />
          </Routes>
        </Router>
      </div>
    </ContextData>
  );
}

export default App;
