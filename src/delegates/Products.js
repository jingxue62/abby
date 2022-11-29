
import { PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL} from "../constants/productConstants"
import axios from 'axios';
// get top products
const topProducts = async () => {
    try {
        const response = await fetch('/products/top/4', {mode:'no-cors'});
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Data coud not be fetched!');
        }
      } catch (error) {
        console.log(error);
        throw new Error('Fatal Error encounted! Check console logs.');
    }
}

// get Recommended products
const recomProducts = async () => {
    try {
        const response = await fetch('/products/recommend/4', {mode:'no-cors'});
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Data coud not be fetched!');
        }
      } catch (error) {
        console.log(error);
        throw new Error('Fatal Error encounted! Check console logs.');
    }
}

// Search product results
const searchProducts = async (content) => {
    try {
        const response = await fetch('/products/search/' + content, {mode:'no-cors'});
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Data coud not be fetched!');
        }
      } catch (error) {
        console.log(error);
        throw new Error('Fatal Error encounted! Check console logs.');
    }
}

// get all products
const allProducts = async () => {
  try {
      const response = await fetch('/products/', {mode:'no-cors'});
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Data coud not be fetched!');
      }
    } catch (error) {
      console.log(error);
      throw new Error('Fatal Error encounted! Check console logs.');
  }
}

// get product
const getProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
    // const response = await fetch('/product/' + productId, {mode:'no-cors'});
    const res = await axios.get('/product/' + productId);
    console.log(res.status)
    if (res.status === 200){
      console.log(res.data);
      console.log(typeof(res.data));
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: res.data });
    }          
    else 
      dispatch({ type: PRODUCT_DETAILS_FAIL, payload: "Product Not Found!" });
  } catch (error) {
    console.log(error);
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
  }

  // try {
  //     const response = await fetch('/product/' + productId, {mode:'no-cors'});
  //     if (response.ok) {
  //       return response.json();
  //     } else {
  //       throw new Error('Data coud not be fetched!');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     throw new Error('Fatal Error encounted! Check console logs.');
  // }
}

export { topProducts, recomProducts, searchProducts, allProducts, getProduct };
