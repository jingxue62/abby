// get kitchen by userId
const getKitchen = async (userId, filterValue) => {
    try {
        var response;
        if(filterValue==2){
            response = await fetch('/kitchens/order/' + userId, {mode:'no-cors'});
        } else {
            response = await fetch('/kitchens/user/' + userId, {mode:'no-cors'});
        }
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


export { getKitchen };