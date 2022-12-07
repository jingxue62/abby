import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from "react-router-dom"
import { getKitchen } from '../actions/KitchenActions'
import { useSelector } from 'react-redux';

export default function Kitchen() {
    const [getItems, initItem] = useState([]);
    const [filterValue, setFilter] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const { userId } = useParams();
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    useEffect(() => {
        getKitchen(userId,filterValue)
           .then((res) => {
             initItem(res.data);
           })
           .catch((e) => {
             console.log(e.message)
           })
       }, [filterValue]);

     let navigate = useNavigate();
     const handleDeleteProduct = async (itemID) => {
       // console.log(itemID);
        setIsLoading(true);
        try {
            const config = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({id: itemID})
            };
            var url = '/product/deleteProduct'+itemID;
            const response = await fetch(url, config, {mode:'no-cors'});
            if (response.ok) {
              // console.log(response.json());
            } else {
              throw new Error('Data coud not be fetched!');
            }
          } catch (error) {
            console.log(error);
            throw new Error('Fatal Error encounted! Check console logs.');
        }
        setIsLoading(false);
        window.location.reload();
     };

     const handleCancelOrder = async (itemID) => {
      // console.log(itemID);
       setIsLoading(true);
       try {
           const config = {
               method: 'POST',
               headers: {
                   Accept: 'application/json',
                   'Content-Type': 'application/json',
               },
               body: JSON.stringify({id: itemID})
           };

           const response = await fetch('/orders/deleteOrder', config, {mode:'no-cors'});
           if (response.ok) {
             // console.log(response.json());
           } else {
             throw new Error('Data coud not be fetched!');
           }
         } catch (error) {
           console.log(error);
           throw new Error('Fatal Error encounted! Check console logs.');
       }
       setIsLoading(false);
       window.location.reload();
    };

    return (
        <div className="App">
        { userInfo ?
          <body className="bg-dark py-5">
              <div className="container">
                  <div className="row">
                      <div className="col"><p className="fs-4 fw-bold text-left text-white">My Kitchen</p></div>
                      <table>
                          <thead>
                              <tr>
                                  <th className='text-white'>
                                      <h5> <strong>Filter</strong></h5>
                                  </th>
                                  <th>
                                      <div className="container-sm px-5 px-lg-5 my-3">
                                        <select onChange={(e)=>{setFilter(Number(e.target.value))}} 
                                            className="form-select" aria-label="filter">
                                            <option value="1">By product</option>
                                            <option value="2">By order</option>
                                        </select>
                                      </div>
                                  </th>
                              </tr>
                          </thead>
                      </table>
                      <div className="col"></div>
                      <div className="col"></div>
                  </div>
                  <div className="row">
                      <div className="col border-top px-4 px-lg-5 my-1"></div>
                  </div>
              </div>
              { filterValue==1? (
                // Filtered by product
                <table class="table table-dark">
                  <thead className="fs-5 fw-bold">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Price</th>
                        <th scope="col">Discount</th>
                        <th scope="col">CountInStock</th>
                        <th scope="col">Sales</th>
                        <th scope="col">Placed At</th>
                        <th scope="col">Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                    {getItems.map( (item,idx) => {
                          return (
                      <tr key={idx}>
                        <td scope="row">{idx+1}</td>
                        <td>{item.name}</td>
                        <td>${item.price}</td>
                        <td>{item.discount}</td>
                        <td>{item.availability}</td>
                        <td>{item.order_num}</td>
                        <td>{item.created_at}</td>
                        <td>
                            <button type="button" className="btn btn-outline-light" >Edit</button>
                            <button type="button" className="btn btn-outline-light" onClick={() => handleDeleteProduct(item.id)}>Delete</button>
                        </td>
                      </tr>
                        )
                    })}
                  </tbody>
                </table>
              ) : (
                // Filtered by order
                <table class="table table-dark">
                  <thead className="fs-5 fw-bold">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Progress</th>
                        <th scope="col">Price</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Total</th>
                        <th scope="col">Buyer</th>
                        <th scope="col">Placed At</th>
                        <th scope="col">Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                    {getItems.map( (item,idx) => {
                            return (
                        <tr key={idx}>
                          <td scope="row">{idx+1}</td>
                          <td>{item.name}</td>
                          <td>In progress{item.status}</td>
                          <td>${(item.price * item.discount).toFixed(2)}</td>
                          <td>{item.quantity}</td>
                          <td>${(item.price * item.discount * item.quantity).toFixed(2)}</td>
                          <td>{item.username}</td>
                          <td>{item.created_at}</td>
                          <td>
                              <button type="button" className="btn btn-outline-light" >Details</button>
                              <button type="button" className="btn btn-outline-light" onClick={() => handleCancelOrder(item.id)}>Cancel</button>
                          </td>
                        </tr>
                          )
                      })}
                  </tbody>
                </table>
              )}       
          </body> :
          <Link to="/signin">Sign In</Link>
        }
      </div>
  )
}
