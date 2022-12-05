import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom"
import { addToCart, removeFromCart } from "../actions/CartActions";
import { CART_ADD_ITEM } from "../constants/cartConstants";
import {createBrowserHistory } from 'history';


export default function Cart(props) {
    const history = createBrowserHistory();
    const [isLoading, setIsLoading] = useState(false);
    const cart = useSelector( state => state.cart);
    const {cartItems} = cart;
    // get the product id from URL
    const { productId } = useParams();
    // get the qty from the url
    const qty = history.location.search ? Number(history.location.search.split("=")[1]) : 1;

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

    let navigate = useNavigate();
    const placeOrderHandler = async () => {
        setIsLoading(true);
        try {
            const config = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({product_id: productId, buyer_id: 1, quantity: qty, desc: 'Order just placed.'})
            }

            // Delete Products from cart after place order
            if (CART_ADD_ITEM.length !== 0) {
                cartItems.map( (item) => {
                    dispatch(removeFromCart(item.productId));
                })
            }
            dispatch(removeFromCart(productId));
            const response = await fetch('/orders/placeOrder', config, {mode:'no-cors'});

            if (response.ok) {
                
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
    if (isLoading) { return <div>Loading...</div>; }
    return (
        <div className="App">
          <body>
                <div className="cart">
                <div className="cart-list">
                    <ul className="cart-list-container">
                        <li>
                            <h5> <strong>Shopping Cart</strong></h5>
                            <div> <h5><strong>Price</strong></h5> </div>
                        </li>
                        {   CART_ADD_ITEM.length === 0 ? <div> Cart is empty </div>: cartItems.map( (item,index) => 
                            <li key={index}>
                                <div className="cart-image">
                                    <img src={item.image} alt='product'></img>
                                </div>
                                <div className="cart-name">
                                    <div>
                                        <Link to={"/product/" + item.productId}>{item.name}</Link>
                                    </div>
                                    <div>
                                        {item.username}
                                    </div>
                                    <div>
                                        Qty:<select value={item.qty} onChange={(e) => dispatch(addToCart(item.productId, e.target.value))}>
                                            {[...Array(item.countInStock).keys()].map(x =>
                                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                                            )}
                                        </select>
                                        {' '}
                                        <button type="button" className="button2" onClick={() => removeFromCartHandler(item.productId)}> Delete </button>
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
                    <h5> 
                        {/* calculate the total number of items and price  */}
                        Total ( { cartItems.reduce((pre,c) => pre + c.qty , 0)} items):
                        $ {cartItems.reduce((pre,c) => pre + (c.price * c.discount) * c.qty, 0).toFixed(2)}
                    </h5>
                        <button className="button primary full-width" onClick={placeOrderHandler} disabled={cartItems.length === 0}>
                            Place order    
                        </button>
                </div>
            </div>
          </body>
      </div>
  )
}
