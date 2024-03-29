import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Oreders/Orders';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      
      <Routes>
        <Route path="/" element={<Shop></Shop>} />
        <Route path="/shop" element={<Shop></Shop>} />
        <Route path="/orders" element={<Orders></Orders>} />
        <Route path="/inventory" element ={<Inventory></Inventory>} />
        <Route path="/about" element ={<About></About>} />
      </Routes>
    </div>
  );
}

export default App;
