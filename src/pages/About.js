import React from 'react';
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { ImSearch } from "react-icons/im";
import { BiSort } from "react-icons/bi";
import { MdViewColumn } from "react-icons/md";

function About() {
  return (
    <div className="App">
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
      </nav> */}

      <header className="py-1">
          <div className="container px-4 px-lg-5 my-5">
              {/* <p className="fs-4 fw-bold text-left text-white">About Us</p> */}
          </div>
      </header>

      <body className="py-2">
        <div className="container">
            <div className="row">
                  <p className="fs-1 fw-bold">Build an online Kitchen</p>
                  <p className="fs-6 fw-bold">
                    EKitchen is a software platform multipurpose-built to help people start, build, and grow your 
                    homemade food businesses,</p>
                <p className="fs-6 fw-bold">
                    and help customers to search/order favorite food in their community. </p>
            </div>
            <div className="row">
                  <div className="col px-4 px-lg-5 my-1">
                    <button className= "button"> GET STARTED</button>
                  </div>
            </div>
            <div className="row">
                <img src="/images/about-1.png"></img>
            </div>
        </div >
        <div className="container">     
            <div className="row">
                  <p className="fs-1 fw-bold">Simple and easy to order Homemade food</p>

            </div>
        </div >

        <section className='section2'>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "var(--white)",
            fontSize: 20,
          }}
        >
          <IconContext.Provider
            value={{
              style: {
                fontSize: 40,
                color: "inherit",
              },
            }}
          >
            <ImSearch />
          </IconContext.Provider>
          <h3 style={{ marginBottom: 10 }}> Search favorite food</h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "var(--white)",
            fontSize: 20,
          }}
        >
          <IconContext.Provider
            value={{
              style: {
                fontSize: 40,
                color: "inherit",
              },
            }}
          >
            <BiSort />
          </IconContext.Provider>
          <h3 style={{ marginBottom: 10 }}>Easily Sort food</h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "var(--white)",
            fontSize: 20,
          }}
        >
          <IconContext.Provider
            value={{
              style: {
                fontSize: 40,
                color: "inherit",
              },
            }}
          >
            <MdViewColumn />
          </IconContext.Provider>
          <h3 style={{ marginBottom: 10 }}>Easily View Products</h3>
          
        </div>
      </section>

      </body>

      {/* <footer className="py-5 bg-dark">
          <div className="container"><h5 className="m-0 text-center text-white"><strong>Team Jing Xue, Jing Shu 2022</strong></h5></div>
      </footer> */}
  </div>
  );
}

export default About;
