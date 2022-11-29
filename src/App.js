import React from 'react';
import './App.css';
import Main from "./pages/Main";
import About from "./pages/About";
import Search from "./pages/Search";
import AllProducts from './pages/AllProducts';
import Product from './pages/ProdDetails';
import Order from './pages/Orders';
import Cart from './pages/Cart';
import { BrowserRouter, Routes, Route, useHistory } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/search/:content" element={<Search />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/orders/user/:userId" element={<Order />} />
          <Route path="/cart/:id?" component={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
