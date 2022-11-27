// get order by userId
const getOrders = async (userId) => {
    try {
        const response = await fetch('/orders/user/' + userId, {mode:'no-cors'});
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


export { getOrders };
