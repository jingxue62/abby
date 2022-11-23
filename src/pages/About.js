import React from 'react';
import logo from '../logo.svg';

function About() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container px-4 px-lg-5">
          <a class="navbar-brand">E Kitchen</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                      <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                      <li class="nav-item"><a class="nav-link active" aria-current="page" href="/about">About</a></li>
                      <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                              <li><a class="dropdown-item" href="#!">All Products</a></li>
                              <li><hr class="dropdown-divider" /></li>
                              <li><a class="dropdown-item" href="#!">My Order</a></li>
                              <li><a class="dropdown-item" href="#!">My Kitchen</a></li>
                          </ul>
                      </li>
                  </ul>
                  <form class="d-flex">
                      <button class="btn btn-outline-dark" type="submit">
                          <i class="person-circle me-1"></i>
                          User
                          <span class="badge bg-dark text-white ms-1 rounded-pill">login</span>
                      </button>
                  </form>
              </div>
          </div>
      </nav>

      <header class="bg-dark py-1">
          <div class="container px-4 px-lg-5 my-5">
              <p class="fs-4 fw-bold text-left text-white">About Us</p>
          </div>
      </header>

      <body class="bg-dark py-2">
        <p class="fs-4 fw-bold text-left text-white">E-Kitchen powered by React & Bootstrap + Django</p>
          <img src={logo} className="App-logo" alt="logo" />
      </body>

      <footer class="py-5 bg-dark">
          <div class="container"><p class="m-0 text-center text-white">Team Jing Xue, Jing Shu 2022</p></div>
      </footer>
  </div>
  );
}

export default About;
