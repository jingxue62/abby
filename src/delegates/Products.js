// import { API_TARGET } from "../apiTarget";

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
          console.log("recommend products.");
          console.log(response.json());
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

export { topProducts, recomProducts, searchProducts };
