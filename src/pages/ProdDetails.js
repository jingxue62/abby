import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../actions/Products';
import {createBrowserHistory } from 'history';

function Product(props) {
    const history = createBrowserHistory();
    const navigate = useNavigate();
    // useState hook, set the quantity from the user
    const [ qty, setQty ] = useState(1);
    
    // useSelector hook, fetch productDetails from backend
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    const { productId } = useParams();

    useEffect(() => {
         dispatch(getProduct(productId));
    },[])
    
    if (error) { return <div>Error! {error.message}</div>; }
    if (loading) { return <div>Loading...</div>; }

   const addToCartHandler = () => {
      console.log("AddToCartHandler");
      // history.push("/cart/" + productId + "?qty=" + qty);
      navigate(`/cart/${productId}?qty=${qty}`);
   }

    return <div className="App">
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
                          {[...Array(product.availability).keys()].map(x => 
                                      <option key={x+1} value={x+1}> { x+1 } </option>
                          )}
                        </select>
                        <button type="button" className="btn btn-outline-light m-2" onClick={addToCartHandler}>
                          <strong>Add to Cart</strong>
                        </button>
                      </div>
                    </th>
                </thead>
                <tbody>
                    <th> {product.username} </th>
                    <th> {product.created_at} </th>
                    <th> {product.updated_at} </th>
                    <th> {product.discount < 1.0 &&
                        <span className="text-muted text-decoration-line-through">${product.price}</span>
                      }
                      ${(product.price * product.discount).toFixed(2)}
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
                            src={product.image}
                            class=""
                            alt="image"
                          />
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
                          <p className="fs-5 text-left text-white">{product.description}</p>
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
      </div>

}

export default Product;