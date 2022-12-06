import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { productDetailsReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
// import { orderCreateReducer } from './reducers/orderReducers';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers';
import messageReducer from './reducers/messageReducer';

import Cookie from 'js-cookie';


// get cartItems,userinfo from the cookies if exist
const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = { cart: { cartItems }};

const reducer = combineReducers({
    // productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    register: userRegisterReducer,
    // productSave: productSaveReducer,
    // productDelete: productDeleteReducer,
    message: messageReducer,
    // userProfile: userProfileReducer,
    // userUpdate: userUpdateReducer,
    // orderCreate: orderCreateReducer,

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer, 
    initialState,
    composeEnhancer(applyMiddleware(thunk)));

export default store;