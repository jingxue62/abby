import Cookie from 'js-cookie';
import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

const addToCart = (productId,qty) => async(dispatch, getState) => {
        try {
            // const response = await fetch('/product/' + productId, {mode:'no-cors'});
            const res = await axios.get('/product/' + productId);

            if (res.status === 200) {
                var data = res.data.data;
                dispatch({
                    type: CART_ADD_ITEM, 
                    payload: {
                        productId: data.id,
                        name: data.name,
                        image: data.image,
                        price: data.price,
                        discount: data.discount,
                        countInStock: data.availability,
                        ownerName: data.username,
                        qty: Number(qty)
                    }
                });
                const { cart: { cartItems }} = getState();
                Cookie.set("cartItems", JSON.stringify(cartItems));
            } 
          } catch (error) {
            console.log("cartActions, error: ",error);
        }
}

const removeFromCart = (productId) => (dispatch, getState) =>{
    dispatch({type: CART_REMOVE_ITEM, payload: productId});
    // put the remove cartItems out of Cookie
    const { cart: { cartItems }} = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));

}

export { addToCart, removeFromCart };