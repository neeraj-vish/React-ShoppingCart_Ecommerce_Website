import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsDetail from './Components/ProductsDetail';
import SearchItem from './Components/SearchItem';
import Cart from './Components/Cart';
import { items } from './Components/data';

const App = () => {
  const [data, setData] = useState([...items]);
  const [cart,setCart]=useState([])

  return (
    <Router>
      <Navbar  setData={setData} cart={cart}/>
      <Routes>
        <Route path="/" element={<Products items={data}  cart={cart} setCart={setCart}/>} />
        <Route path="/products/:id" element={<ProductsDetail cart={cart} setCart={setCart} />} />
        <Route path="/search/:term" element={<SearchItem />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
};

export default App;


