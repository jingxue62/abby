import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from "react-router-dom";
import { getProduct } from '../delegates/Products'

export default function GetProduct() {
    const [getItem, initItem] = useState([]);
    const [qty, setQty] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const { productId } = useParams();


    useEffect(() => {
         getProduct(productId)
           .then((res) => {
             initItem(res.data);
           })
           .catch((e) => {
             // console.log(e.message)
           })
       }, [])

   let navigate = useNavigate();
   const handlePlaceOrder = async () => {
     setIsLoading(true);
     try {
         const config = {
             method: 'POST',
             headers: {
                 Accept: 'application/json',
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify({product_id: productId, buyer_id: 1, quantity: qty, desc: 'Order just placed.'})
         };
         const response = await fetch('/orders/placeOrder', config, {mode:'no-cors'});
         if (response.ok) {
           // console.log(response.json());
         } else {
           throw new Error('Data coud not be fetched!');
         }
       } catch (error) {
         console.log(error);
         throw new Error('Fatal Error encounted! Check console logs.');
     }
     setIsLoading(false);
     navigate('/orders/user/1');
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
          <header className="bg-dark py-1">
            <div className="container-md px-5 px-lg-5 my-3">
              <table className="table table-striped table-dark text-white">
              <thead>
                    <th> <h5><strong>Owner</strong></h5> </th>
                    <th> <h5><strong>Created Date</strong></h5> </th>
                    <th> <h5><strong>Last Updated Date</strong></h5> </th>
                    <th> <h5><strong>Price</strong></h5> </th>
                    <th> </th>
                    <th>
                      <div className="col col-xs-4">
                        <strong>Qty:</strong>
                        <select value={qty} onChange={(e) => {setQty(e.target.value)}} >
                          {[...Array(getItem.availability).keys()].map(x => 
                                      <option key={x+1} value={x+1}> { x+1 } </option>
                          )}
                        </select>
                        <button type="button" className="btn btn-outline-light m-2" onClick={handlePlaceOrder}>
                          <strong>Add to Cart</strong>
                        </button>
                      </div>
                    </th>
                </thead>
                <tbody>
                    <th> {getItem.username} </th>
                    <th> {getItem.created_at} </th>
                    <th> {getItem.updated_at} </th>
                    <th> {getItem.discount < 1.0 &&
                        <span className="text-muted text-decoration-line-through">${getItem.price}</span>
                      }
                      ${(getItem.price * getItem.discount).toFixed(2)}
                    </th>
                    <th></th>
                    <th></th>
                </tbody>
              </table>
            </div> 
          </header>
          <body className="bg-dark py-5">
              <div className="row">
                <div className="container-fluid">
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
                          {/* <div class="carousel-caption d-none d-md-block">
                            <h5>Images</h5>
                            <p>
                              Browse
                            </p>
                          </div> */}
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
                        <div className="col-12 col-md-5">
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
