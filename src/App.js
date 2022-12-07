import React from 'react';
import './App.css';
import Main from "./pages/Main";
import About from "./pages/About";
import Search from "./pages/Search";
import AllProducts from './pages/AllProducts';
import Product from './pages/ProdDetails';
import Order from './pages/Order';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Signin from './pages/Signin';
import Kitchen from './pages/Kitchen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { createBrowserHistory } from 'history';
import { logout } from './actions/UserActions';

function App() {
  const history = createBrowserHistory();
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  }

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
                                  {userInfo? 
                                    <Link to={`/orders/user/${userInfo.id}`} className="dropdown-item">My Order</Link>
                                    :
                                    <Link to='/signin'></Link>
                                  }
                                </li>
                                <li>
                                  {userInfo? 
                                    <Link to={`/kitchens/user/${userInfo.id}`} className="dropdown-item">My Kitchen</Link>
                                    :
                                    <Link to='/signin'></Link>
                                  }
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                      <div className="header-links">
                        <Link to="/cart">Cart</Link>
                        { // if userInfo exists, redirect to user profile. otherwise, to sign in.
                          userInfo ? 
                          <Link to={'/'}>{userInfo.username}</Link> 
                          :
                          <Link to="/signin">Sign In</Link>
                        }
                        { userInfo && 
                        <a href="/signin" onClick={logoutHandler}>Log Out</a>
                        }     
                      </div>
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
          <Route path="/kitchens/user/:userId" element={<Kitchen />} />
        </Routes>
      <footer className="py-5 bg-dark">
          <div className="container"><h5 className="m-0 text-center text-white"><strong>Team Jing Xue, Jing Shu 2022</strong></h5></div>
      </footer>  
      </div>
    </BrowserRouter>
  );
}

export default App;
