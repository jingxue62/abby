import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from "react-router-dom"
import { getOrders } from '../actions/Orders'

export default function GetOrders() {
    const [getItems, initItem] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { userId } = useParams();


    useEffect(() => {
         getOrders(userId)
           .then((res) => {
             initItem(res.data);
           })
           .catch((e) => {
             console.log(e.message)
           })
       }, []);

     let navigate = useNavigate();
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
        // <div className="App">
          <body className="bg-dark py-5">
              <div className="container">
                  <div className="row">
                      <div className="col"><p className="fs-4 fw-bold text-left text-white">My Orders</p></div>
                      <div className="col"></div>
                      <div className="col"></div>
                  </div>
                  <div className="row">
                      <div className="col border-top px-4 px-lg-5 my-1"></div>
                  </div>
              </div>
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
                            <button type="button" className="btn btn-outline-light" >Comments</button>
                            <button type="button" className="btn btn-outline-light" onClick={() => handleCancelOrder(item.id)}>Cancel</button>
                        </td>
                      </tr>
                        )
                    })}
                  </tbody>
              </table>
          </body>
      // </div>
  )
}
