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
    let path = "/search/" + sp.replace(" ", ";");
    navigate(path);
    window.location.reload();
  };
  return (
    <div className="App">
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
  </div>
  );
}

export default Search;
