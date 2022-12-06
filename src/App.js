import React from 'react';
import './App.css';
import Main from "./pages/Main";
import About from "./pages/About";
import Search from "./pages/Search";
import AllProducts from './pages/AllProducts';
import Product from './pages/ProdDetails';
import Order from './pages/Orders';
import Cart from './pages/Cart';
import Register from './pages/Register-bak';
import Signin from './pages/Signin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import {createBrowserHistory } from 'history';


function App() {
  const history = createBrowserHistory();
  return (
    <BrowserRouter history={history}>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
            <a className="navbar-brand"><h2>eKitchen</h2></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item">
                          <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                  <Link to="/products" className="dropdown-item">All Products</Link>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <Link to="/orders/user/1" className="dropdown-item">My Order</Link>
                                </li>
                                <li><a className="dropdown-item" href="#!">My Kitchen</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="person-circle me-1"></i>
                            Jing Xue
                            <span className="badge bg-dark text-white ms-1 rounded-pill">Logout</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search/:content" element={<Search />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/orders/user/:userId" element={<Order />} />
          <Route path="/cart/:productId?" element={<Cart />} />
          <Route path="/cart/:productId" element={<Cart />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      <footer className="py-5 bg-dark">
          <div className="container"><h5 className="m-0 text-center text-white"><strong>Team Jing Xue, Jing Shu 2022</strong></h5></div>
      </footer>  
      </div>
    </BrowserRouter>
  );
}

export default App;
