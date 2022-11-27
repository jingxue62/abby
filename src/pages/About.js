import React from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.svg';

function About() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container px-4 px-lg-5">
          <a className="navbar-brand"><h2>EKitchen</h2></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                      <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                      </li>
                      <li className="nav-item"><a className="nav-link active" aria-current="page" href="/about">About</a></li>
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <li>
                                <Link to="/products" className="dropdown-item">All Products</Link>
                              </li>
                              <li><hr className="dropdown-divider" /></li>
                              <li><a className="dropdown-item" href="#!">My Order</a></li>
                              <li><a className="dropdown-item" href="#!">My Kitchen</a></li>
                          </ul>
                      </li>
                  </ul>
                  <form className="d-flex">
                      <button className="btn btn-outline-dark" type="submit">
                          <i className="person-circle me-1"></i>
                          User
                          <span className="badge bg-dark text-white ms-1 rounded-pill">login</span>
                      </button>
                  </form>
              </div>
          </div>
      </nav>

      <header className="bg-dark py-1">
          <div className="container px-4 px-lg-5 my-5">
              <p className="fs-4 fw-bold text-left text-white">About Us</p>
          </div>
      </header>

      <body className="bg-dark py-2">
        <p className="fs-4 fw-bold text-left text-white">E-Kitchen powered by React & Bootstrap + Django</p>
          <img src={logo} className="App-logo" alt="logo" />
      </body>

      <footer className="py-5 bg-dark">
          <div className="container"><p className="m-0 text-center text-white">Team Jing Xue, Jing Shu 2022</p></div>
      </footer>
  </div>
  );
}

export default About;
