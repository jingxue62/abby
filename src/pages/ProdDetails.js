import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import { getProduct } from '../delegates/Products'

export default function GetProduct() {
    const [getItem, initItem] = useState([]);
    const { productId } = useParams();


    useEffect(() => {
         getProduct(productId)
           .then((res) => {
             initItem(res.data);
           })
           .catch((e) => {
             console.log(e.message)
           })
       }, [])

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


          <body className="bg-dark py-2">
              <div className="row">

                        <div className="container-fluid">
                            <div className="row">
                                <div className="col col-xs-2"><p className="fs-5 fw-light fw-italic text-left text-white">Owner {getItem.username}</p></div>
                                <div className="col col-xs-2"><p className="fs-5 fw-light fw-italic text-left text-white">Created {getItem.created_at}</p></div>
                                <div className="col col-xs-2"><p className="fs-5 fw-light fw-italic text-left text-white">Last Updated {getItem.updated_at}</p></div>
                                <div className="col col-xs-2"><p className="fs-5 fw-light fw-italic text-left text-white">Price {getItem.price}</p></div>
                                <div className="col col-xs-4"><button type="button" className="btn btn-outline-light" onClick='#'>Place Order</button></div>
                            </div>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                            </div>
                            <div
                              id="carouselBasicExample"
                              className="row carousel slide carousel-fade"
                              data-mdb-ride="carousel"
                            >

                              <div class="carousel-inner">
                                <div class="carousel-item active">
                                  <img
                                    src={getItem.image}
                                    class=""
                                    alt="image"
                                  />
                                  <div class="carousel-caption d-none d-md-block">
                                    <h5>Images</h5>
                                    <p>
                                      Browse
                                    </p>
                                  </div>
                                </div>

                              </div>

                              <button
                                class="carousel-control-prev"
                                type="button"
                                data-mdb-target="#carouselBasicExample"
                                data-mdb-slide="prev"
                              >
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                              </button>
                              <button
                                class="carousel-control-next"
                                type="button"
                                data-mdb-target="#carouselBasicExample"
                                data-mdb-slide="next"
                              >
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                              </button>
                            </div>
                            <div className="row">
                                <div className="col"><p className="fs-4 fw-bold text-left text-white">Description</p></div>
                                <div className="col"></div>
                                <div className="col"></div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-8">
                                  <p className="fs-5 text-left text-white">{getItem.description}</p>
                                </div>
                                <div className="col-12 col-md-4"></div>
                            </div>
                            <section className="py-1">
                                  <div className="container px-4 px-lg-5 mt-5">
                                  </div>
                            </section>
                        </div>

              </div>
          </body>

          <footer className="py-5 bg-dark">
              <div className="container"><p className="m-0 text-center text-white"><h5>Team Jing Xue, Jing Shu 2022</h5></p></div>
          </footer>
      </div>
  )
}
