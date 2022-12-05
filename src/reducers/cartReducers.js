import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants"

function cartReducer(state={cartItems:[]}, action){

    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload; // new product add to cart 
            // check whether new product is already existed in the cart
            const product = state.cartItems.find(x => x.productId === item.productId); 
            if (product) {
                // update the info if the product already in the cart 
                return { cartItems: state.cartItems.map( x => x.productId === product.productId? item: x) };
            }
            else
                // add the item to the cart 
                return { cartItems: [ ...state.cartItems, item ]};
        case CART_REMOVE_ITEM:
            // just keep items which is not in the remove list
            return {cartItems: state.cartItems.filter(x=> x.productId !== action.payload)};
        default:
            return state;
    }
}

export { cartReducer };