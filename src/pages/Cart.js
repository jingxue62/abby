import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom"
import { addToCart, removeFromCart } from "../delegates/CartActions";
import { CART_ADD_ITEM } from "../constants/cartConstants";

export default function Cart(props) {
    const cart = useSelector( state => state.cart);

    const {cartItems} = cart;
    // get the product id
    const productId = props.match.params.id;
    console.log("productId:", productId);
    // get the qty from the url
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;

    const dispatch = useDispatch();
    // = componentDidMount

    useEffect( () => {
        if(productId){
            dispatch(addToCart(productId, qty));
        }
    },[])

    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
    }

    const placeOrderHandler = () => {
        props.history.push("/");
    }

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
                                      <Link to="/orders/user/1" className="dropdown-item active">My Order</Link>
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


          <body>
          <div className="cart">
        <div className="cart-list">
            <ul className="cart-list-container">
                <li>
                    <h2> <strong>Shopping Cart</strong></h2>
                    <div> <h4><strong>Price</strong></h4> </div>
                </li>
                {   CART_ADD_ITEM.length === 0 ? <div> Cart is empty </div>: cartItems.map( (item,index) => 
                    <li key={index}>
                        <div className="cart-image">
                            <img src={item.image} alt='product'></img>
                        </div>
                        <div className="cart-name">
                            <div>
                                <Link to={"/product/" + item.product}>{item.name}</Link>
                            </div>
                            <div>
                                {item.username}
                            </div>
                            <div>
                                Qty:<select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                                    {[...Array(item.countInStock).keys()].map(x =>
                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                    )}
                                </select>
                                {' '}
                                <button type="button" className="button secondary" onClick={() => removeFromCartHandler(item.product)}> Delete </button>
                            </div>
                        </div>
                        <div className="cart-price">
                            {item.discount < 1.0 &&
                                <span className="text-muted text-decoration-line-through">${item.price}</span>
                            }
                            ${(item.price * item.discount).toFixed(2)}
                        </div>
                    </li>
                    )}
            </ul>
        </div>
        <div className="cart-action">
            <h3> 
                {/* calculate the total number of items and price  */}
                Total ( { cartItems.reduce((pre,c) => pre + c.qty , 0)} items):
                $ {cartItems.reduce((pre,c) => pre + (c.price * c.discount) * c.qty, 0).toFixed(2)}
            </h3>
                  <button className="button primary full-width" onClick={placeOrderHandler} disabled={cartItems.length === 0}>
                    Place order    
                  </button>
        </div>
    </div>

              
          </body>

          <footer className="py-5 bg-dark">
              <div className="container"><p className="m-0 text-center text-white"><h5>Team Jing Xue, Jing Shu 2022</h5></p></div>
          </footer>
      </div>
  )
}
