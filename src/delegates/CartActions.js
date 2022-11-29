import Cookie from 'js-cookie';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

const addToCart = (productId,qty) => async(dispatch, getState) => {
        console.log('add to cart...')
        try {
            const response = await fetch('/product/' + productId, {mode:'no-cors'});
            if (response.ok) {
                var data = response.data;
                dispatch({
                    type: CART_ADD_ITEM, 
                    payload: {
                        product: data.id,
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
            } else {
              throw new Error('Data coud not be fetched!');
            }
          } catch (error) {
            console.log(error);
            throw new Error('Fatal Error encounted! Check console logs.');
        }
}

const removeFromCart = (productId) => (dispatch, getState) =>{
    dispatch({type: CART_REMOVE_ITEM, payload: productId});
    // put the remove cartItems out of Cookie
    const { cart: { cartItems }} = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));

}

export { addToCart, removeFromCart };