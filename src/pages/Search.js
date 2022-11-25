import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import SearchProducts from './ProdSearch';

function Search() {
  const [sp, setsp] = useState('');
  const handleChange = event => {
    setsp(event.target.value);
  };

  let navigate = useNavigate();
  const handleClick = event => {
    event.preventDefault();
    let path = "/search/" + sp;
    navigate(path);
    window.location.reload();
  };
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container px-4 px-lg-5">
          <a className="navbar-brand"><h2>EKitchen</h2></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                      <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
                      <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
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
              <div className="input-group">
              <input type="search" className="form-control rounded" placeholder="Keywords" aria-label="Search" aria-describedby="search-addon" onChange={handleChange} value={sp}/>
              <button type="button" className="btn btn-outline-light" onClick={handleClick}>Search</button>
              </div>
              <div className="text-center text-white">
                  <h1 className="display-4 fw-bolder"></h1>
                  <p className="lead fw-normal text-white-50 mb-0"></p>
              </div>
          </div>
      </header>

      <body className="bg-dark py-2">
          <div className="container">
              <div className="row">
                  <div className="col"><p className="fs-4 fw-bold text-left text-white">Results</p></div>
                  <div className="col"></div>
                  <div className="col"></div>
              </div>
              <div className="row">
                  <div className="col border-top px-4 px-lg-5 my-1"></div>
              </div>
          </div>
          <section className="py-1">
                <div className="container px-4 px-lg-5 mt-5">
                    <SearchProducts />
                </div>
          </section>
      </body>

      <footer className="py-5 bg-dark">
          <div className="container"><p className="m-0 text-center text-white"><h5>Team Jing Xue, Jing Shu 2022</h5></p></div>
      </footer>
  </div>
  );
}

export default Search;
